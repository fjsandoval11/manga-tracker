import React, {useState} from 'react'
import axios from 'axios'
import AnimeCard from './AnimeCard'
import '../Style/SearchBar.css'

const SearchBar = () => {

    const [search, setSearch] = useState('')
    const [animeList, setAnimeList] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(search)
        
        axios.get(`https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=10`).then((res) => {
            console.log(res.data.data)
            setAnimeList(res.data.data)
        }).catch(error => {
            console.log(error)
        })
        
    } 

  return (
    <div className='searchBarContainer'>
        <div className='searchAnime'>
            <form onSubmit={submitHandler}>
            <input type='search' placeholder='Search your anime' onChange={e => {
                setSearch(e.target.value)
            }}/>
            <button  type='submit' >Search</button>
            </form>

            <div className='animeListContainer'> {animeList.map(anime => (
            <AnimeCard 
            anime={anime}
            key={anime.mal_id}
            />
        ))}
         </div>

        </div>
      
    </div>
  )
}

export default SearchBar