// userService.js

const apiService = require('../apiService/apiService.js');

// Function to create a new user
async function createUser(userData) {
    // Base URL for the user API
    const baseURL = 'https://pro-user-api.vercel.app/users';
    
    try {
        const response = await apiService.post(baseURL, userData);
        console.log("User created", response);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser
};
