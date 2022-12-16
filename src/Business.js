import React, { useState } from 'react';
import Bis from "./API/Bis.js"
import "./index.css"


const Business = () => {
  const[value,setvalue]=useState(Bis);
  return (
    <>
            
              <div className='container-fluid col-12'>
            <section className='container main-hero-business'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex 
                    justify-content-center flex-column align-items-start'>
                            <h1>Unlock access to limitless business growth</h1>
          <p className='main-hero-para'>We’re more than a payments partner. Get smoother payment processes and offer an outstanding experience</p>
          {
          Bis.map((curEle)=>{
            const {para}=curEle;
            return(
              <>
              <p className='main-hero-para bis-para'>
              
              <ul>
             
                <li>{para}</li>
              </ul>
              </p>
              </>
            )
          })
         } <img src="./images/gif.gif" alt="abc" width="400px" height="300px" />
               </div>
               
                   {/* second side */}
                   
                    <div className='col-12 col-lg-5  header-right-side d-flex 
                      justify-content-center flex-column align-items-start'>
                       <h1>Begin a business journey that transitions to new heights every day!</h1>
         <p className='main-hero-para'>Sign up today to enter the world of seamless payments and deliver an
          outstanding customer experience</p>
          <div className='row'>
          <button className='btn btn-outline-success btn-start'>Get Started</button>
        <button className='btn btn-outline-success btn-style-border'>Contact Us</button>
      
        </div>
                    </div>
                </div>
            </section>
            </div>
 </>     
  )
}

export default Business