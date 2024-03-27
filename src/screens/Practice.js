<View style={{ marginHorizontal: 8, marginTop: 3 }}>
    <View>
        <TouchableOpacity
            onPress={() => mainn()}
            style={{ width: '50%', flexDirection: "row", height: 50, alignItems: "center", backgroundColor: "red" }}>
            <View
                style={{
                    width: "80%",
                    height: "100%",
                    borderRadius: 90,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text style={{ color: "#fff" }}>Location Buttons</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => dispatch(logoutUser())}
            style={{ width: '50%', flexDirection: "row", height: 50, alignItems: "center", backgroundColor: "red", marginTop: 5 }}>
            <View
                style={{
                    width: "80%",
                    height: "100%",

                    borderRadius: 90,
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                <Text style={{ color: "#fff" }}>Logout</Text>

            </View>

        </TouchableOpacity>


    </View>

</View>

{/* location */ }
{
    locationmodal ? (
        <Modal animationType="slide" transparent={true} visible={true}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // marginHorizontal: 20,
                }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 20,
                        // alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={{}}>
                        <Text
                            style={{
                                color: '#455a72',
                                fontSize: 16,
                            }}>
                            Choose Your Current Location
                        </Text>
                    </View>

                    {show && show == true ? (
                        <View
                            style={{
                                flexDirection: 'column',
                                // height: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ActivityIndicator
                                size="large"
                                color="#000"
                                animating={show}
                            />
                        </View>
                    ) : (
                        <ScrollView style={{ marginTop: 7 }}>
                            {addres &&
                                addres.map(item => {
                                    return (
                                        <TouchableOpacity
                                            style={{ marginTop: 7, marginHorizontal: 5, }}>
                                            <Text
                                                style={{
                                                    color: '#56575a',
                                                    marginBottom: 13,
                                                    backgroundColor: '#becad8',
                                                    padding: 11,
                                                    borderRadius: 12,
                                                    fontSize: 15,
                                                    elevation: 5
                                                }}>
                                                {item.formattedAddress}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}

                        </ScrollView>
                    )}


                    <View
                        style={{ width: '100%', flexDirection: 'row', paddingTop: 15 }}>


                        <TouchableOpacity
                            onPress={() => setlocationmodal(false)}
                            style={{ width: '50%', }}
                        >
                            <View>
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => setlocationmodal(false)}
                                >
                                    <Text
                                        style={{
                                            color: '#000',
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

                        </TouchableOpacity>



                        <TouchableOpacity
                            onPress={() => setlocationmodal(false)}
                            style={{ width: '50%', }}
                        >
                            <View>
                                <TouchableOpacity
                                    onPress={() => setlocationmodal(false)}
                                    activeOpacity={0.7}

                                >
                                    <Text
                                        style={{
                                            color: '#000',
                                            textAlign: 'center',
                                            padding: 8,
                                            borderRightColor: '#fff',
                                            borderRightWidth: 1,
                                            fontSize: 15,
                                        }}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Modal>
    ) : null
}