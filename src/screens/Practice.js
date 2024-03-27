import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = () => {
    const colorchangefunction = (isclicked) => {
        setlikeddata(isclicked)
    }

    return (
        <View style={{ marginTop: 10, marginBottom: 18 }}>
            <FlatList
                data={slicedData}
                numColumns={2}
                renderItem={({ item }) => {
                    console.log("datatatatata", item);
                    const backcolor = likedData[item.id] ? "red" : "#000";
                    return (
                        <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 2, width: "48%", margin: 3, }} onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                            <TouchableOpacity
                               onPress={() => colorChangeFunction(item.id)} 
                                style={{
                                    position: 'absolute', right: 5, top: 5, padding: 3,
                                    backgroundColor: backcolor,
                                    borderRadius: 100, zIndex: 10
                                }}>
                                <Icon name="heart" size={15} color="#fff" />
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
                                        <Icon
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
    )
}

export default Practice

const styles = StyleSheet.create({})