import React from 'react'
import './cart-item.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'


export const CartItem = ({
    title,
    price,
    id,
    image
}) => {

    const dispatch = useDispatch()

    const deleteItemInBasket = () => {
        dispatch(deleteItemFromCart(id))
    }

    return (
        <div className='cart-item'>
            <img className='cart-image' src={image} alt='cover' />
            <div className='block-right'>
                <span className='cart-title'>{title}</span>
                <div className='cart-itemPrice'>
                    <span>{price} сом</span>
                </div>
            </div>
            <RiDeleteBin5Line onClick={deleteItemInBasket} className='btnDelete' />
        </div>
    )
}