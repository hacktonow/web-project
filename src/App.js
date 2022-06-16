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
         
        </Switch>
       <Footer/>
      </Router>
    </>
  );
}

export default App;
