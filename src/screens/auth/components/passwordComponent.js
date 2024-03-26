import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const PasswordComponent = ({handlePassword}) => {
    const [password, setPassword] = useState('');

console.log("passwordpassword", password);
    return (
        <View>
            <TextInput
             style={styles.input}
             placeholder="Enter your password"
             placeholderTextColor="#ffffff"
             value={password}
             onChangeText={text => setPassword(text)}
           />
           <TouchableOpacity style={styles.loginButton} onPress={() => handlePassword(password)}>
             <Text style={styles.loginButtonText}>Next</Text>
           </TouchableOpacity>
        </View>
    );
}

export default PasswordComponent;

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 36
    },
    inputContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
});