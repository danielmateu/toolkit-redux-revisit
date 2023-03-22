import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        // counter: 10
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadinPokemons: (state, /* action */) => {
            state.isLoading = true;
        },
        finishLoadingPokemons: (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload;
        },
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        }

    }
});

// Action creators are generated for each case reducer function
export const {
    startLoadinPokemons,
    finishLoadingPokemons,
    setPokemons,
} = pokemonSlice.actions;