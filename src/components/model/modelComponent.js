import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Alert} from 'react-native';
import tasksService from '../../../services/tasks/tasksService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateTaskForm = ({visible, onClose}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const taskObject = {
      userId: userId,
      taskName: taskTitle,
      description: taskDescription,
      completed: false,
    };
    if (taskTitle.length && taskDescription.length) {
      const response = await tasksService.createTask(taskObject);
      console.log('Task created', response);
      Alert.alert(
        (title = response),
        (message =
          'Click on refresh Button or use pull to refresh feature to get fresh tasks'),
      );
    } else {
      Alert.alert('Please enter a valid title and description');
    }
    setTaskTitle('');
    setTaskDescription('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholder="Task Title"
          autoCapitalize="none"
          autoFocus
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          value={taskDescription}
          onChangeText={setTaskDescription}
          placeholder="Task Description"
          multiline
          numberOfLines={4}
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={onClose} />
          <Button title="Create Task" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default CreateTaskForm;
