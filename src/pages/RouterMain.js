import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Category from './Category'
import { LandingPage } from './LandingPage'
import Cart from './Cart'
import Product from './Product'

const RouterMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/about' component={LandingPage}/>
      <Route path='/product' component={Product}/>
      <Route path='/category/:id' component={Category} />
    </Switch>
  </main>
)

export default RouterMain
