import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appConfig from '../../demo-data/appConfig.json'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
        source={{ uri: 'https://placekitten.com/100/100' }}
        style={styles.profileImage}
      />
      </TouchableOpacity>
      <Text style={styles.title}>{appConfig.appNAme}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="notifications" size={25} style={styles.icon} />
      </TouchableOpacity>
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    padding: 5,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Header;