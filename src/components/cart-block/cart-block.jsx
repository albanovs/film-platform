import React, { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from "react-redux";
// import { calcTotalPrice } from '../utils'
import { CartMenu } from '../cart-menu/cart-menu'
import { ItemsInCart } from '../items-cart/items-cart'
import './cart-block.css'

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const navigate = useNavigate()
    // const totalPrice = calcTotalPrice(items);

    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className="cart-block">
            <ItemsInCart count={items.length} />
            <BiCartAlt size={25} className='cartBlock-icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {/* {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} сом</span> : null} */}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleGoToOrderClick} />}
        </div>
    )
}