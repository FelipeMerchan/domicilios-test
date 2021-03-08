import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import './assets/styles/App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}