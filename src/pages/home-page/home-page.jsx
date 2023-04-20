import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home-page.css'
import { FilmItem } from "../../components/film-item/film-item";
import { FilmItemSection } from "../../components/film-item-section/film-item-section";


export const HomePage = ({ data }) => {
    return (
        <div>
            {/* <h1 className="global-margin">Топ фильмы</h1> */}
            <div className="home-page">
                {data.map(film => <FilmItem film={film} key={film.id} />)}
            </div>
            <div className="section-one global-margin">
                <h1 className="news">Новинки </h1>
                <div className="section-one__items">
                    {data.map(film => <FilmItemSection film={film} key={film.id} />)}
                </div>
            </div>
        </div>
    )
}