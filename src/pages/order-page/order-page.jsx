import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/order-item/order-item'
import { calcTotalPrice } from '../../components/utils'
import './order-page.css'

export const OrderPage = () => {

    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 1) {
        return <h1 className='order-not'>Ваша корзина пуста</h1>
    }

    return (
        <div className="order-page">
            <div className='order-page__left'>
                {items.map(film => <OrderItem film={film} />)}
            </div>
            <div className='order-page__right'>
                <span>
                    {items.length} {items.length === 1 ? 'товар' : 'товаров'} на сумму {calcTotalPrice(items)} сом
                </span>
                 <button className='buy-btn'>Купить</button>
            </div>
        </div>
    )
}
