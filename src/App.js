import React from 'react';

import Home from './pages/Home'
import Header from './components/GlobalComponents/header'
import Footer from './components/GlobalComponents/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProductPage from './pages/product'

function App() {
  return (

    <Router>

      <Header></Header>
  
      <Switch>

      </Switch>

      <Route exact path='/' component={Home} ></Route>
      <Route path ='/products' component = {ProductPage}/>

      <Footer></Footer>

    </Router>







  )
}

export default App;
