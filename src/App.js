import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/AboutUs';
import Products from './components/pages/Flights';
import SignUp from './components/pages/Holidays';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import Africa from './components/pages/Africa';
import America from './components/pages/America';
import Asia from './components/pages/Asia';
import Europe from './components/pages/Europe';
import FarEast from './components/pages/FarEast';
import MiddleEast from './components/pages/MiddleEast';
import Admin from './dashboard/Admin';
import Userlist from './dashboard/pages/userlist/Userlist';
import { Airlines } from '@mui/icons-material';
import Destinations from './components/pages/Holidays';
import Airline from './dashboard/pages/airlines/Airlines';
import Locations from './dashboard/pages/destination/Locations';
import Fclasses from './dashboard/pages/classes/Fclasses';
import SeasionalFares from './dashboard/pages/seasonalfares/SeasonalFares';
import { Terms } from './components/pages/Terms';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';






function App() {
  return (
    <>
    
      <Router>
      
      
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={Services} />
          <Route path='/flights' component={Products} />
          <Route path='/Holidays' component={SignUp} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/africa' component={Africa} />
          <Route path='/america' component={America} />
          <Route path='/europe' component={Europe} />
          <Route path='/asia' component={Asia} />
          <Route path='/far_east' component={FarEast} />
          <Route path='/middle_east' component={MiddleEast} />
         {/* this section for admin panel */}

         <Route path='/admin' component={Admin} />
         <Route path='/user' component={Userlist} />
         <Route path='/airline' component={Airline} />
         <Route path='/locations' component={Locations} />
         
         <Route path='/seasional_fares' component={SeasionalFares} />
         <Route path='/f_classes' component={Fclasses} />
         <Route path='/terms_conditions' component={Terms} />
         <Route path='/privacy_policy' component={PrivacyPolicy} />
         
        </Switch>
       
      </Router>
     
      
    </>
  );
}

export default App;
