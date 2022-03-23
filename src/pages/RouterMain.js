import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage'

const RouterMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/blogs' component={LandingPage}/>
      <Route path='/about' component={LandingPage}/>
      <Route path='/contact' component={LandingPage}/>
    </Switch>
  </main>
)

export default RouterMain
