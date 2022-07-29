
import axios from 'axios';

const pokeApi = axios.create({
    baseURL: process.env.MODYO_POKEMON_BACKEND
});

export default pokeApi;

