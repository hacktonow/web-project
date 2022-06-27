import React from 'react'
import { Settings} from '@mui/icons-material';
import "./topbar.css"
import { Link } from 'react-router-dom';
export default function Topbar() {
  return (
    <div className='topbar'>
    <div className='topbarWrapper'>

     <div className='topLeft'>
      <Link to="/admin" style={{textDecoration :'none'}}> <span className='logo'>Bliss_Flight</span></Link>
       
     </div>
     <div className='topRight'>
        <div className='topbariconContainer'>
            <Settings/>

        </div>
     </div>
    </div>


    </div>
  ) 
}
