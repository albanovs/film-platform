import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home-page.css'
import { FilmItem } from "../../components/film-item/film-item";



export const HomePage = ({ data }) => {
    return (
        <div>
            <h1 className="global-title">Топ фильмы</h1>
            <div className="home-page">
                {data.map(film => <FilmItem film={film} key={film.id} />)}
            </div>
        </div>
    )
}