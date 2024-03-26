// userService.js

const apiService = require('../apiService/apiService.js');

const baseURL = 'https://pro-user-api.vercel.app/users/';

// Function to create a new user
async function createUser(userData) {
    try {
        const response = await apiService.post(baseURL, userData);
        console.log("User created", response);
        return response;
    } catch (error) {
        throw error;
    }
}

// Function to update existing user
async function updateUser(userData, userId) {
    try {
        const response = await apiService.put(baseURL + userId, userData);
        console.log("User created", response);
        return response;
    } catch (error) {
        throw error;
    }
}

// get the user
async function getUserById(userId) {
    try {
        const response = await apiService.get(baseURL + userId);
        console.log("User fetched", response);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
};
