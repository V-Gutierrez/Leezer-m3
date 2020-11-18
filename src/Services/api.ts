import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const api = axios.create({
    baseURL: process.env.REACT_APP_LABEFYDB,
    headers: {
        Authorization: process.env.REACT_APP_LABEFYDB_PASS,
    },
});

export default api;
