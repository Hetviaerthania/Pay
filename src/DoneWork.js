import React, { useState } from 'react'
import workapi from './API/Workapi';
import "./index.css"

const DoneWork = () => {
  const[data,setdata]=useState(workapi);
  return (
    <>
   
    <div className='container col-12 '>
  <div className="container">
        <section className='work-container '>
        <div className="container ">
            <div className='main-heading text-center'>How does it work</div>
                <div className='row'>
                {workapi.map((curEle)=>{
                  const {id,logo,title,para}=curEle;
                  return( 
                   
                <>
                <div className='col-12 col-lg-4 text-center' key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className='sub-heading'>{title}</h2>
                    <p className='main-hero-para'>{para}</p></div>

                </>
                  )
                })}
               </div>
        </div>        
        </section>
        </div> 
       
       </div>
    </>
  )
}

export default DoneWork;