import {configureStore} from '@reduxjs/toolkit';
import storeDetails from './storeSlice';
export const store=configureStore({
    reducer:storeDetails.reducer
})