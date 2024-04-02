import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TaskList from './TaskList.component';
import tasksService from '../../../services/tasks/tasksService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../loader/loader';

const Card = ({ navigation }) => {
  // State variables to manage task data, refresh flag, and loading state
  const [taskData, setTaskData] = useState({});
  const [refreshData, setRefreshData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // Effect hook to fetch user tasks when component mounts
  useEffect(() => {
    getUserTasks();
  }, []);

  // Function to fetch user tasks from AsyncStorage
  const getUserTasks = async () => {
    const userId = await AsyncStorage.getItem('userId');
    if (userId) {
      // Fetch user tasks using tasksService
      const response = await tasksService.getTasksUserById(userId);
      setTaskData(response); // Update task data state
      if (!response.length && refreshData) {
        // Show alert if no data found and refresh is triggered
        Alert.alert('No Data Available', 'First Create a Task');
      }
      setLoading(false); // Update loading state to false
    }
  };

  return (
    <>
      {isLoading ? ( // Show loader while data is loading
        <Loader></Loader>
      ) : taskData.length ? ( // Render task list if task data is available
        <TaskList
          tasks={taskData}
          navigation={navigation}
          getFreshTasks={getUserTasks}
        />
      ) : ( // Render message and refresh button if no task data is available
        <View style={styles.container}>
          <Text style={styles.noDataText}>No Data Found</Text>
          <Text style={styles.instructionText}>
            Click on + icon to Create new Task
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.createTaskButton}
              onPress={() => {
                getUserTasks(); // Fetch user tasks on button press
                setRefreshData(true); // Set refresh flag to true
              }}>
              <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

// Styles for the component
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    color: 'red',
    marginBottom: 10,
  },
  instructionText: {
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingVertical: 24,
  },
  createTaskButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
  },
});

export default Card;
