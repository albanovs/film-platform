import React from 'react'
import { Button } from '../button/button'
import { CartItem } from '../cart-item/cart-item'
import { calcTotalPrice } from '../utils'
import './cart-menu.css'

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <div className='cartMenu-filmList'>
                {
                    items.length > 0 ? items.map(film =>
                        <CartItem key={film.title}
                            price={film.price}
                            title={film.title}
                            id={film.id}
                            image={film.image}
                        />
                    )
                        : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cartModal'>
                        <div className='cartModal-totalPrice'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} сом</span>
                        </div>
                        <Button type='primary' size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}
