import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, StatusBar } from 'react-native';
import Icon4 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon3 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon5 from 'react-native-vector-icons/dist/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/CartSlice';
import { addItemToCart, decrementItem, deleteAllItemsFromCart } from '../redux/CartSlice';
import { useState } from 'react';
import TabBar from '../components/TabBar';

const Cart = ({ navigation }) => {

    const [open, setOpen] = useState(false);

    const cartProducts = useSelector(state => state.cart);
    console.log(cartProducts);

    const dispatch = useDispatch();

    const incrementQuantity = (item) => {
        dispatch(addItemToCart(item));
    };

    const decrementQuantity = (item) => {
        if (item.qty === 1) {
            return;
        } else {
            dispatch(decrementItem(item));
        }
    };

    const getTotal = () => {
        let total = 0;
        cartProducts.map(item => {
            total += item.qty * (item.price * 100);
        })
        return total;
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 55 }}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            {/* heading */}
            <View style={{ flexDirection: "row", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <View style={{ backgroundColor: "#fff", paddingVertical: 8, flexDirection: "row", alignItems: "center", }}>
                    <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, marginRight: 6 }} onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-arrow-left" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontWeight: "600", fontSize: 16 }}>Shopping Bag</Text>
                    <Text style={{ color: '#000', fontSize: 14, marginLeft: 3 }}>({cartProducts.length} items)</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, flexDirection: "row", borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, }} onPress={() => setOpen(!open)}>
                        <Icon3 name="dots-horizontal" size={18} color="#000" />
                    </TouchableOpacity>
                    {open && cartProducts.length > 0 && (
                        <TouchableOpacity
                            style={{ position: "absolute", right: 33, width: 110, backgroundColor: "#f6f6f6", borderRadius: 5, flexDirection: "row", alignItems: "center", justifyContent: "center", zIndex: 10, elevation: 3, flex: 1, paddingHorizontal: 5, paddingVertical: 6, borderColor: "red", borderWidth: 1 }}
                            onPress={() => {
                                dispatch(deleteAllItemsFromCart())
                                setOpen(!open)
                            }
                            }
                        >
                            <Text style={{ color: "#000", fontWeight: "500" }}>Delete All Items</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>


            {/* Cart card */}
            {cartProducts.length === 0 ? (
                <View style={{ marginHorizontal: 10, height: "85%", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <View style={{ justifyContent: "center", width: "100%", flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require("../assets/cart.png")}
                            style={{
                                width: 140,
                                height: 140,
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                    <View style={{}}>
                        <Text style={{ color: "#000", textAlign: "center", fontWeight: "600", fontSize: 16, marginBottom: 3 }}>No items added yet!</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "#e27e45", height: 40, paddingHorizontal: 8, borderRadius: 5, alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: '#fff', marginRight: 5 }}>Take me to the shopping page</Text>
                            <Icon4
                                name="smile-beam"
                                style={{
                                    color: '#000',
                                    fontSize: 20,
                                    fontWeight: "600"
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={{ paddingHorizontal: 5, paddingVertical: 3, height: "100%", backgroundColor: "#fff", }}>
                    <FlatList
                        data={cartProducts}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, borderBottomColor: "#000", borderBottomWidth: 0.4, paddingBottom: 15, }}>
                                    <View style={{ flexDirection: "row" }}>

                                        <View style={{ flexDirection: "row", flex: 1, backgroundColor: "#fff", padding: 5, elevation: 15 }}>
                                            <Image source={{ uri: item.images[0] }} style={{ resizeMode: "contain", height: 110, width: "100%" }} />
                                        </View>

                                        <View style={{ flex: 2, flexDirection: "column", height: "100%", marginLeft: 15, paddingTop: 5, }}>
                                            <View style={{ flexDirection: "row", alignItems: "flex-start", width: "100%", justifyContent: "space-between" }}>
                                                <View style={{ width: "90%", }}>
                                                    <Text numberOfLines={2} style={{ color: "#4b4b4b", fontWeight: "700", fontSize: 15, width: "95%", textTransform: "uppercase", letterSpacing: 0.1, textAlign: "justify", marginRight: 20 }}>{item.title}</Text>
                                                </View>
                                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 25, height: 25, borderLeftColor: "#000", borderLeftWidth: 0.5 }} onPress={() => dispatch(removeItemFromCart(item))}>
                                                    <Icon5 name="cross" color="#000" size={22} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
                                                <Text style={{ color: "#a9b9ac", textTransform: "uppercase", fontSize: 14, fontWeight: "700" }}>Quantity: </Text>
                                                <Text style={{ color: "#4b4b4b", fontWeight: "500" }}>{item.qty}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginTop: 2, justifyContent: "space-between", alignItems: "center" }}>
                                                <View style={{ marginTop: 3, flexDirection: "row", alignItems: "center", }}>
                                                    <Text style={{ color: "#000", fontWeight: "600", fontSize: 21 }}>₹{item.qty * (item.price * 100)}</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                                    <TouchableOpacity style={{ backgroundColor: "#e5e3e0", borderRadius: 50, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", }} onPress={() => decrementQuantity(item)} ><Text style={{ fontWeight: "600", fontSize: 22, color: "#000" }}>-</Text></TouchableOpacity>
                                                    <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>{item.qty}</Text>
                                                    <TouchableOpacity style={{ backgroundColor: "#e5e3e0", paddingVertical: 1, borderRadius: 50, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }} onPress={() => incrementQuantity(item)}><Text style={{ fontSize: "600", fontSize: 20, color: "#000" }}>+</Text></TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: 3 }}>
                                                <Text style={{ color: "#5eb11b" }}>In stock</Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* <View style={{ width: "100%", marginTop: 8 }}>
                                        <TouchableOpacity style={{ backgroundColor: "#de2130", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, flexDirection: "row", alignItems: "center", justifyContent: "center" }} onPress={() => dispatch(removeItemFromCart(item))}>
                                            <Icon
                                                name="delete"
                                                size={20}
                                                style={{
                                                    color: '#fff',
                                                    marginRight: 2,
                                                    fontWeight: "600"
                                                }}
                                            />
                                            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
                                        </TouchableOpacity>

                                    </View> */}
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <View style={{ marginBottom: 120, backgroundColor: "red" }} />
                </View>
            )}

            {/* Buy now button */}
            {cartProducts.length > 0 && (
                <View style={{ position: "absolute", bottom: 65, width: "100%", paddingHorizontal: 10, }}>
                    <View View style={{ backgroundColor: "#212121", borderRadius: 100, paddingVertical: 7, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 7 }}>
                        <View style={{ marginLeft: 25 }}>
                            <Text style={{ color: "#949494", fontWeight: "600", fontSize: 15 }}>Total price:</Text>
                            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500", textAlign: "center" }}>₹{getTotal()}</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 12, borderRadius: 100, paddingHorizontal: 20, flexDirection: "row" }} >
                            <Text style={{ color: "#000", textAlign: "center", color: "#fff", fontWeight: "600", fontSize: 17 }}>
                                Buy now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>

        </SafeAreaView>
    )
}



export default Cart;

const styles = StyleSheet.create({})

// < ScrollView >
// <View style={{ paddingHorizontal: 5, backgroundColor: "#f6f6f6" }}>

//     {/* heading */}
//     <View style={{ backgroundColor: "#fff", paddingVertical: 5, flexDirection: "row", alignItems: "center", paddingHorizontal: 5 }}>
//         <Text style={{ color: '#000', fontWeight: "600", fontSize: 15 }}>Shopping Bag</Text>
//         <Text style={{ color: '#000', fontWeight: "600", fontSize: 15, marginLeft: 3 }}>(2 items)</Text>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

// </View>
//         </ >