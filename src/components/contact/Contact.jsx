import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2281.276429150091!2d39.24015811523042!3d-6.771176203398563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1682622248440!5m2!1sen!2stz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>COICT, kijitonyama Dar es Salaam</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@volunteered.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 255 786 508 804</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
