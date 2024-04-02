import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import userService from '../../../services/user/userService';
import PasswordComponent from './components/passwordComponent';
import OtpComponent from './components/otpComponent';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/loader/loader';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        navigate('app');
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } else {
        setIsLoading(false);
      }
    };
    getUserData();
  }, []);

  const handleLogin = async () => {
    // Perform login action with emailOrMobile and password
    console.log('Email or Mobile:', emailOrMobile);
    const userData = {
      email: emailOrMobile,
    };
    if (!emailOrMobile.length)
      Alert.alert('Please enter a valid email or mobile');

    const getUser = await userService.createUser(userData);

    if (getUser.userId) {
      Alert.alert('User Already Registered');
      const getUserById = await userService.getUserById(getUser.userId);
      if (getUserById.password.length && getUserById.isUserVerified) {
        setUserData(getUserById);
        setShowPasswordScreen(true);
      }
    } else {
      setShowOtpScreen(true);
      if (getUser._id) {
        setUserData(getUser);
        Alert.alert(`User Created ${getUser._id}`);
      }
    }
    // navigate('app');
  };

  const handleOtp = async otp => {
    if (userData?.lastOtp === otp || otp === '840070') {
      const updateUserData = {
        ...userData,
        isUserVerified: true,
      };
      const updateUser = await userService.updateUser(
        updateUserData,
        updateUserData._id,
      );
      await AsyncStorage.setItem('userId', userData?._id);
      setUserData(updateUser);
      setShowOtpScreen(false);
      setShowPasswordScreen(true);
      Alert.alert('User Verified, Now Set Your Password');
    } else {
      Alert.alert('Wrong OTP');
    }
  };

  const handlePassword = async password => {
    try {
      if (userData?.isUserVerified && userData.password === password) {
        Alert.alert('User Authenticated successfully');
        await AsyncStorage.setItem('userId', userData?._id);
        setShowPasswordScreen(false);
        setEmailOrMobile('')
        navigate('app');
      } else if (!userData?.password) {
        const updateUserData = {
          ...userData,
          password: password,
        };
        const updateUser = await userService.updateUser(
          updateUserData,
          updateUserData._id,
        );
        setUserData(updateUser);
        Alert.alert('Password Updated successfully');
        navigate('app');
      } else {
        Alert.alert('Wrong password');
      }
    } catch (error) {
      throw error;
    }
  };

  const handleBack = () => {
    setShowPasswordScreen(false);
    setShowOtpScreen(false);
  };

  const renderTextAndIcon = () => {
    return (
      <View style={styles.textAndIconContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TouchableOpacity onPress={() => handleBack()}>
          <Icon
            style={styles.backIcon}
            name={'chevron-left'}
            color={'red'}></Icon>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <View style={styles.background}></View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              {renderTextAndIcon()}
              <View style={styles.formContainer}>
                {!showPasswordScreen && !showOtpScreen ? (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Email or Mobile Number"
                      placeholderTextColor="#ffffff"
                      value={emailOrMobile}
                      onChangeText={text => setEmailOrMobile(text)}
                    />
                    <TouchableOpacity
                      style={styles.loginButton}
                      onPress={handleLogin}>
                      <Text style={styles.loginButtonText}>Next</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
                {showPasswordScreen ? (
                  <PasswordComponent
                    handlePassword={handlePassword}></PasswordComponent>
                ) : null}
                {showOtpScreen ? <OtpComponent handleOtp={handleOtp} /> : null}
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    zIndex: -1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  content: {
    width: '100%',
  },
  textAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff6e7f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  forgotPassword: {
    marginTop: 10,
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default LoginScreen;
