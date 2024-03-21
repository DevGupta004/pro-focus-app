import React, {useState} from 'react';
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

const LoginScreen = ({navigation}) => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isUserAvailable, setIsUserAvailable] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(true);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLogin = async () => {
    // Perform login action with emailOrMobile and password
    console.log('Email or Mobile:', emailOrMobile);
    console.log('Password:', password);
    const userData = {
      email: emailOrMobile,
      password: password,
    };
    if (!emailOrMobile.length) Alert.alert('Please enter a valid email or mobile');

    const getUser = await userService.createUser(userData);
    if (getUser.userId) {
      Alert.alert('User Already Registered');
      const getUserById = await userService.getUserById(getUser.userId);
      setUserData(getUserById);
      setShowPasswordScreen(true);
    } else if(userId) {
      
    } else {
      Alert.alert('User Created');
      navigation.navigate('app');
    }
    // navigation.navigate('app');
  };

  const handlePassword = (password) => {
    console.log();
    try {
      if(userData.password === password) {
        Alert.alert('User Authenticated successfully');
        navigation.navigate('app');
      } else {
        Alert.alert('Wrong password');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back!</Text>
          <View style={styles.formContainer}>
          {!showPasswordScreen ? (
          <>
           <TextInput
             style={styles.input}
             placeholder="Email or Mobile Number"
             placeholderTextColor="#ffffff"
             value={emailOrMobile}
             onChangeText={text => setEmailOrMobile(text)}
           />
           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
             <Text style={styles.loginButtonText}>Next</Text>
           </TouchableOpacity>
          </>
          ) : null}
          {/* <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity> */}
          {showPasswordScreen ? <PasswordComponent handlePassword={handlePassword}></PasswordComponent> : null}
        </View>
        </View>
      </View>
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
  title: {
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
