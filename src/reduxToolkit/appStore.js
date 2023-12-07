import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; 

//appStore is the Redux store instance
const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    }

})
export default appStore;