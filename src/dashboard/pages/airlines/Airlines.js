import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';


import "./airlines.css"
export const Airline = () => {
  return (
   <>
   <Topbar/>
   <div className='navA'>
      <Sidebar/>
    <div className='aContainer'>Airline</div>
    </div>
   </>
  )
}
export default Airline;
