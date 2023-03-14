import React, {useState} from 'react'

const SearchBar = () => {

    const [search, setSearch] = useState('')

  return (
    <div className='searchBarContainer'>
        <div className='searchAnime'>
            <h2>Search your Anime</h2>
            <input>
            
            </input>

        </div>

    </div>
  )
}

export default SearchBar