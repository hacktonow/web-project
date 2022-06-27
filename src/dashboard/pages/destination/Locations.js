import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./locations.css"
export const Locations = () => {
  return (
    <>
    <Topbar/>
    <div className='navL'>
      <Sidebar/>
    <div className='lContainer'>Locations</div>
    </div>
    </>
  )
}
export default Locations;
