import React from 'react'
import { Sidebar } from '../../sidebar/Sidebar';
import Topbar from '../../topbar/Topbar';
import "./userlist.css"
export const Userlist = () => {
  return (
    <>
    <Topbar/>
    <div className='navu'>
      <Sidebar/>
    <div className='uContainer'>Userlist</div>
    </div>
    </>
  )
}
export default Userlist;
