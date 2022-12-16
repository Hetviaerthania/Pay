import React from 'react'

const Header = () => {
  return (
    <>
        <header>
        <div className='container-fluid col-12'>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex 
                    justify-content-center flex-column align-items-start'>
                        <h1 className='display-2'>Get intants Digital Payment For Everyone</h1>
                    <p className='main-hero-para'>Make your daily routine earsier 
                    by managing money and transactions with the bank card. Pay is digital service 
                    to manage your digital business easily</p>
                    <h3>Get early access for you </h3>
                    <div className='input-group mt-3'>
                        <input type="text" placeholder='Enter Your Email'
                         className='rounded-pill w-75 input-text me-3  p-3 form-control-text'/>
                         <div className='input-group-text'>Get in now</div>
                    </div>
                    </div>
                    {/* .....................main header right side................... */}
                   
                    <div className='col-12 col-lg-5  header-right-side d-flex 
                      justify-content-center flex-column align-items-start main-hero-section'>
                        <img src="./images/1.jpeg" alt="heroimg"
                         className='img-fluid img1'/>
                         <img src="./images/2.jpeg" alt="heroimg" 
                         className='img-fluid main-hero-img2'/>
                    </div>
                </div>
            </section>
            </div>
        </header>

            </>
  )
}

export default Header