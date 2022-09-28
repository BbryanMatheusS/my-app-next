import axios from 'axios';


const api_Rick_Morty = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
});

export default api_Rick_Morty;