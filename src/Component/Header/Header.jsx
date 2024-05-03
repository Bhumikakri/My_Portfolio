import React, { useEffect } from 'react';
import './header.css';
import { useState } from 'react';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState();

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      } 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])

  return (

    <div  className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`title ${isScrolled ? 'scrolled' : ''}`}>
        <h1>Full StackDeveloper</h1>
      </div>
      <div className={`Options ${isScrolled ? 'scrolled' : ''}`}>
        <a style={{textDecoration:"none"}} href="#Aboutt"><h2>About</h2></a>
        <a style={{textDecoration:"none"}} href="#Skillss"><h2>Skills</h2></a>
        <a style={{textDecoration:"none"}} href="#projectss"><h2>Projects</h2></a>
        <a style={{textDecoration:"none"}} className={`contactOption ${isScrolled ? 'scrolled' : ''}`} href='#Contacts'><h2>Contact</h2></a>
      </div>
    </div>

  )
}

export default Header;
