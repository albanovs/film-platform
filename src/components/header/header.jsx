import React from "react";
import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block/cart-block";
import './header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <NavLink to='/' className="store-title"> Онлайн Кинотеатр </NavLink>
            </div>
            <div className="card-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    )
}