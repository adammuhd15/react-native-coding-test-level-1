import { createSlice } from "@reduxjs/toolkit";

export const pokemonListSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemonList: [],
        offSetNumber: 0,
        isFetching: true,
        pokemonName: [],
    },
    reducers: {
        updatePokemonList: (state, action) => {
            // state.pokemonList.push(action.payload);
            let newArray = [ ...state.pokemonList, ...action.payload ]
            state.pokemonList = newArray
        },
        updateOffSet: (state, action) => {
            state.offSetNumber = state.offSetNumber + action.payload;
        },
        updateIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        updatePokemonDetail: (state, action) => {
            state.pokemonName.push(action.payload)
        }
    },
})

// ACTIONS EXPORT
export const { updatePokemonList, updateOffSet, updateIsFetching, updatePokemonDetail } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
