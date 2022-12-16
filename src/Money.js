import React, { useState } from 'react'
import Moneyapi from './API/Moneyapi';
import "./index.css"

const Money = () => {
  const[data,setdata]=useState(Moneyapi);
  return (
    <>
    <section className='money main-money'>
    <div className='container'>
            <div className='text-center'><h1>How to send money</h1></div>
                <div className='row'>
                
                {Moneyapi.map((curEle)=>{
                  const {id,logo,title,para}=curEle;
                  return( 
                    
                <>
                <div className='col-12 col-lg-4 main-pay'>
                <div className=' ' key={id}>
                    <i className={`fontawesome-style logo-money ${logo}`}></i>
                    <h2 className='sub-heading'>{title}</h2>
                    <p className='main-hero-para'>{para}</p></div>
</div>
                </>
                  )
                })}
               </div>
            
      
        </div>
        </section> 
    </>
  )
}

export default Money;