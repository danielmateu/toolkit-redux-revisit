import axios from "axios";
import { finishLoadingPokemons, setPokemons, startLoadinPokemons } from "./pokemonSlice";


export const getPokemons = (page = 0) => async (dispatch, getState) => {
    dispatch(startLoadinPokemons());
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    // const data = await response.json();
    // fetch with axios
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    // dispatch(finishLoadingPokemons(data.results));
}