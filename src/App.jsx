import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/:country'>
            <Detail />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
