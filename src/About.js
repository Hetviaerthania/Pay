import React, { useState } from 'react'
import Howuseapp from './API/Howuseapp'

const About = () => {
  const [data,setdata]=useState(Howuseapp);
  return (
   <>
    <section className='common-section our-services'>
      <div className='container mb-5'>
       <div className='row'>
        <div className='col-12 col-lg-5 text-center'>
       <img src="./images/about1.jpeg" alt="about" width="350px" height="400px"  
       className='main-about-img' />
       </div>
       {/* second side */}
       <div className='col-12 col-lg-7 text-center '>
      
            <h5 className='mini-title'>-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h5>
       <h3 className='main-title'>How to use the App ?</h3>
       
        {
        Howuseapp.map((curEle)=>{
          const {id,title,info}=curEle;
          return(<>
            <div className='row '>
        <div className='col-1 our-service-num '>{id}</div>
        <div className='col-10 our-service-data'>
         <h2 className='main-about'>{title}</h2>
         <p className='main-hero-para-about'>{info}</p>
         
        </div>
    </div>
          </>)
        })
       }
       <br/><br/>
    <button className='btn btn-outline-success btn-style-border'>Learn More</button>
       
       </div>
       
      
       
      
        </div>

      
      </div>
    </section>
   </>
  )
}

export default About