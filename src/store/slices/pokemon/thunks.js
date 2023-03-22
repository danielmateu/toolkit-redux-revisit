
import { pokemonApi } from "../../../api/pokemonApi";
import {  setPokemons, startLoadinPokemons } from "./pokemonSlice";


export const getPokemons = (page = 0) => async (dispatch, getState) => {
    dispatch(startLoadinPokemons());
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
    dispatch(setPokemons({pokemons: data.results, page: page + 1}))

}