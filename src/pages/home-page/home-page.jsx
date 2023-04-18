import React from "react";
import { FilmItem } from '../../components/film-item'
import './home-page.css'



export const HomePage = ({ data }) => {
    return (
        <div className="home-page">
            {data.map(film => <FilmItem film={film} key={film.id} />)}
        </div>
    )
}