import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const deezer = axios.create({
    baseURL: process.env.REACT_APP_DEEZER_BASEURL,
    headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPIDHOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDKEY,
    },
});

export default deezer;
