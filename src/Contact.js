import React from 'react'

const Contact = () => {
  return (
   <>
    <section className='contactus-section'>
  <div className='container'>
    <div className='row'>
      <div className='col-12 col-lg-11 mx-auto'>
        <div className='row'>
          <div className="contact-leftside col-12 col-lg-5">
            <h1 className='main'>Connect With Out <br/>Sales Teams.</h1>
            <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adisicing
            elit. Deserunt eaque alias similique.</p>
            <figure>
              <img src="./images/submit.gif" alt="service" width="400px" height="300px" />
            </figure>
          </div>
          <div className='contact-rightside col-12 col-lg-7'>
            <form action="POST">
              <div className='container'>
             
                <div className='row'>
                  <div className='col-12 col-lg-6 contact-input-feild'>
                    <input type="text" name='' placeholder='First Name' className='form-control' />
                  </div>
                  <div className='col-12 col-lg-6 contact-input-feild'>
                    <input type="text" name='' placeholder='Last Name' className='form-control' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12 col-lg-6 contact-input-feild'>
                    <input type="text" name='' placeholder='Phone No' className='form-control' />
                  </div>
                  <div className='col-12 col-lg-6 contact-input-feild'>
                    <input type="text" name='' placeholder='Email Id' className='form-control' />
                  </div>
                </div>
<div className='row'>
  <div className='col-12'>
    <input type="text" placeholder='Add Adress' className='form-control contact-input-feild'/>
  </div>
</div>

<div className='row'>
  <div className='col-12'>
    <input type="text" placeholder='Enter Your Message' className='form-control contact-input-feild' />
  </div>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
  />
  <label class="form-check-label" className='main-hero-para' for="flexCheckChecked">
    I agree that the payapp may contact me at the email adress or Phone number above 
  </label>
</div>

<button type='submit' className='btn btn-style w-100'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
   </>
  )
}

export default Contact