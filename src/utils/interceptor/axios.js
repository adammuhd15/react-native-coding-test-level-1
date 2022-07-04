import axios from 'axios';

const API_BASE_URL = "https://pokeapi.co/api/v2";

const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function getData(response) {
  return response.data;
}

export default request;
