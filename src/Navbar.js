import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [show,setshow] =useState(false);
  return (
   <>
    <section className='navbar-bg'>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#"><img src="./images/logo.jpg" alt="logo" height="60px" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation" onClick={()=> setshow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/service">Service</NavLink>
        </li>
        <li class="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <button className='btn btn-outline-success btn-style'>Sign Up</button>
        <button className='btn btn-outline-success btn-style-border'>Log In</button>
      </ul>
    
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar