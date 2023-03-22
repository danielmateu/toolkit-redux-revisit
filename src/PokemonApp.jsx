import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons)
    console.log(pokemons.pokemons);
    const pokemonsList = pokemons.pokemons
    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            {/* pokemons */}
            <ul>
                {
                    pokemonsList.map(pokemon => (
                        <li key={pokemon.name}>
                            {pokemon.name}
                        </li>
                    ))

                }
            </ul>

            {/* button for nextpage if it's loading button can't be used */}
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(pokemons.page))}
            >
                Next Page
            </button>
        </>
    )
}
