import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const OtpComponent = ({handleOtp}) => {



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter OTP" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleOtp}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OtpComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
});