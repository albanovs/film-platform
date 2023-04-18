import React from "react";
import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block/cart-block";
import { FiSearch } from 'react-icons/fi'
import { FaTimes, FaBars } from 'react-icons/fa'
import './header.css';
import { useState } from "react";

export const Header = () => {

    const [show, setShow] = useState(false)

    const showNavBar = () => {
        setShow(show => !show)
    }

    let toggleClass = show ? 'resp_nav' : ''

    return (
        <div className="header">
            <button className="burger-btn" onClick={showNavBar}><FaBars size={20} /></button>
            <div className="wrapper">
                <NavLink to='/' className="store-title"> Онлайн Кинотеатр </NavLink>
            </div>
            <div className={`nav-menu ${toggleClass}`}>
                <ul>
                    <li ><NavLink className="navLink" to="/">Главная</NavLink></li>
                    <li><NavLink className="navLink" to="/search">Поиск по жанрам</NavLink></li>
                    <li><NavLink className="navLink" to="/about">Контакты</NavLink></li>
                </ul>
                <button className="burger-btn close-btn" onClick={showNavBar}>
                    <FaTimes size={20} />
                </button>
            </div>
            <div className="search-btn"><FiSearch size={20} /></div>
            <div className="card-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    )
}
