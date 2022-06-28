import React from 'react';
import '../../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';

import { CardActions, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navbar from '../Navbar';
import Footer from '../Footer';


export default function AboutUs() {

  return (
  
 <>
 <Navbar/>
 <div className='aboutus'>
  <h1 >About Us</h1>
  </div>
 
  <div>
  <Grid container spacing={10} marginBottom={50} marginLeft ={5}>
  
     <Grid xs={3} >
     <Card sx={{ maxWidth: 500  }} variant="outlined">
      <CardMedia
        
        component="img"
        height="200 "
        image="/images/aboutplane.jpg"
        alt="green iguana"
      />
      
      
    </Card>
     

     </Grid>
    
   
   
   <Grid xs={4} sm={5}  marginTop={20} marginLeft={5}>
   <Card sx={{ maxWidth: 700, height:900 }}>
      
   <CardHeader
    
        
        title="OUR STORY"
        
      />
        <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Bliss Flights LTD enables the traveller to arrange and book the ideal tour. We offer reliable information from bona fide travellers and also offer an extensive range of travel options and planning services. 

Bliss Flights  LTD has been created to empower travellers with direct booking and wide-ranging choices for travelling around the world.
Our mission is help travellers plan and book the finest tours while applying the most severe quality standards. The vastness of the world inspires us. We strive to offer ceaseless experiences to the travellers from around the world. From the unpredicted to the exquisite, we endeavour to let you go out and discover it for yourself.

We do not covet anything more than sharing your marvel as you discover the globe one place at a time. We put forward a wide range of holiday activities including many activities and sightseeing excursions in over 250 destinations all over the world. Enjoy the pleasure of just browsing our destinations to see what is accessible to enhance your trip.
        </Typography>
      </CardContent>
      
    </Card>
   
   </Grid>

  </Grid>
  </div>
  <Footer/>
 </>
  )

}
