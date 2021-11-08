import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import {Switch,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App

