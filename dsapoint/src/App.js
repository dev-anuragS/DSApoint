import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Stack from './components/Stack'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Switch,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exaxt path='/stack' component = {Stack}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App

