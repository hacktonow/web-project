import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Grid } from '@mui/material';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Paper, Typography } from '@material-ui/core';
import { fontFamily } from '@mui/joy/styles/styleFunctionSx';

import{makeStyles} from '@material-ui/core'
import { fontSize } from '@mui/system';
import { red } from '@mui/material/colors';

const useStyles = makeStyles(theme =>(
  {
    title:{
      fontFamily: 'Swis721 BT',
      fontSize:"20px",
     
    },
  }
));

function Cards() {
 
  const classes = useStyles();
  return (
    
    <div className='cards'>
      <div className='below-card'>
        
        <h2 >BOOK YOUR HOLIDAY WITH COMPLETE CONFIDENCE</h2>
        <div>
         <Grid container spacing={4}>
  
          <Grid item xs={12} lg={4}>
          <Card sx={{ minWidth: 275  }} elevation={1} >
          <CardHeader
           
           style={{backgroundColor: "#ff3c00", fontFamily:"Swis721 BT"}}
           avatar={<Avatar alt="Apple" src="images/plan.png" />}
          title="Hassle-free Booking "
          />
          
          <Divider/>
        <CardContent>
          <Typography variant="body2">
          Bliss Flights is the UK's largest independent travel agent.
           Whether you'd like a short UK break, a sunny package holiday,
            an all inclusive getaway or something else entirely,
             our team will help you book the holiday of your dreams.
           
           
          </Typography>
        </CardContent>
        
      </Card>
            
          </Grid>
          <Grid item xs={12} lg={4}>
          <Card sx={{ minWidth: 275 }} elevation={1}>
          <CardHeader
           style={{backgroundColor: "#ff3c00"}}
           avatar={<Avatar alt="Apple" src="images/location.png" />}
          title="Trusted TRavel Agents in UK"
          />
          <Divider/>
        <CardContent>
          <Typography variant="body2">
          Our Peace of Mind Guarantee means you can enjoy flexible, secure holidays, 
          with free amendments up to 14 days before your departure date (Fare Diff Applicable). 
           
           
          </Typography>
        </CardContent>
        
      </Card>
            
          </Grid>
          <Grid item xs={12} lg={4}>
          <Card sx={{ minWidth: 275 }} elevation={1} >
          <CardHeader
         style={{backgroundColor: "#ff3c00"}}
         
          avatar={<Avatar alt="Apple" src="images/man.png" />}
          title="Expert Travel Advice"
          />
  <Divider  />
  
        <CardContent>
          <Typography variant="body2">
          As one of the country’s leading holiday companies, we provide holidays worth getting excited for. 
          Book your holiday with one of our expert travel agents today.
           
           
          </Typography>
        </CardContent>
        
      </Card>
            
          </Grid>
          
          
          
  
  
  
  
         </Grid>
         </div>
        </div>
        {/* this section for cards */}
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
     
    </div>
  );
}

export default Cards;
