import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  ScrollView,
  Alert,
  Linking,
  Image
} from 'react-native'
import { useState, useMemo } from 'react'
import Geocoder from 'react-native-geocoder';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
// location
import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from 'react-native-get-location';
import TabBar from '../components/TabBar';
import { logoutUser } from '../redux/UserSlice';
import DoubleTick from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const navigation = useNavigation();
  const logindata = useSelector(state => state.user);
  const [modal, setmodal] = useState(false);
  const [show, setshow] = useState(false);
  const [viewetailsmodel, setviewetailsmodel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [data, setdata] = useState('');
  const [data1, setdata1] = useState('');
  const [addres, setadd] = useState('');
  const [locationmodal, setlocationmodal] = useState(false);

  const dispatch = useDispatch();

  // location
  const mainn = async () => {
    console.log('sdhiusahdi');
    setlocationmodal(true);
    setshow(true);
    await getdata();
  };

  const getdata = async () => {
    setLoading(true);
    setLocation(null);
    setError(null);
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 30000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(newLocation => {
        setLocation(newLocation);
        setdata1(newLocation.latitude);
        setdata(newLocation.longitude);
        get(newLocation);
        console.log(newLocation, 'location');
        setLoading(false);
        setshow(false);
      })
      .catch(ex => {
        Alert.alert('Alert Title', 'Turn on your Location', [
          {
            text: 'press here',
            onPress: () =>
              Alert.alert(
                Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS'),
              ),
            style: 'cancel',
          },
        ]);
        return getCurrentPosition();
      });
  };

  function get(newLocation) {

    var NY = {
      lng: newLocation && newLocation.longitude,
      lat: newLocation && newLocation.latitude,
    };

    Geocoder.fallbackToGoogle('AIzaSyBvh5Kc_7DHsFpCj92HAKBq4F2C7J4IZEI');

    Geocoder.geocodePosition(NY)
      .then(res => {
        console.log('res', res);
        var result1 = res.reduce((unique, o) => {
          if (
            !unique.some(
              obj =>
                obj.formattedAddress === o.formattedAddress &&
                obj.streetName === o.streetName,
            )
          ) {
            unique.push(o);
          }
          return unique;
        }, []);
        const ressult = result1.slice(0, 3);
        setadd(ressult);
      })
      .catch(err => console.log(err));
    console.log(addres && addres, 'check new address');
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      {/* header */}
      <View style={{ flexDirection: "row", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <View style={{ backgroundColor: "#fff", paddingVertical: 8, flexDirection: "row", alignItems: "center", }}>
          <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1, marginRight: 6 }} onPress={() => navigation.goBack()}>
            <Icon name="keyboard-arrow-left" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={{ color: '#000', fontWeight: "600", fontSize: 16 }}>Profile</Text>
        </View>
        <View style={{ borderWidth: 1, borderRadius: 50, padding: 1, borderColor: "#e27e45" }}>
          {
            logindata && logindata[0].user?.photo ?
              <Image
                resizeMode='contain'
                style={{ height: 22, width: 22, borderRadius: 50 }}
                source={{ uri: logindata && logindata[0].user?.photo }} />
              :
              ""
          }

        </View>
      </View>


      <View style={{ marginHorizontal: 8, paddingVertical: 5 }}>

        <View style={{ backgroundColor: "#fff",padding: 5 }}>
          <Text style={{ color: "#000", fontWeight: "500", fontSize: responsiveFontSize(2.2) }}>Hey! {logindata[0].user?.name}</Text>
        </View>

      </View>

      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <TabBar />
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
});