import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getPokemons() )
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>

            <hr />

            <ul>
                <li>Puto</li>
                <li>Reputo</li>
                <li>Más que puto</li>
                <li>So puto</li>
            </ul>
        </>
    )
}
