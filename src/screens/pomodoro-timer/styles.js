import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { TouchableOpacity, SafeAreaView, Text } from "react-native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'black';
`;

export const Banner = styled(LottieView)`
  width: 85%;
  margin-bottom: 10%;
`;

export const Button = styled(TouchableOpacity)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  border: 2px solid #f54477;
`;
