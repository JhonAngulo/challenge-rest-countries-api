import React, {useState} from 'react'

const Context = React.createContext({})

export function ContextProvider ({children}) {
  const [countries, setCountries] = useState([])

  return <Context.Provider value={{gifs, setGifs}}>
    {children}
  </Context.Provider>
}

export default Context