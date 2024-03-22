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
        borderColor: "#F29D38",
        borderWidth: 0.55
    }}>

    <View style={{ marginTop: 15 }}>
        <View style={{ width: "100%" }}>


            <View style={{ paddingHorizontal: 15, flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <Text style={{ color: "#F29D38", fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
                    Languages
                </Text>
                <TouchableOpacity
                    onPress={() => languageremove()}
                    style={{
                        backgroundColor: "#F29D38",
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


            {/* <RadioGroup
                                radioButtons={languagesapii && languagesapii.map((item) => {
                                    return (
                                        {
                                            id: item.name,
                                            label: (
                                                <Text style={{ color: "#000", }}>{item.name}</Text>
                                            ),
                                            color: "#F29D38",
                                            size: responsiveFontSize(3),
                                        }
                                    )
                                })}
                                onPress={setSelectedlanguage}
                                selectedId={selectedlanguage}
                                containerStyle={styles.ViewCard}
                            /> */}

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
                onPress={() => languagecancelfunction()}>
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
                borderColor: '#F29D38',
                borderWidth: 1,
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
