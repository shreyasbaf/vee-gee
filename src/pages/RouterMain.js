import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import { LandingPage } from './LandingPage'

const RouterMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/blogs' component={Home}/>
      <Route path='/about' component={LandingPage}/>
      <Route path='/contact' component={LandingPage}/>
      <Route path='/category/:id' component={Category} />
    </Switch>
  </main>
)

export default RouterMain
