import React from 'react';
import Navbar from './Navbar';
import "./index.css"
import Header from './Header';
import DoneWork from './DoneWork';
import Business from './Business';
import Set from './Set';
import Money from './Money';
import About from './About';
import Support from './Support';
import Contact from './Contact';
import Footer from './Footer';



function Home() {
  return (
   <>
    <Navbar/>
    <Header/>
    <DoneWork />
    <Business/>
    <Set/>
    <Money/>
    <About/>
    <Support/>
    <Contact/>
    <Footer/>
    
   </>
  );
}

export default Home;
