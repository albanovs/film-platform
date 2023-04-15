import React from 'react'
import { Button } from '../button/button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import './film-buy.css'

export const FilmBuy = ({ film }) => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === film.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(film.id))
        } else {
            dispatch(setItemInCart(film))
        }
    }
    return (

        <div className='film-buy'>
            <span className='filmBuy-price'>{film.price} сом</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}>
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}
