import React from "react";
import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block/cart-block";
import { FiSearch } from 'react-icons/fi'
import { FaTimes, FaBars } from 'react-icons/fa'
import './header.css';
import { useState } from "react";

export const Header = () => {

    const [show, setShow] = useState(false)
    const [viewSearch, setViewSearch] = useState(false)

    const showNavBar = () => {
        setShow(show => !show)
    }


    const viewsSearch = () => {
        setViewSearch(viewSearch => !viewSearch)
    }

    let toggleSeatch = viewSearch ? 'view-search' : ''
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
            <div className="card-btn-wrapper">
                <input className={`input-search ${toggleSeatch}`} type="search" placeholder="Введите запрос" />
                <FiSearch className="search-btn" size={20} onClick={viewsSearch} />
                <CartBlock className="basket-btn" />
            </div>
        </div>
    )
}
