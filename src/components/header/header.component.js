import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appConfig from '../../demo-data/appConfig.json';
import {useNavigation} from '@react-navigation/native';
import CreateTaskForm from '../model/modelComponent';

const Header = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const {navigate} = useNavigation();

  console.log('navigation', navigate);

  const rendderModel = () => {
    return (
      <CreateTaskForm
        visible={isModelOpen}
        onClose={handleModelClose}></CreateTaskForm>
    );
  };

  const handleModelClose = () => {
    setModelOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../../ProFocus_412.png') || {uri: 'https://placekitten.com/100/100'}}
          style={styles.profileImage}
        />
      </TouchableOpacity> */}
      <Text style={styles.title}>{appConfig.appNAme}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="add-circle-sharp"
          size={25}
          style={styles.icon}
          onPress={() => setModelOpen(true)}
        />
        <Icon name="notifications" size={25} style={styles.icon} />
      </TouchableOpacity>
      {isModelOpen && rendderModel()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    paddingLeft: 16,
  },
});

export default Header;
