import React from 'react'
import "./index.css"


const Footer = () => {
  return (
    <>
        <footer>
            <div className='container-fliud main-footer'>
                <div className='row'>
                    <div className='col-12 col-lg-10 mx-auto '>
                        <div className='row'>
                            <div className='col-6 col-lg-4 footer-heading'>
                                <img src="./images/logo.jpg" height="50px" alt="" />
                            
                                        <p className='main-hero-para'>
                                        This guide offers a high-level overview of online payments 
                                        and covers nuances based on different business models.
                                         Introduction; Payments fundamentals</p>
                                
                            </div>

                            <div className='col-6 col-lg-2 footer-heading'>
                                <h2>Links</h2>
                                <ul>
                                    <li>
                                        <p className='main-hero-para-footer'>
                                        Service
                                       </p>
                                    </li>
                                    <li>
                                        <p className='main-hero-para-footer'>
                                        About
                                       </p>
                                    </li>
                                    <li>
                                        <p className='main-hero-para-footer'>
                                      Contact
                                       </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-4 footer-heading'>
                                <h2>Sign Up For my NewSletter</h2>
                                
                                        <p className='main-hero-para'>
                                        <div className='input-group mt-3'>
                        <input type="text" placeholder='Enter Your Email'
                         className='rounded-pill w-auto input-text me-3 p-3 form-control-text'/>
                         <button className='btn btn-style rounded-pilled btn-footer'>Subscribe</button>
                    </div>
                    </p>
                                    
                            </div>

                            <div className='col-6 col-lg-2 footer-heading'>
                                <h2>Follow Me</h2>
                                      <a href="https://instagram.com/_.hettu.__?igshid=NDU3Y2E5ZmY=">
                                      <i class="fa-brands fa-instagram fontawesome-style footer-logo"></i>
                                      </a> 
                                      <a href="https://www.linkedin.com/in/hetvi-aerthania-387253253">
                                      <i class="fa-brands fa-linkedin fontawesome-style footer-logo"></i>
                                      </a> 
                                      <a href="https://github.com/Hetviaerthania">
                                      <i class="fa-brands fa-github fontawesome-style footer-logo"></i>
                                      </a>    
                                      <a href="https://twitter.com/aerthania_hetvi?t=if1_YyoO1C6ucCO1KzpLTA&s=09">
                                      <i class="fa-brands fa-twitter fontawesome-style footer-logo"></i>
                                      </a>  
                                      <a href="https://www.facebook.com/hetvi.aerthaniya">
                                      <i class="fa-brands fa-facebook fontawesome-style footer-logo"></i>
                                      </a>                  
                                                                           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer