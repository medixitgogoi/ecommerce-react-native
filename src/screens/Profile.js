import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import TabBar from '../components/TabBar';

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 53 }}>
            <StatusBar
                animated={true}
                backgroundColor="#e5e3e0"
                barStyle="dark-content"
            />
            <View style={{ backgroundColor: "#e5e3e0", height: "100%" }}>
                <Text style={{ color: "#000" }}>Profile</Text>
            </View>
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <TabBar />
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})