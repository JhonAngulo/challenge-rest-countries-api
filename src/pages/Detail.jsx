import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import CountryDetail from '../components/CountryDetail'
import countriesContext from '../context/countriesContext'

const Detail = () => {
  const { listCountries } = useContext(countriesContext)
  let { country } = useParams()

  const detailCountry =
    listCountries.find((item) =>
      item.name.toLowerCase().includes(country.toLowerCase())
    ) || []

  if (detailCountry.length >= 0) {
    return <h1>Cargando</h1>
  }

  const borderNames = []

  listCountries.map((country) => {
    if (detailCountry.borders.includes(country.alpha3Code)) {
      borderNames.push(country.name)
    }
  })

  detailCountry.borders = borderNames

  return <CountryDetail {...detailCountry} />
}

export default Detail
