import React from 'react'
import "./section4.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Section4() {
  return (
    <div className='subscribe'>
        <h2 className="our-popular">
        Subscribe to get the Latest Offer
      </h2>
      <small className='small-text'>Get our daily updates by subscribing to our newspaper, please drop your email below</small>
      <form className='form' action="">
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder='Enter your email addres'/>
        <button type='submit' className='nav-btn btn-section4'><i class="fa-brands fa-telegram"></i>Subscribe</button>
      </form>
    </div>
  )
}

export default Section4