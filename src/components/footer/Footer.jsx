import React from 'react';
import "./footer.css";
import logo from "./image/logo.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function footer() {
  return (
    <div className='footer'>
        <ul className='list2'>
            <li className='link'><img src={logo} alt="" /></li>
            <li className='link'><i class="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</li>
            <li className='link'><i class="fa-solid fa-phone"></i> 0943833399</li>
            <li className='link'><i class="fa-solid fa-envelope"></i> support@efood.com</li>
            <li className='link'><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-telegram"></i></li>
        </ul>
        <ul className='list1'>
            <li><b>Service</b></li>
            <li><a href="" className="link">How it works</a></li>
            <li><a href="" className="link">Home delivery</a></li>
            <li><a href="" className="link">Prducts</a></li>
            <li><a href="" className="link">Menu</a></li>
        </ul>
        <ul className='list1'>
            <li><b>Company</b></li>
            <li><a href="" className="link">About Us</a></li>
            <li><a href="" className="link">News</a></li>
            <li><a href="" className="link">Our trusted partner</a></li>
            <li><a href="" className="link">New users FAQ</a></li>
        </ul>
        <ul className='list1'>
            <li><b>Supports</b></li>
            <li><a href="" className="link">Help center</a></li>
            <li><a href="" className="link">Feedbcak</a></li>
            <li><a href="" className="link">Contact us</a></li>
            <li><a href="" className="link">Terms conditins</a></li>
        </ul>
        <ul className='list1'>
            <li><b>Service</b></li>
            <li><a href="" className="link">Sitemap</a></li>
            <li><a href="" className="link">Download app</a></li>
            <li><a href="" className="link">Blog</a></li>
            <li><a href="" className="link">What’s new</a></li>
        </ul>
    </div>
  )
}

export default footer