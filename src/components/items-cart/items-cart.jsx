import React from 'react'
import './items-cart.css'

export const ItemsInCart = ({ count = 0 }) => {
    return count > 0 ? (
        <div className='items-cart'>
            {count}
        </div>
    ) : null
}