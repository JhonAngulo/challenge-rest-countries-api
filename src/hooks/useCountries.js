import {useEffect, useState} from 'react'


export function useCountries () {

  const [listCountries, setListCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((response) => {
        setListCountries(response)
      })
  }, [])

  return listCountries
}