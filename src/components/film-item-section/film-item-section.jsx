import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FilmBuy } from '../film-buy'
import './film-item-section.css'
import { setCurrentFilm } from '../../redux/films/reducer'

export const FilmItemSection = ({ film }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentFilm(film))
        navigate(`/film/${film.title}`)
    }
    return (
        <div className='film-section'>
            <div onClick={handleClick}><img className='film-section__img' src={film.image_smoll} alt='cover'/></div>
            <div className='film-section__details'>
                <div><span className='section-title'>Название: </span> {film.title}</div>
                <div><span className='section-title'>год: </span> {film.year}</div>
                <div><span className='section-title'>Производство: </span> {film.country}</div>
                <div><span className='section-title'>Жанр: </span> {film.genres}</div>
                <div><span className='section-title__des'>Описание: </span> {film.description}</div>
            </div>
            <div className='film-section__buy'>
                <FilmBuy film={film} />
            </div>
        </div>
    )
}
