import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductDetails from '../screens/ProductDetails';
import Orders from '../screens/Orders';
import Help from '../screens/Help';
import Profile from '../screens/Profile';
import Practice from "../screens/Practice";
import Category from '../screens/Category';
import Categories from '../screens/Categories';
import CategoryProducts from '../screens/CategoryProducts';


const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator;

const styles = StyleSheet.create({})































// import { StyleSheet,} from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from '../screens/Dashboard';
// import Home from '../screens/Home';
// import Cart from '../screens/Cart';
// import ProductDetails from '../screens/ProductDetails';

// const AuthStackNavigator = () => {

//     const Stack = createNativeStackNavigator();

//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Cart" component={Cart} />
//              <Stack.Screen name="ProductDetails" component={ProductDetails} />
//             <Stack.Screen name="Dashboard" component={Dashboard} />
//         </Stack.Navigator>
//     )
// }

// export default AuthStackNavigator;

// const styles = StyleSheet.create({})