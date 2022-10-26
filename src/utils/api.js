import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.shrtco.de/v2/shorten',
});

export default api;