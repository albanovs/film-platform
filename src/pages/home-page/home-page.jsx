import React from "react";
import { FilmItem } from '../../components/film-item'
import './home-page.css'
import cover1 from '../../fim-covers/infinityVar.jpg'
import cover2 from '../../fim-covers/avatar.jpg'
import cover3 from '../../fim-covers/kurmanjan.jpg'

const ITEMS = [
    {
        image: cover1,
        title: 'Мстители: Война бесконечности',
        genres: ['Боевик', 'Приключения', 'Фэнтези'],
        video: 'https://www.youtube.com/embed/FeJKZMFJ7NA',
        price: 340,
        id: 1,
        description: 'Несмотря на объединённые силы всех супергероев Земли, включая Человека-Паука и Чёрную Пантеру, ранее не входивших в команду, Тора и Стражей Галактики, никогда ранее судьба всего мира не была настолько неопределённой.'
    },
    {
        image: cover2,
        title: 'Аватар',
        genres: ['Фантастика', 'Боевик', 'Драмы'],
        video: 'https://youtube.com/embed/4HFlPcX2HFo',
        price: 300,
        id: 2,
        description: 'История рассказывает о Джейке Салли, лишившемся возможности ходить морпехе в отставке. По трагической случайности, его брата-близнеца, который должен был стать частью инопланетного проекта, убивают в уличной драке. Вместо него Джейку предоставляется возможность стать оператором так называемого «аватара».'
    },
    {
        image: cover3,
        title: 'Курманжан датка',
        genres: ['Драма', 'Исторический фильм', 'Биография'],
        video: 'https://youtube.com/embed/WSPekXPtPNc',
        price: 510,
        id: 3,
        description: 'В период с конца 18-го по начало 19-го века, когда женщины в Центральной Азии не имели никаких прав, появилась Курманжан Датка — женщина, которая благодаря своей мудрости и волевому характеру, пришла к власти в своей стране и спасла нацию от полного развала.'
    }
]

export const HomePage = () => {
    return (
        <div className="home-page">
            {ITEMS.map(film => <FilmItem film={film} key={film.id} />)}
        </div>
    )
}