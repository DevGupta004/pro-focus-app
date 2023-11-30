import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import HomeScreen from '../screens/home/homeScreen';
import Welcome from '../screens/pomodoro-timer/welcome';



const Tabs = AnimatedTabBarNavigator();

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const Logo = () => (
  <Image
    source={require('../../assets/commingSoon.png')}
    resizeMode={'cover'}
    style={{width: 150, height: 150}}
  />
);

const TabBarIcon = props => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

const handleScan = (data) => {
  // Handle the scanned data as needed
  console.log('Scanned data:', data);
};

const Home = props => (
  <View style={{ flex: 1 }}>
      <HomeScreen></HomeScreen>
    </View>
);

const Pomodoro = props => <Welcome props={props}></Welcome>

const TodoList = () => (
  <Screen>
    <Logo />
    <Text>TodoList</Text>
  </Screen>
);

const Profile = () => (
  <Screen>
    <Logo />
    <Text>Profile</Text>
  </Screen>
);

const BottomTabNavigation = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#223322',
      activeBackgroundColor: 'red',
    }}
    appearance={{
      shadow: true,
      floating: true,
      whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
      dotSize: DotSize.SMALL,
    }}>
    {/* <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="home" />
        ),
      }}
    /> */}
    <Tabs.Screen
      name="Pomodoro"
      component={Pomodoro}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="clock" />
        ),
      }}
    />
    <Tabs.Screen
      name="TodoList"
      component={TodoList}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="list" />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="user" />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default BottomTabNavigation;
