import { StyleSheet, Text, View } from 'react-native';

const CategoryProducts = ({ navigation, route }) => {
    return (
        <View>
            <Text style={{ color: "#000" }}>{route.params.data.name}</Text>
        </View>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({})