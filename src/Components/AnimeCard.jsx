import React from 'react'

const AnimeCard = (props) => {
  return (
    <div anime-card>
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