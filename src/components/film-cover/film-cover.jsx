import React from 'react'
import './film-cover.css'

export const FilmCover = ({ image }) => {
  return (
    <img className='film-cover' src={ image } alt='cover' />
  )
}
