import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: items
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart.map((item) => item)))
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(film => film.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart.map((item) => item)))
        }
    }
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer