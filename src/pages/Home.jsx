import React, { useState, useEffect } from 'react'

import CountryItem from '../components/CountryItem'
import Search from '../components/Search'

import { useCountries } from '../hooks/useCountries'

const Home = () => {
  const [countries, setCountries] = useState([])
  const listCountries = useCountries()

  useEffect(() => {
    if (listCountries.length > 0) {
      setCountries(listCountries)
    }
  }, [listCountries])

  const handleFilter = (event) => {
    const region = event.target.value
    const filterByRegion = listCountries.filter(
      (country) => country.region == region
    )
    region == 'all' ? setCountries(listCountries)
    : setCountries(filterByRegion)
  }

  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase()
    const filterByName = listCountries.filter((country) =>
      country.name.toLowerCase().includes(search)
    )
    setCountries(filterByName)
  }

  return (
    <div className='homeContainer'>
      <Search handleSearch={handleSearch} />
      {/* <input type='button' value='region'  /> */}
      <select name='select' onChange={handleFilter}>
        <option value='all' defaultValue>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
      <div className='grid-container'>
        {countries.map((country) => {
          return <CountryItem key={country.name} {...country} />
        })}
      </div>
    </div>
  )
}

export default Home
