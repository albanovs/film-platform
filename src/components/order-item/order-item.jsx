import React from 'react'
import { useDispatch } from 'react-redux'
import { FilmCover } from '../film-cover'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import './order-item.css'

export const OrderItem = ({ film }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItemFromCart(film.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <FilmCover image={film.image} />
            </div>
            <div className='order-item__title'>
                <span>{film.title}</span>
            </div>
            <div className='order-item__price'>
                <span>{film.price} сом</span>
                <RiDeleteBin2Line className='delete-icon' onClick={handleClick} />
            </div>
        </div>
    )
}
