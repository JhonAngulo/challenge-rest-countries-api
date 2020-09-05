import React from 'react'

import SearchIcon from '../assets/icons/search-outline.svg'

const Search = () => {
  return (
    <div className='search'>
      <img className='search--icon' src={SearchIcon} alt="Search icon" />
      <input className='search--label' placeholder='Search for a country...' />
    </div>
  )
}

export default Search
