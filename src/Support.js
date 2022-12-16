import React,{useState} from 'react'
import Howuseapp from './API/Howuseapp'

const Support = () => {
    const [data,setdata]=useState(Howuseapp);
 return(
    <>
     <section className='common-section our-services-daily'>

       <div className='row'>
       <div className='col-12 col-lg-7 text-center'>
      
            <h5 className='mini-title'>-- SUPPORT IN ANY LANGUAGES</h5>
       <h3 className='main-title'>World class support is available 24/7</h3>
       
       {
        Howuseapp.map((curEle)=>{
          const {id,title,info}=curEle;
          return(<>
            <div className='row about-main'>
        <div className='col-1 our-service-num '>{id}</div>
        <div className='col-11 our-service-data'>
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

       <div className='col-12 col-lg-5 text-center'>
       <img src="./images/service.jpeg" width="300px" height="350px" alt="about" className='main-about-img' />
       </div>
       </div>
       </section>

    </>
 )
}
export default Support