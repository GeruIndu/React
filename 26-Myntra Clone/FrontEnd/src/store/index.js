import {
    configureStore
} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatus from './FetchStatus';

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetch: fetchStatus.reducer,
    }
})

export default myntraStore;