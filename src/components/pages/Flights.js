import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Topnav } from '../Topnav';

export default function Flights() {
  return (
   <>
   <Topnav/>
   <Navbar/>
  <h1 className='flights'>Flights</h1>
  <Footer/>
  </>
  )
}
