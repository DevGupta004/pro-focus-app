// its apiService.js

import axios from 'axios';

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer yourAccessToken'
    },
    params: {
        // Optional query parameters
        // param1: 'value1',
    }
}

// Function for making GET requests
async function get(url, config) {
    try {
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function for making POST requests
async function post(url, data, config) {
    try {
        const response = await axios.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function for makiing PUT requests
async function put(url, data, config) {
   try {
    const response = await axios.put(url, data, config);
    return response.data;
   } catch (error) {
     throw error;
   }
}

// Function for making DELETE requests
async function del(url, data, config) {
    try {
        const response = await axios.delete(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    get,
    post,
    put,
    del
};