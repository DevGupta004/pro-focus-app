// tasksService.js

const apiService = require('../apiService/apiService.js');

const baseURL = 'https://pro-focus-tasks.vercel.app/tasks/';

// Function to create a new Task
async function createTask(taskData) {
    try {
        const response = await apiService.post(baseURL, taskData);
        console.log("Task created", response);
        return response;
    } catch (error) {
        throw error;
    }
}

// Function to update existing task
async function updateTask(taskId, taskData) {
    try {
        const response = await apiService.put(baseURL + taskId, taskData);
        return response;
    } catch (error) {
        throw error;
    }
}


// Function to delete existing task
async function deleteTask(taskId) {
    try {
        const response = await apiService.del(baseURL + taskId);
        return response;
    } catch (error) {
        throw error;
    }
}

// get the tasks list of a user
async function getTasksUserById(userId) {
    try {
        const response = await apiService.get(baseURL + userId);
        console.log("Task fetched", response);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTask,
    updateTask,
    getTasksUserById,
    deleteTask,
};
