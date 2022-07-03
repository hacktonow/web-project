import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

function Footer() {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			{/* <img src='logo192.png' className='f-logo'/> */}
          <h2 className='f-logo'>The Bliss Flights</h2>
          <p>Welcome to the world of Blessings where all your travel dreams come true!
             Do you always dream about perfect holiday? But you are confused where to get the best cheap deals for your holidays
              or business trips? Then Bliss Flights is the right choice for you!
             If you wish to travel far and fast like travel light, pack your entire wish and take off all your troubles.</p>
  	 			
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Office</h4>
           <p>10-11 Percy St,</p>
           <p>London W1T 1DN, United Kingdom</p>
           <p className='f-email'>Info@theblissflight.com</p>
           <h3>020 3927 7690</h3>

  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><Link to='/'>Home</Link></li>
  	 				<li><Link to='/about-us'>About_Us</Link></li>
  	 				<li><Link to='/contact-us'>Contact_Us</Link></li>
  	 				<li><Link to='/terms_conditions'>Terms & Conditions</Link> </li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="/"><i class="fab fa-linkedin-in"></i></a>
					
  	 			</div>
               <div className='card-icons'>
			   <img src="/images/card-icons.png" alt="card icons" width="250" height="50"/>
			   </div>
  	 		</div>
  	 	</div>
  	 </div>
     <hr/>
     <p className='copyright'>The Bliss Fligt © 2022 - All Rights Reserved. </p>
  </footer>
    
  );
}

export default Footer;
