import Icon from "react-native-vector-icons/Entypo";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "./styles";
import { useTheme } from "styled-components/native";
import LottieView from "lottie-react-native";

export function Congrats() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();


  return (
    <View style={[style.container, {backgroundColor: colors.background}]}>
      <Text style={style.title}>Great!</Text>
      <Text style={style.text}>It's time to rest now!</Text>
      <LottieView style={{
        width: '100%',
        height: '50%',
        marginBottom: '10%',
      }} 
      source={require('../../../assets/lottie/congrats.json')} loop autoPlay autoSize duration={3000} />
      <Button onPress={() => navigate("Timer")}>
        <Icon name="chevron-left" size={24} color="white" />
      </Button>
    </View>
  );
}



export default style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // bottom: '2.5%'
        // backgroundColor: props.theme. ?? 'pink'
    },
    
    title: {
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        maxWidth: 240,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: '16%',
    },
    text:{
        fontWeight: '700',
        fontSize: 26,
        lineHeight: 44,
        // maxWidth: 240,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: '16%',
    }
})