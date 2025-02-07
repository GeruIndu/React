import {
    configureStore
} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatus from './FetchStatus';
import bagSlice from './BagSlice';

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatus.reducer,
        bag: bagSlice.reducer,
    }
})

export default myntraStore;