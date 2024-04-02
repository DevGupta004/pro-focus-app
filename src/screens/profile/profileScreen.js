import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Profile = props => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image
      source={require('../../../assets/commingSoon.png')}
      resizeMode={'center'}
    />
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleLogout(props)}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

const handleLogout = async (props) => {
  try {
    // Remove user data from AsyncStorage upon logout
    await AsyncStorage.removeItem('userId');
    props.navigation.navigate('LoginScreen')
    // Navigate to the login screen or perform any other necessary actions
  } catch (error) {
    console.error('Error removing user data from AsyncStorage:', error);
  }
};

export default Profile;



const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
