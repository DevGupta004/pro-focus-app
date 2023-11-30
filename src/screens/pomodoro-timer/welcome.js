import { Container, Banner, Button } from "./styles";
import {SafeAreaView, Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import LottieView from "lottie-react-native";

export default Welcome = (props) => {
  
const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    }}>
      <Text style={{
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        maxWidth: 240,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: '14%',
      }}>Focused, motivated.</Text>
      <LottieView style={{
        width: '100%',
        height: '50%',
        marginBottom: '10%',
      }} 
      source={require('../../../assets/lottie/banner.json')} autoPlay loop />
      <Button onPress={() => navigate("Timer")}>
        <Icon name="right" size={24} color="white" />
      </Button>
    </SafeAreaView>
  );
}