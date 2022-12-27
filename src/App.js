// import logo from './logo.svg';
import './App.css';

  

import React, { Component }  from 'react'
// import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  
  render() {
    return (
      
      <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key={"general"} pageSize={5} country="in" categories="general"/>}/>
          <Route exact path='/general' element={<News key={"general"} pageSize={5} country="in" categories="general"/>}/>
          <Route exact path='/business' element={ <News key={"business"} pageSize={5} country="in" categories="business"/>}/>
          <Route exact path='/technology' element={ <News key={"technology"} pageSize={5} country="in" categories="technology"/>}/>
          <Route exact path='/sports' element={ <News  key={"sports"}pageSize={5} country="in" categories="sports"/>}/>
          <Route exact path='/science' element={ <News  key={"science"}pageSize={5} country="in" categories="science"/>}/>
          <Route exact path='/health' element={ <News key={"health"} pageSize={5} country="in" categories="health"/>}/>
          <Route exact path='/entertainment' element={ <News  key={"entertainment"}pageSize={5} country="in" categories="entertainment"/>}/>
          <Route exact path='/About' element={ <News  key={"About"}pageSize={5} country="in" categories="About"/>}/>
    
        </Routes>
      </Router>
    </>
    )
  }
}

