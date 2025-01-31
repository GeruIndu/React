import {
    createSlice
} from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: 'Privacy',
    initialState: {
        privacy: false
    },
    reducers: {
        privacyPolicy: (state) => {
            return state = !state;
        }
    }
})

export const privacyActions = privacySlice.actions

export default privacySlice;