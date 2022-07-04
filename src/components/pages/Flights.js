import React from 'react';
import '../../App.css';
import FlightForm from '../FlightForm';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Topnav } from '../Topnav';
import './flights.css'
export default function Flights() {
  return (
   <>
   <Topnav/>
   <Navbar/>
  <h1 className=' flights'>Cheap Flights</h1>
<div className='flight-form-container'>
 
 <FlightForm/>

</div>

  <Footer/>
  </>
  )
}
