import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import { addItemToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import Modal from "react-native-modal";
import Icon3 from 'react-native-vector-icons/dist/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';
import { useState, useEffect, useMemo } from 'react';

const CategoryProducts = ({ navigation, route }) => {

    const [filterModal, setFilterModal] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [selectedId, setSelectedId] = useState("");
    const [SortedBYmodel, setSortedBYmodel] = useState(false);
    const [sortedname, setsortedname] = useState([]);
    const [filtermodel, setfiltermodel] = useState(false);
    const [Gendermodel, setGendermodel] = useState(false);
    const [ratingname, setratingname] = useState([]);
    const [pricename, setpricename] = useState([]);
    const [gendername, setgendername] = useState([]);
    const [pricemodel, setpricemodel] = useState(false);
    // const [pricemodel, setpricemodel] = useState(false);
    const [Ratingmodel, setRatingmodel] = useState(false);

    // const filteredProducts =

    // console.log("Dixitttttttt", route.params.data);

    const cat = route.params.data.category
    const products = route.params.data.products;

    // console.log(products)

    const dispatch = useDispatch();

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

    const laptopCategories = [
        {
            id: 1,
            name: "Processor"
        },
        {
            id: 2,
            name: "RAM"
        },
        {
            id: 3,
            name: "SSD"
        },
        {
            id: 4,
            name: "OS"
        },
        {
            id: 5,
            name: "Chip"
        },
        {
            id: 6,
            name: "Lifestyle"
        },
        {
            id: 7,
            name: "Weight"
        },
        {
            id: 8,
            name: "Touch screen"
        },
        {
            id: 9,
            name: "Processor brand"
        },
        {
            id: 10,
            name: "Usage"
        },
        {
            id: 11,
            name: "Features"
        },
        {
            id: 12,
            name: "Storage type"
        },
        {
            id: 13,
            name: "Availability"
        },
        {
            id: 14,
            name: "Discount"
        },
        {
            id: 15,
            name: "Customer rating"
        },
    ]

    const processorButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Core i5'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Core i7'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Core i9'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
    ]), []);

    const ramButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'8 GB'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'12 GB'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'children',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'16 GB'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
    ]), []);

    const ssdButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'256 GB'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'512 GB'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
    ]), []);

    const osButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Windows'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Mac'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Linux'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
    ]), []);

    const chipButtons = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Intel'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#474747", marginLeft: 5, fontSize: 14, fontWeight: "500" }}>{'Apple'}</Text>
            ),
            color: "#585858",
            size: 13,
        },
    ]), []);

    useEffect(() => {

    }, [selectedFilter])

    const pressHandler = (id) => {
        setSelectedFilter(id)
    }

    const brandsData = [
        { id: '1', name: 'Sort by', iconName: "keyboard-arrow-down" },
        { id: '2', name: 'Filter', iconName: "filter-list" },
        { id: '3', name: 'Gender', iconName: "keyboard-arrow-down" },
        { id: '4', name: 'Price', iconName: "keyboard-arrow-down" },
        { id: '5', name: 'Rating', iconName: "keyboard-arrow-down" },
    ];

    const renderBrandItem = ({ item }) => {
        // console.log("itemitem", item.name == "Sort by")
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.name === "Sort by") {
                        setSortedBYmodel(true);
                    } else if (item.name === "Filter") {
                        setFilterModal(true)
                    } else if (item.name === "Gender") {
                        setGendermodel(true)
                    } else if (item.name === "Price") {
                        setpricemodel(true)
                    } else if (item.name === "Rating") {
                        setRatingmodel(true)
                    } else if (item.name === "Categories") {
                        setCategoriesmodel(true)
                    }
                }}
                style={{
                    marginRight: 10,
                    alignItems: 'center',
                    paddingVertical: 10,
                    marginLeft: 9
                    // backgroundColor: "#fff",
                    // marginHorizontal:15,
                }}>
                <View style={{
                    backgroundColor: "#fff",
                    // paddingHorizontal: 10,
                    borderRadius: 20,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingVertical: 4,
                    borderColor: "#83a597",
                    elevation: 3,
                    width: 90,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: '500',
                    }}>{item.name}</Text>
                    <Icon
                        name={item.iconName}
                        size={18}
                        style={{
                            color: '#000',
                            marginLeft: 4,
                            fontWeight: "600",
                            // backgroundColor:"#cdcdcd",
                            borderRadius: 50
                        }}
                    />
                </View>
            </TouchableOpacity>
        );

    }
    const sortbutton = useMemo(() => ([
        {
            id: 'Relavent',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Relavent'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Newest Products',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Newest Products'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Price -- Low To High',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Price -- Low To High'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'Price -- Low To High',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Price -- Low To High'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },

    ]), []);

    const GenderButton = useMemo(() => ([
        {
            id: 'men',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Male'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: 'women',
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'Female'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },


    ]), []);

    const pricebutton = useMemo(() => ([
        {
            id: "100 - 500",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{' > ₹500'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option1'
        },
        {
            id: "500 - 650",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹500 - ₹650'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "650 - 850",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹650 - ₹850'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "850 - 1000",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹850 - ₹1000 '}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: "1000 -3000",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'₹1000 +'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
    ]), []);

    const ratingbutton = useMemo(() => ([
        {
            id: "1",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'1+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option1'
        },
        {
            id: "2",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'2+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "3",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'3+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),
            // value: 'option2'
        },
        {
            id: "4",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'4+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
        {
            id: "5",
            label: (
                <Text style={{ color: "#000", paddingLeft: 5 }}>{'5+'}</Text>
            ),
            color: "#F29D38",
            size: responsiveFontSize(3),

        },
    ]), []);

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 15 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ paddingVertical: 6, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "#fff" }}>
                <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "800", fontSize: responsiveFontSize(2.2), marginLeft: 10 }}>{cat}</Text>
            </View>

            <View style={{ flex: 1, }}>

                {/* Filter */}
                <View style={styles.container}>
                    <FlatList
                        data={brandsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={renderBrandItem}
                    />
                </View>

                {/* Product Cards */}
                <View style={{ backgroundColor: "#f6f6f6", height: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", paddingHorizontal: 3 }}>
                    <View>
                        <FlatList
                            data={products}
                            numColumns={2}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                                        <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, padding: 3, backgroundColor: "#1f1f1f", borderRadius: 100, zIndex: 10 }}>
                                            <Icon2 name="heart" size={15} color="#fff" />
                                        </TouchableOpacity>
                                        <View style={{ margin: 5, paddingVertical: 4, justifyContent: "center", width: "100%", flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                source={{ uri: item.images[0].image }}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{ paddingHorizontal: 8, marginTop: 5, backgroundColor: "#f8f8f7", borderRadius: 10, paddingTop: 10 }}>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                                                {renderStarRating(item.rating.rate)}
                                                <Text style={{ marginLeft: 4, color: '#333', fontWeight: "600" }}>{item.rating.rate}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                                                <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15, fontWeight: 'bold', color: "#000" }}>{item.title}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, width: "100%" }}>
                                                <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 13, fontWeight: '600', color: "#a2a2a2", textAlign: "justify", }}>{item.description}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                                <Text style={{ fontSize: 15, fontWeight: '700', marginRight: 4, color: "#000" }}>₹{item.price * 100}</Text>
                                                <View style={{ backgroundColor: "#55961d", paddingVertical: 1, borderRadius: 4, paddingHorizontal: 5 }}>
                                                    <Text style={{ fontSize: 12, color: '#fff', fontWeight: "600" }}>10% off</Text>
                                                </View>
                                            </View>

                                            {/* Add to bag */}
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                                <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 10, paddingVertical: 8, alignItems: 'center', marginVertical: 10, width: "100%", flexDirection: "row", justifyContent: "center" }} onPress={() => dispatch(addItemToCart(item))}>
                                                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Add to bag</Text>
                                                    <Text style={{ color: "#fff", marginLeft: 5, fontSize: 16, fontWeight: '600', }}>(</Text>
                                                    <Icon2
                                                        name="bag"
                                                        size={17}
                                                        style={{
                                                            color: '#fff',
                                                            marginRight: 2,
                                                            fontWeight: "600",
                                                            marginLeft: 2
                                                        }}
                                                    />
                                                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: '600', }}>)</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>

                {/* Filter modal*/}
                <Modal
                    isVisible={filterModal}
                    onBackdropPress={() => setFilterModal(false)}
                    onSwipeComplete={() => setFilterModal(false)}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View
                        style={{
                            height: "100%",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                        }}>

                        {/* Heading */}
                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%", paddingHorizontal: 23, }}>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => setFilterModal(false)}>
                                            <Icon name="keyboard-arrow-left" size={20} color="#000" />
                                        </TouchableOpacity>
                                        <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "500", marginLeft: 5 }}>
                                            Filters
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        // onPress={() => languageremove()}
                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 5,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.8),
                                            paddingHorizontal: 9,
                                            paddingVertical: 3,
                                            fontWeight: "500",
                                        }}>
                                            Clear Filters
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        {/* Filters */}
                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ marginVertical: 10, flexDirection: "row", width: "100%" }}>

                                {/* Left */}
                                <View style={{ height: "100%", width: "40%", flexDirection: "column", alignItems: "center", }}>
                                    {laptopCategories.map((item) => (
                                        <TouchableOpacity style={{ paddingVertical: 20, padding: 5, backgroundColor: selectedFilter === item.id ? "#fff" : "#f1f1f1", width: "100%", flexDirection: "row", justifyContent: "center" }} key={item.id} onPress={() => pressHandler(item.id)}>
                                            <Text style={{ color: "#000" }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>

                                {/* Right */}
                                {selectedFilter === 1 ? (

                                    <RadioGroup
                                        radioButtons={processorButtons}
                                        onPress={setSelectedId}
                                        selectedId={selectedId}
                                        containerStyle={{
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            flexDirection: "column",
                                            color: "#e27e45",
                                            paddingTop: 5,
                                            alignItems: "flex-start",
                                            paddingHorizontal: 5,
                                        }}
                                    />
                                ) : selectedFilter === 2 ? (

                                    <RadioGroup
                                        radioButtons={ramButtons}
                                        onPress={setSelectedId}
                                        selectedId={selectedId}
                                        containerStyle={{
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            flexDirection: "column",
                                            color: "#e27e45",
                                            paddingTop: 5,
                                            alignItems: "flex-start",
                                            paddingHorizontal: 5,
                                        }}
                                    />
                                ) : selectedFilter === 3 ? (

                                    <RadioGroup
                                        radioButtons={ssdButtons}
                                        onPress={setSelectedId}
                                        selectedId={selectedId}
                                    />
                                ) : selectedFilter === 4 ? (

                                    <RadioGroup
                                        radioButtons={osButtons}
                                        onPress={setSelectedId}
                                        selectedId={selectedId}
                                        containerStyle={{
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            flexDirection: "column",
                                            color: "#e27e45",
                                            paddingTop: 5,
                                            alignItems: "flex-start",
                                            paddingHorizontal: 5,
                                        }}
                                    />
                                ) : (


                                    <RadioGroup
                                        radioButtons={chipButtons}
                                        onPress={setSelectedId}
                                        selectedId={selectedId}
                                        containerStyle={{
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            flexDirection: "column",
                                            color: "#e27e45",
                                            paddingTop: 5,
                                            alignItems: "flex-start",
                                            paddingHorizontal: 5,
                                        }}
                                    />
                                )}
                            </View>
                        </ScrollView>

                        {/* buttonStyle */}
                        <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 15, justifyContent: "space-evenly" }}>

                            <View
                                style={{
                                    width: '40%',
                                    borderColor: '#F29D38',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setFilterModal(false)}>
                                    <Text
                                        style={{
                                            color: '#e27e45',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,
                                            fontWeight: "600"
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    width: '40%',
                                    backgroundColor: '#e27e45',

                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    onPress={() => languagesearchFilterFunction()}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,
                                            fontWeight: "600"
                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ marginBottom: 10 }}></View>

                    </View>
                </Modal>

                {/* SortedBY */}
                <Modal
                    isVisible={SortedBYmodel}
                    onBackdropPress={() => setSortedBYmodel(false)}
                    onSwipeComplete={() => setSortedBYmodel(false)}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}>
                    <View
                        style={{
                            height: "auto",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            // paddingHorizontal: 15,
                            borderColor: "#e27e45",
                            borderWidth: 0.55
                        }}>
                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%" }}>
                                <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                        Sort By
                                    </Text>
                                    <TouchableOpacity

                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 10,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.5),
                                            fontWeight: "400",
                                            paddingHorizontal: 10,
                                            paddingVertical: 2
                                        }}>
                                            Reset All
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <RadioGroup
                                    radioButtons={sortbutton}
                                    onPress={setsortedname}
                                    selectedId={sortedname}
                                    containerStyle={styles.ViewCard}
                                />

                            </View>
                        </View>

                        {/* buttonStyle */}
                        <View
                            style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>
                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#e27e45',
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setSortedBYmodel(false)}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            borderRightColor: '#fff',
                                            borderRightWidth: 1,
                                            fontSize: 15,
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#fff',
                                    borderColor: '#e27e45',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    // onPress={() => languagesearchFilterFunction()}
                                    onPress={() => setSortedBYmodel(false)}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#e27e45',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,

                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}></View>
                    </View>
                </Modal>

                {/* gender*/}
                <Modal
                    isVisible={Gendermodel}
                    onBackdropPress={() => setGendermodel(false)}
                    onSwipeComplete={() => setGendermodel(false)}
                    // swipeDirection={['down']}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View
                        style={{
                            height: "auto",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            // paddingHorizontal: 15,
                            borderColor: "#e27e45",
                            borderWidth: 0.55
                        }}>

                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%" }}>


                                <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                        Gender
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => languageremove()}
                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 10,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.5),
                                            fontWeight: "400",
                                            paddingHorizontal: 10,
                                            paddingVertical: 2
                                        }}>
                                            Reset All
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <RadioGroup
                                    radioButtons={GenderButton}
                                    onPress={setgendername}
                                    selectedId={gendername}
                                    containerStyle={styles.ViewCard}
                                />
                            </View>
                        </View>

                        {/* buttonStyle */}

                        <View
                            style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#e27e45',
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setGendermodel(false)}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            borderRightColor: '#fff',
                                            borderRightWidth: 1,
                                            fontSize: 15,
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#fff',
                                    borderColor: '#e27e45',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    onPress={() => setGendermodel(false)}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#e27e45',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,

                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}></View>
                    </View>
                </Modal>

                {/* pricemodel */}
                <Modal
                    isVisible={pricemodel}
                    onBackdropPress={() => setpricemodel(false)}
                    onSwipeComplete={() => setpricemodel(false)}
                    // swipeDirection={['down']}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View
                        style={{
                            height: "auto",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            // paddingHorizontal: 15,
                            borderColor: "#e27e45",
                            borderWidth: 0.55
                        }}>

                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%" }}>


                                <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                        Price
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => languageremove()}
                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 10,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.5),
                                            fontWeight: "300",
                                            paddingHorizontal: 10,
                                            paddingVertical: 2
                                        }}>
                                            Reset All
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <RadioGroup
                                    radioButtons={pricebutton}
                                    onPress={setpricename}
                                    selectedId={pricename}
                                    containerStyle={styles.ViewCard}
                                />
                            </View>
                        </View>

                        {/* buttonStyle */}

                        <View
                            style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#e27e45',
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setpricemodel(false)}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            borderRightColor: '#fff',
                                            borderRightWidth: 1,
                                            fontSize: 15,
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#fff',
                                    borderColor: '#e27e45',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    onPress={() => setpricemodel(false)}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#F29D38',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,

                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}></View>
                    </View>
                </Modal>

                {/* rating*/}
                <Modal
                    isVisible={Ratingmodel}
                    onBackdropPress={() => setRatingmodel(false)}
                    onSwipeComplete={() => setRatingmodel(false)}
                    // swipeDirection={['down']}
                    backdropOpacity={0.5}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View
                        style={{
                            height: "auto",
                            backgroundColor: "#fff",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            width: "100%",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            // paddingHorizontal: 15,
                            borderColor: "#e27e45",
                            borderWidth: 0.55
                        }}>

                        <View style={{ marginTop: 15 }}>
                            <View style={{ width: "100%" }}>


                                <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Text style={{ color: "#e27e45", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                                        Price
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => languageremove()}
                                        style={{
                                            backgroundColor: "#e27e45",
                                            borderRadius: 10,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: responsiveFontSize(1.5),
                                            fontWeight: "300",
                                            paddingHorizontal: 10,
                                            paddingVertical: 2
                                        }}>
                                            Reset All
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <RadioGroup
                                    radioButtons={ratingbutton}
                                    onPress={setratingname}
                                    selectedId={ratingname}
                                    containerStyle={styles.ViewCard}
                                />
                            </View>
                        </View>

                        {/* buttonStyle */}

                        <View
                            style={{ width: '100%', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 10 }}>

                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#F29D38',
                                    borderRadius: 20,
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setRatingmodel(false)}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: 8,
                                            borderRightColor: '#fff',
                                            borderRightWidth: 1,
                                            fontSize: 15,
                                        }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#fff',
                                    borderColor: '#e27e45',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    marginLeft: 3,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <TouchableOpacity
                                    onPress={() => setRatingmodel(false)}
                                    languagesearchFilterFunction
                                    activeOpacity={0.7}
                                    style={{
                                    }}>
                                    <Text
                                        style={{
                                            color: '#F29D38',
                                            textAlign: 'center',
                                            padding: 8,
                                            fontSize: 15,

                                        }}>
                                        Apply Filter
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginBottom: 10 }}></View>
                    </View>
                </Modal>

            </View>

        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({
    ViewCard: {
        borderRadius: 8,
        overflow: 'hidden',
        flexDirection: "column",
        color: "#e27e45",
        paddingTop: 5,
        alignItems: "flex-start",
        paddingHorizontal: 10,
    }
});