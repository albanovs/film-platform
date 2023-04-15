import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/reducer'
import filmReducer from './films/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        film: filmReducer 
    },
})