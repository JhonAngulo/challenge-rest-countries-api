import { useContext, useEffect } from 'react'
import countriesContext from '../context/countriesContext'

export function useCountries() {
  const { countries, setCountries } = useContext(countriesContext)
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((response) => {
        setCountries(response)
      })
  }, [])

  return countries
}
