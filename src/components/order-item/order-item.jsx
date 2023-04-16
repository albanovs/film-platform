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
                <img className='order-item__image' src={film.image} alt="" />
            </div>
            <div className='order-item__title'>
                <span className='film__title'>{film.title}</span>
                <div>
                    <span className='order-item__description-title'>Жанр: </span>
                    <span className='order-item__description'>{film.genres}</span>
                </div>
                <h1 className='order-item__description-title none'>Описание:</h1>
                <p className='order-item__description none'>{film.description}</p>
            </div>
            <div className='order-item__price'>
                <span>{film.price} сом</span>
                <div>
                    <RiDeleteBin2Line className='delete-icon' onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
