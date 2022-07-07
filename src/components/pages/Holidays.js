import React from 'react';
import './holidays.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Topnav } from '../Topnav';

export default function Holidays() {
  return (
    <>
    <Topnav/>
    <Navbar/>
    <div className='top-conatainer'>
     <h1 className='desti'>Holidays</h1>;
     </div>
     <div className='h-main-conatainer'>
      <div className='h-first-container'>
        {/* <h3>ALL HOLIDAY DEALS & PACKAGES 2022/2023 <br/> BOOK WITH CONFIDENCE</h3> */}
        
      </div>
     </div>
     <Footer/>
    </>
  ) 
}
