import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "./styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import BackgroundTimer from "react-native-background-timer";



const INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes


function renderCurrentTime(props) {
    const minutes = String(props.minutes).padStart(2, "0");
    const seconds = String(props.seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }


  export const TimerScreen = () => {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const progress = (count * 100) / INITIAL_TIME_IN_SECONDS;


  useEffect(() => {
    if (active) {
      const interval = BackgroundTimer.setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        // Notifications.scheduleNotificationAsync({
        //   content: {
        //     title: "Pomodoro Timer",
        //     body: "Your pomodoro session has ended!",
        //   },
        //   trigger: null,
        // }).then(() => {
          navigate("Congrats");
          setActive(false);
          setCount(INITIAL_TIME_IN_SECONDS);
        // });
      }

      return () => {
        BackgroundTimer.clearInterval(interval);
      };
    }
  }, [active, count]);

  return (
    <View style={[style.container, {backgroundColor: colors.background}]}>
      <Text style={style.title}>Let's focus for</Text>
      <AnimatedCircularProgress
        size={260}
        width={10}
        rotation={0}
        tintColor={colors.primary ?? 'blue'}
        backgroundColor={colors.secondary ?? 'green'}
        fill={progress}>
      {() => <Text style={style.text} >{renderCurrentTime({ minutes, seconds })}</Text>}
      </AnimatedCircularProgress>
      <Button onPress={() => setActive((state) => !state)}>
        <Icon
          name={active ? "pause" : "play"}
          size={24}
          color="white"
        />
      </Button>
    </View>
  );
}


export default style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    
    title: {
        fontWeight: '700',
        fontSize: 36,
        lineHeight: 44,
        maxWidth: 240,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: '14%',
    },
    text:{
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 58,
        color: 'white',
        alignItems: 'center',
    }
})