import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/AboutUs';
import Products from './components/pages/Flights';
import SignUp from './components/pages/Destinations';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import Africa from './components/pages/Africa';
import America from './components/pages/America';
import Asia from './components/pages/Asia';
import Europe from './components/pages/Europe';
import FarEast from './components/pages/FarEast';
import MiddleEast from './components/pages/MiddleEast';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={Services} />
          <Route path='/flights' component={Products} />
          <Route path='/Destinations' component={SignUp} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/africa' component={Africa} />
          <Route path='/america' component={America} />
          <Route path='/europe' component={Europe} />
          <Route path='/asia' component={Asia} />
          <Route path='/far_east' component={FarEast} />
          <Route path='/middle_east' component={MiddleEast} />
        
         
        </Switch>
       <Footer/>
      </Router>
    </>
  );
}

export default App;
