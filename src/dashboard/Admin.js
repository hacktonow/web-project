import React from 'react'
import { Sidebar } from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'
import "./admin.css"
import Report from './pages/report/Report'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Userlist from './pages/userlist/Userlist'

export const Admin = () => {
  return (
    <>
       <Topbar/>
    <div className='nav'>
    <Sidebar/>
    <div className='admin'>
      <h1>hi</h1>

  </div>

  </div>
  

    
    </>
   
    
   
  )
}
export default Admin

