import {
    createSlice
} from "@reduxjs/toolkit";


const fetchStatus = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;
        },

        markFetchStart: (state) => {
            state.currentlyFetching = true
        },
        markFetchStoped: (state) => void(state.currentlyFetching = false),
    }
})

export const fetchStatusActions = fetchStatus.actions;
export default fetchStatus;