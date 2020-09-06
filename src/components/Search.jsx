import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
      <ion-icon  class='search--icon' name="search"></ion-icon>
      <input className='search--label' placeholder='Search for a country...'  onChange={handleSearch} />
    </div>
  )
}

export default Search
