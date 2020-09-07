import React, { useContext, useState, useEffect } from 'react'

import CountryItem from '../components/CountryItem'
import Search from '../components/Search'
import Select from '../components/Select'

import countriesContext from '../context/countriesContext'

const Home = () => {
  const { listCountries } = useContext(countriesContext)

  const [countries, setCountries] = useState([])
  const [select, setSelect] = useState({
    selectOptions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    defaultValue: 'Filter by Region',
  })

  useEffect(() => {
    if (listCountries.length > 0) {
      setCountries(listCountries)
    }
  }, [listCountries])

  const handleFilter = (region) => {
    setSelect({
      ...select,
      defaultValue: region == 'All' ? 'Filter by Region' : region,
    })

    const filterByRegion = listCountries.filter(
      (country) => country.region == region
    )
    region == 'All' ? setCountries(listCountries) : setCountries(filterByRegion)
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
      <div className='homeContainer--options'>
        <Search handleSearch={handleSearch} />
        <Select event={handleFilter} {...select} />
      </div>
      <div className='grid-container'>
        {countries.map((country) => {
          return <CountryItem key={country.name} {...country} />
        })}
      </div>
    </div>
  )
}

export default Home
