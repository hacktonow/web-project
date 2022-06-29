import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

function Footer() {
  return (
    <div className='footer-container'>
    <div className='logo-container'>
    <Link to='/' className='logo'>
            Bliss Flight
            <i class='fab fa-typo3' />
          </Link>
            
      </div>
      <div class='footer-links'>
      
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Menus</h2>
            <Link to='/'>Home</Link> 
            <Link to='contact-us'>Contact Us</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/flights'>Flights</Link>
            <Link to='/Destinations'>Destinations</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
         
        </div>
        <div className='footer-link-wrapper'>
          
          

        </div>
        <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <div className='email-phone'>
        
        <h4 className='email'>
        <Email/> <a className='email' href='mailto:info@theblissflight.co.uk' >info@theblissflight.co.uk</a> </h4>
        <h4 className='phone'>
         <CallTwoToneIcon className='picon'  />
         020 3927 7690 </h4>
           <h4 className='address'>
              <LocationOnTwoToneIcon className='aicon'/>
              United Kigdom
            </h4>
            </div>
            
            
          </div>
      </div>
      <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
       <p3 className='copy-rights'>
        All rights reverse.
       </p3>

     </div>
    
  );
}

export default Footer;
