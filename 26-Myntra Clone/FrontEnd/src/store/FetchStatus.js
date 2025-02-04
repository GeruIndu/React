import {
    createSlice
} from "@reduxjs/toolkit";


const fetchStatus = createSlice({
    name: 'fetch',
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },

        markFetchStart: (state) => {
            return state.currentlyFetching = true;
        },

        markFetchStoped: (state) => {
            return state.currentlyFetching = false;
        }
    }
})

export const fetchStatusActions = fetchStatus.actions;
export default fetchStatus;