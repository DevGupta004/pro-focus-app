// userService.js

const apiService = require('../apiService/apiService.js');

const baseURL = 'https://pro-user-api.vercel.app/users/';

// Function to create a new user
async function createUser(userData) {
    // Base URL for the user API
    
    try {
        const response = await apiService.post(baseURL, userData);
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
    getUserById
};
