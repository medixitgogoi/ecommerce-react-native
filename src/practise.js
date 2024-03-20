import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, ActivityIndicator, TextInput } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome6';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';
import { addItemToCart } from '../redux/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import TabBar from '../components/TabBar';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Category = ({ navigation, route }) => {

    console.log(data)

    // console.log(route.params.data);
    const category = route.params.data

    const categoryProducts = data.filter(item => item.category === category);
    const subCategoryProducts = categoryProducts.filter(item => item.subCategory === subCategorySelected);

    // console.log("categoryProductscategoryProducts", categoryProducts);

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [subCategorySelected, setSubCategorySelected] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [SortedBYmodel, setSortedBYmodel] = useState(false);
    const [filtermodel, setfiltermodel] = useState(false);
    const [Gendermodel, setGendermodel] = useState(false);
    const [sizemodel, setsizemodel] = useState(false);
    const [Brandmodel, setBrandmodel] = useState(false);
    const [Discountmodel, setDiscountmodel] = useState(false);
    const dispatch = useDispatch();

    const typee1 = "men"


    const cartProducts = useSelector(state => state.cart);
    const brandsData = [
        { id: '1', name: 'Sort by', iconName: "keyboard-arrow-down" },
        { id: '2', name: 'Filter', iconName: "filter-list" },
        { id: '3', name: 'Gender', iconName: "keyboard-arrow-down" },
        { id: '4', name: 'Brand', iconName: "keyboard-arrow-down" },
        { id: '5', name: 'Size', iconName: "keyboard-arrow-down" },
        { id: '6', name: 'Discount', iconName: "keyboard-arrow-down" },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handlePress = (id) => {
        setSelectedId(id)

    }

    useEffect(() => {

    }, [subCategorySelected])

    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get('https://fakestoreapi.com/products');
    //         console.log(response.data)
    //         setProducts(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //         setLoading(false);
    //     }
    // };

    // // setModalVisible(true)
    // useEffect(() => {
    //     fetchProducts();
    // }, [])

    const renderStarRating = (rating) => {
        const starComponents = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starComponents.push(<Icon key={i} name="star" size={13} color="#FFD700" />);
            } else {
                starComponents.push(<Icon key={i} name="star-outline" size={13} color="#FFD700" />);
            }
        }
        return starComponents;
    };

    const renderBrandItem = ({ item }) => {
        console.log("itemitem", item.name == "Sort by")
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.name === "Sort by") {
                        setSortedBYmodel(true);
                    } else if (item.name === "Filter") {
                        setfiltermodel(true)
                    } else if (item.name === "Gender") {
                        setGendermodel(true)
                    } else if (item.name === "Size") {
                        setsizemodel(true)
                    } else if (item.name === "Brand") {
                        setBrandmodel(true)
                    } else if (item.name === "Discount") {
                        setDiscountmodel(true)
                    }
                }}
                style={styles.brandItem}>
                <View style={{ backgroundColor: "#fff", paddingHorizontal: 10, borderRadius: 20, justifyContent: 'center', alignItems: "center", flexDirection: "row", paddingVertical: 4, borderColor: "#83a597", elevation: 3 }}>
                    <Text style={styles.brandName}>{item.name}</Text>
                    <Icon
                        name={item.iconName}
                        size={18}
                        style={{
                            color: '#000',
                            marginLeft: 4,
                            fontWeight: "600",
                        }}
                    />
                </View>
            </TouchableOpacity>
        );

    }

    const radioButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Men'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#000", marginLeft: 2, fontSize: 16, fontWeight: "500" }}>{'Women'}</Text>
            ),
            color: "#000",
            size: 15,
        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#000", marginLeft: 3, fontSize: 16, fontWeight: "500" }}>{'Children'}</Text>
            ),
            color: "#000",
            size: 15,
        },
    ]), []);

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 53 }}>

            <StatusBar
                animated={true}
                backgroundColor="#f6f6f6"
                barStyle="dark-content"
            />



            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
            >
                <View style={{ backgroundColor: "#fff", height: 160, width: 300, alignSelf: "center", borderRadius: 10 }}>
                    <Text style={{ color: "#000", fontWeight: "600", textAlign: "center", fontSize: 20, paddingTop: 20 }}>Select sub-category type:</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: "70%" }}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                        />
                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    )
}

export default Category;

const styles = StyleSheet.create({
    brandItem: {
        marginRight: 10,
        alignItems: 'center',
        paddingVertical: 2,
        // backgroundColor: "#fff",
        paddingHorizontal: 1,
    },
    brandName: {
        color: "#000",
        fontSize: 14,
        fontWeight: '400',

    },
    container: {
        elevation: 10,
        paddingTop: 3,
        marginHorizontal: 12,
    },
});