import React  from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import { CardActions, Typography, Button, TextField, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { fontFamily, height } from "@mui/system";
import { grey } from "@mui/material/colors";
export default function ContactUs(){

     return(
        <>
        <h1 className='contactus'>Contact Us</h1>
        <div>
        <div>
  <Grid container spacing={10} marginBottom={50} marginLeft ={5} marginTop={20}>
  
     
    
   
   
   <Grid xs={6}  marginTop={0} marginLeft={0} >
   <Card sx={{ maxWidth: 500, height:500, border: '2px solid black' }} >
   

   <CardHeader
    style={{ textAlign: 'center' }}
    titleTypographyProps={{variant:'h4' }}    
        title="Contact Through Email"
        
      />
       <Divider style={{ background: 'black' }} variant="middle"></Divider>
        <CardContent>
      <Grid container spacing={2}>
     <Grid item sx={6}  >
      <TextField  autoFocus id="outlined-basic" label="First Name" variant="outlined"  />
      </Grid>
      <Grid item xs={6}>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
      <TextField id="outlined-basic" label="Contact No" variant="outlined" />
      </Grid>
      
      </Grid>
      <TextField
            
            margin="dense"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
          />
        <Button variant="Primary" style={{
        borderRadius: 25,
        backgroundColor: "grey",
        padding: "18px 36px",
        marginTop:"10px",
        fontSize: "18px",
        fontFamily:"bold",
        borderBlockColor:"black"
        
    }} >Submit</Button>
     
      </CardContent>
     
    </Card>
   
   </Grid>
   <Grid xs={4}  marginTop={0} marginRight={5}>
   <Card sx={{ maxWidth: 700, height:500 }}>
      
   <CardHeader
    
        
        title="Why Choice Us"
        
      />
        <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        We here at Bliss Flight LTD have qualified team of airfare experts having many years of experience in the travel & tour sector.
If you have any queries about our services, please drop us a line. We’ll be happy to answer your questions to our fullest abilities.

        </Typography>
      </CardContent>
      
    </Card>
   
   </Grid>
   <Grid xs={3} marginTop={5} >
     <Card sx={{ maxWidth: 400, height:300,border: '2px solid black' }}>
     <CardHeader
    
    style={{ textAlign: 'center' }}
    titleTypographyProps={{variant:'h4' }}
    title="Contact Direct"
    
  />
  <Divider style={{ background: 'black' }} variant="middle"></Divider>
  
  <Typography marginLeft={5} marginTop={5}  >
       <div>Phone Number:</div>
   <a href="tel:020 3927 7690">020 3927 7690</a>
   
  </Typography>
  <Divider style={{ background: 'black' }} variant="middle"></Divider>
  <Typography marginLeft={5} marginTop={5} color="black" >
  <div>Email:</div>
      info@theblissflights.co.uk
   
  </Typography>
  <Divider style={{ background: 'black' }} variant="middle"></Divider>
    </Card>
     

     </Grid>
  </Grid>
  </div>

        </div>
        </>
     )


}
