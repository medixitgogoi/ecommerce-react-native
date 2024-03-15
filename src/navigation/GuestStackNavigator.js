import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/Login';
import Registration from '../auth/Registration';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import TabBar from '../components/TabBar';
import Orders from '../screens/Orders';
import Help from '../screens/Help';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const GuestStackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                    
                    // headerMode: 'screen',
                    // headerTintColor: 'white',
                    // headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="TabBar" component={TabBar} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GuestStackNavigator;

const styles = StyleSheet.create({})