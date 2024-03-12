import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../components/cards/card.component";
import Header from "../../components/header/header.component";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50
  },
});

export default HomeScreen;
