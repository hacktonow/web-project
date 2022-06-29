import { Email, Phone, PhoneIphoneTwoTone } from '@material-ui/icons';
import React from 'react';
import './home.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='topnav'>
      <div className='econtainer'>
      <h3 className='email'>
      <Email/>
     <a className='email a' href='mailto:info@theblissflight.co.uk' >info@theblissflight.co.uk</a> </h3>
      </div>
    
      <div className='pcontainer'>
     <h3 className='phone'>
     Need any help?  <PhoneIphoneTwoTone />
      020 3927 7690</h3>
      </div>
      <div className='acontainer'>
     
     
      </div>
      <div className='scontainer'>
      
      <div class='social-icons-top'>
      
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
      </div>
    


    </div>
    
    <Navbar/>
      <HeroSection />
      <Cards />
      
      
      <Footer/>
    </>
  );
}

export default Home;
