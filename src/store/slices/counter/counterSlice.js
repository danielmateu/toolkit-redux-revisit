import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        resetValue: (state) => {
            state.counter = 0
        },
        incrementByAmount: (state, action) => {
            state.counter += action.payload
        },
    },
})

export const { 
    increment,
    decrement,
    resetValue,
    incrementByAmount 
} = counterSlice.actions
