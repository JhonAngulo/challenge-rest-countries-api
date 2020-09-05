import React, { useState, useEffect } from 'react'

import CountryItem from '../components/CountryItem'

const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((response) => {
        setCountries(response)
      })
  }, [])

  return (
    <div className='homeContainer'>
    {
      countries.map((country) => {
        return (
          <CountryItem key={country.name} {...country} />
        )
      })
    }
    </div>
  )
}

export default Home

//https://restcountries.eu/rest/v2/all
