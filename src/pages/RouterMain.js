import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Category from './Category'
import { LandingPage } from './LandingPage'
import Cart from './Cart'
import Product from './Product'
import Admin from './Admin'
import Login from './Login'
import Signup from './Signup'

const RouterMain = () => {

  useEffect(() => {
    console.log('ADMIN',localStorage.getItem('adminLoggedIn'))
  }, [])
  return(
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      {
        localStorage.getItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z') ?
        <>
          <Route path='/admin' component={Admin} />
          <Route path='/cart' component={Cart}/>
          <Route path='/about' component={LandingPage}/>
          <Route path='/product' component={Product}/>
          <Route path='/category/:id' component={Category} />
        </>
      :
      localStorage.getItem('userLoggedIn') ?
        <>
          <Route path='/cart' component={Cart}/>
          <Route path='/about' component={LandingPage}/>
          <Route path='/product' component={Product}/>
          <Route path='/category/:id' component={Category} />
        </>
      :
      <Route path='/' component={Login}/>
      }
    </Switch>
  </main>
  )
}

export default RouterMain
