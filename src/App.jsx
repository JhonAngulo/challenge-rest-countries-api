import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { CountriesContextProvider } from './context/countriesContext'

import Layout from './components/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

const App = () => {
  const changeDark = (checkedDark) => {
    if (checkedDark.matches) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  useEffect(() => {
    const checkedDark = window.matchMedia('(prefers-color-scheme: dark)')
    checkedDark.addListener(changeDark)
    changeDark(checkedDark)

    return () => {
      checkedDark.removeListener(changeDark)
    }
  }, [])

  return (
    <BrowserRouter>
      <CountriesContextProvider>
        <Layout>
          <Switch>
            <Route exact strict path='/'>
              <Home />
            </Route>
            <Route exact strict path='/detail/:country'>
              <Detail />
            </Route>
            <Redirect to='/' />
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </CountriesContextProvider>
    </BrowserRouter>
  )
}

export default App
