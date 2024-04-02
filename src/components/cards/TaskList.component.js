import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import tasksService from '../../../services/tasks/tasksService';
const {width} = Dimensions.get('screen');

const TaskCard = ({task, getFreshTasks}) => {
  const {navigate} = useNavigation();

  const startTimer = () => {
    navigate('Timer', {
      task: task,
    });
  };

  const deleteTask = async task => {
    try {
      const response = await tasksService.deleteTask(task.taskId);
      console.log('Task deleted', response);
      getFreshTasks();
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.taskName}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(task)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => startTimer()}>
          <Text style={styles.buttonText}>Start Timer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TaskList = ({tasks, getFreshTasks}) => {
  const [refreshing, setRefreshing] = useState(false); // State variable to track refreshing state

  const handleRefresh = () => {
    getFreshTasks();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        // Add RefreshControl component to ScrollView
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={['#9Bd35A', '#689F38']}
          tintColor="#689F38"
          title="Refreshing..."
          titleColor="#689F38"
        />
      }>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} getFreshTasks={getFreshTasks} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    width: width - 30,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  deleteButton: {
    backgroundColor: 'red',
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
