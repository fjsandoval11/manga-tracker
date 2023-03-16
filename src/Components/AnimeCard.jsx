import React from 'react'
import '../Style/AnimeCard.css'

const AnimeCard = (props) => {
  return (
    <div className='anime-card'>
      <a 
      href={props.anime.url}
      target='_blank'
      rel='noreferrer' >
      <figure>
        <img src={props.anime.images.jpg.image_url} 
        alt='Anime Image' />
        <h3>{props.anime.title}</h3>
      </figure>

      </a>

    </div>
  )
}

export default AnimeCard