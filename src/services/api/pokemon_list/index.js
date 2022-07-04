import axios, { getData } from "../../../utils/interceptor/axios";

export const getAllPokemon = async (offset = 0) => {
    return axios.get(`/pokemon?limit=10&offset=${offset}`).then(getData);
};

export const getThatPokemonInfo = async (id) => {
    return axios.get(`/pokemon/${id}`).then(getData);
};
