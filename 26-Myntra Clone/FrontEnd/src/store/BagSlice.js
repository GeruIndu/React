import {
    createSlice
} from '@reduxjs/toolkit'

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addItemToBag: (state, action) => {
            state.push(action.payload);
        },

        removeItemFromBag: (state, action) => {
            return state.filter((itemId) => action.payload !== itemId)
        }

    }
})

export const bagActions = bagSlice.actions;
export default bagSlice;