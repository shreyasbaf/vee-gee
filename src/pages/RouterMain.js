import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Category from './Category'
import { LandingPage } from './LandingPage'
import Cart from './Cart'
import Product from './Product'
import Admin from './Admin'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'
import ContactUs from './ContactUs'

const RouterMain = () => {

  useEffect(() => {
    // console.log('ADMIN',localStorage.getItem('adminLoggedIn'))
  }, [])
  return(
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/contact-us' component={ContactUs}/>
      <Route path='/category/:id' component={Category} />
      <Route path='/404' component={NotFound} />
      {
        localStorage.getItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z') ?
        <Route exact path='/admin' component={Admin} />
        :
        <>
          <Route exact path='/admin' component={NotFound} />
        </>
      }
      <Redirect from='*' to='/404' />
    </Switch>
  </main>
  )
}

export default RouterMain
