import { Email, Phone, PhoneIphoneTwoTone } from '@material-ui/icons';
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';


function Home() {
  return (
    <>
    <div className='topnav'>
    <h3 className='email'>
      <Email/>
     <a className='email a' href='mailto:info@theblissflight.co.uk' >info@theblissflight.co.uk</a> </h3>
      
     <h3 className='phone'>
      <PhoneIphoneTwoTone/>
       03075648199</h3>
      
    </div>
    <Navbar/>
      <HeroSection />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
