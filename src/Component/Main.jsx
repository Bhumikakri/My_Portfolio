import React, { useEffect } from 'react'
// import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Skills from './About/Skills';
import Project from './Project/Project';
import ContactUs from './Contact/ContactUs';

const Main = () => {
  

  useEffect(()=>{

  },[])

  return (
    <div className='MainPage'>
      <Header/>
      <div className='Main'>
        <Home />
      </div>
      <About />
      <Skills />
      <Project />
      <ContactUs />
    </div>
  )
}

export default Main