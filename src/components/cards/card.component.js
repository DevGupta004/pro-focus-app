import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const magicalCardsData = [
  {
    id: '1',
    title: 'Card 1',
    image: 'https://placekitten.com/200/300', // Placeholder image, replace with your own URLs
  },
  {
    id: '2',
    title: 'Card 2',
    image: 'https://placekitten.com/201/301',
  },
  {
    id: '3',
    title: 'Card 3',
    image: 'https://placekitten.com/201/301',
  },
  {
    id: '4',
    title: 'Card 4',
    image: 'https://placekitten.com/201/301',
  },
  {
    id: '5',
    title: 'Card 5',
    image: 'https://placekitten.com/201/301',
  },
  // Add more cards as needed
];

const Card = () => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={magicalCardsData}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          numColumns={2}
          contentContainerStyle={styles.cardList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    marginTop: 60, // Adjust the marginTop to accommodate the fixed header
  },
  cardList: {
    padding: 10,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 5,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardImage: {
    height: 150,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default Card;