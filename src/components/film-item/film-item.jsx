import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FilmCover } from '../film-cover'
import { FilmBuy } from '../film-buy'
import { FilmGenre } from '../film-genre'
import './film-item.css'
import { setCurrentFilm } from '../../redux/films/reducer'

export const FilmItem = ({ film }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentFilm(film))
        navigate(`/film/${film.title}`)
    }

    return (
        <div className='film-item' onClick={handleClick}>
            <FilmCover image={film.image} />
            <div className='details'>
                <span className='film-title'>{film.title}</span>
                <div className='film-genre'>
                    {film.genres.map((genre) => <FilmGenre genre={genre} key={genre} />)}
                </div>
                <div className='filmItem-buy'>
                    <FilmBuy film={film} />
                </div>
            </div>
        </div>
    )
}