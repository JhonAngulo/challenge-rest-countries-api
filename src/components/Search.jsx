import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <ion-icon  class='search--icon' name="search"></ion-icon>
      <input className='search--label' placeholder='Search for a country...' />
    </div>
  )
}

export default Search
