import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Grid } from '@mui/material';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Paper, Typography } from '@material-ui/core';
import { red } from '@mui/material/colors';

function Cards() {
  return (
    <div className='cards'>
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
      <div className='below-card'>
        
      <h2>Why travel through Bliss_Flight</h2>
      <div>
       <Grid container spacing={1}>

        <Grid item xs={12} lg={4}>
        <Card sx={{ minWidth: 275 }}>
        <CardHeader
        
        title="Hassle-free Booking"
        />
        <Divider/>
      <CardContent>
        <Typography variant="body2">
          Whether you are searching for flights,hotel rooms resorts,
          holidy packages or transfer option you can find it all here 
          under one umbrella, all at your disposal, just a few clicks 
          away
         
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
        </Grid>
        <Grid item xs={12} lg={4}>
        <Card sx={{ minWidth: 275 }}>
        <CardHeader
        title="Trusted TRavel Agents in UK"
        />
        <Divider/>
      <CardContent>
        <Typography variant="body2">
          The process for booking your vacation is seamless, with timely
          confirmations and swift follow_ups.
          With us, your data is kept secure and 
          trade associations like ABTA.
         
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
        </Grid>
        <Grid item xs={12} lg={4}>
        <Card sx={{ minWidth: 275 }}>
        <CardHeader
        title="Expert Travel Advice"
        />
<Divider/>

      <CardContent>
        <Typography variant="body2">
         Over time we have built expertise
         and proficiency that is unmatched in the UK tourism market
         Our experts would be by your side throughout your trip,
         only a phone call away.
         
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
        </Grid>
        
        
        




       </Grid>
       </div>
      </div>
     
    </div>
  );
}

export default Cards;
