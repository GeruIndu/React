import {
    createSlice
} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        add: (state, action) => {
            state.counter += Number(action.payload);
        },
        subtract: (state, action) => {
            state.counter -= Number(action.payload);
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice;