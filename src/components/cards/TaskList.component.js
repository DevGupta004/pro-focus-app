import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TaskCard = ({task}) => {
  const {navigate} = useNavigation();

  const startTimer = () => {
    navigate('Timer', {
      task: task,
    });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <TouchableOpacity style={styles.startButton} onPress={() => startTimer()}>
        <Text style={styles.buttonText}>Start Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

const TaskList = ({tasks}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskList;
