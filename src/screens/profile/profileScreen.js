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
      onPress={() => props.navigation.navigate('LoginScreen')}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

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
