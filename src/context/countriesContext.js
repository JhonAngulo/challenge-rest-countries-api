import React, { useState, useEffect } from 'react'

const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const [listCountries, setListCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((response) => {
        setListCountries(response)
      })
      .catch()
  }, [])

  return (
    <Context.Provider value={{listCountries, setListCountries }}>
      {children}
    </Context.Provider>
  )
}

export default Context