import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserForm from './UserForm'



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
   //this section for second form
   const{ openPopup, setOpenPopup}= useState(false);
   
   const  handleClickOpen = ()=>{

   setOpenPopup(true);
   };



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Bliss Flight
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/flights'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Flights
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Destinations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Destinations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/book'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Book Flight
              </Link>
            </li>
          </ul>
        {button && <Button buttonStyle='btn--outline' onClick={handleClickOpen}>Book a Flight</Button>}
        </div>
      </nav>
     <div>
    <UserForm openPopup={openPopup} setOpenPopup={setOpenPopup}>

    </UserForm>
     
     
     </div>
    
    </>
  );
}

export default Navbar;
