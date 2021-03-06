import axios from "axios";

const API_SERVER_URL = 'https://jsonplaceholder.typicode.com';

const config = {
    baseURL: API_SERVER_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

const api = axios.create(config);

export default api;
