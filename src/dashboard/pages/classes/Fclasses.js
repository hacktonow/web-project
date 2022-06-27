import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./fClasses.css"
export const Fclasses = () => {
  return (
    <>
    <Topbar/>
    <div className='navC'>
      <Sidebar/>
    <div className='cContainer'>Classes Page</div>
    </div>
    </>
  )
}
export default Fclasses;
