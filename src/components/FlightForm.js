import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {Grid, TextField,Typography, Button, makeStyles  } from "@material-ui/core";


// import Autocomplete from '@mui/material/Autocomplete';

import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Autocomplete from '@mui/material/Autocomplete';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


  

// this section for button style
const useStyles =makeStyles({
 
btn:{
  backgroundColor:'#818582',
  color: "black",
  
  fontSize:20,
  height:50,
  marginTop:30,
  position:'relative',
  right:'-10px',
  border: '1px solid black',
  
'&:hover':{

  backgroundColor:'white',
  color: "black",
}

}

})
 // this section for data of form

const flightb = ['No', 'Yes' ];

const flightc = ['PIA', 'All', 'Air Berlin', 'Air Canada', 'Air China', 'Air Europa', 'Air Fiji', 'Air Farance', 'Air Malta ', 'Air Mauritius', 'Air New Zeeland','Air Transat', 'Alitalia', 'American Airlines', 'Arik Air', 'Austrian Air', 'Avianca', 'British Airways', 'Brussles Airlines', 'Cathay Pacific ', 'China Southern Airlines', 'Delta Airlines', 'Egypt Airway', 'Emirates Airlines', 'Ethiopian Airlines', 'EVA Airway', 'Etihad Airways', 'Finnair', 'Germanwings', 'Gulf Air ', 'Iberia', 'Jet Airways','Kenya Airways', 'KLM', 'Kuwait Airways', 'LOT polish', 'Lufthansa Airlines', 'Luxair', 'India Airlines', 'Malaysia Airlines', 'Middle East Airlines ', 'Oman Air', 'Philippine' , 'Qatar Airways', 'Royal Air Maroc', 'Royal Brunei Airlines ', 'Royal Jordanian Airline', 'Rwand Air', 'SAS', 'Saudi Arabian', 'South American Airlines ', 'SriLanka', 'TAM Regionais', 'TAP portugal', 'Thai Airways', 'Transaero ', 'Turkish Airlines', 'US Airways', 'Virgin Atlantic' ];

const flightd = ['Economy', 'Premium Economy' , 'Premium First','First','Business' ];

const flighte = ['01', '02' , '03','04', '05' , '06', '07','08', '09' , '10'];
const flightf = ['0', '01', '02' , '03','04', '05' , '06', '07','08' ];
const flightg = ['0', '01', '02' , '03','04', '05' , '06', '07','08' ];



const FlightForm = () => {

  // this section for date
  const [datevalue, setdate ] = React.useState(new Date('2022-08-18T21:11:54'));
  const dateChange = (newValue) => {
    setdate(newValue);
  };
  const [datevalue2, setdate2] = React.useState(new Date('2022-08-19T21:11:54'));
  const dateChange2 = (newValue2) => {
    setdate2(newValue2);
  };
  // this section for Fight direct or indirect
  const [valueb, setValueb] = React.useState(flightb[0]);
  const [inputValueb, setInputValueb] = React.useState('');

  //  this section for select flight
   const [valuec, setValuec] = React.useState(flightc[0]);
   const [inputValuec, setInputValuec] = React.useState('');

   //  this section for class flight
   const [valued, setValued] = React.useState(flightd[0]);
   const [inputValued, setInputValued] = React.useState('');
   //  this section for Adult
   const [valuee, setValuee] = React.useState(flighte[0]);
   const [inputValuee, setInputValuee] = React.useState('');
    {/* this section for Child */}
   const [valuef, setValuef] = React.useState(flightf[0]);
   const [inputValuef, setInputValuef] = React.useState('');
   //this section ofr onfant
   const [valueg, setValueg] = React.useState(flightg[0]);
   const [inputValueg, setInputValueg] = React.useState('');
   

 //this section for useStyle

 const classes = useStyles()
 
  //this section for second form
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //this section for  email sending
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_irhbjqr', 'template_fhq54pi', form.current, 'jb6ozAysKHkokdjXV')
      .then((result) => {
        alert("Submited");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };


  return (

    //form 
  <>  <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Book Flight
      </Typography>

         {/* container */}
      <Grid container spacing={2} >
         
           {/* first text field */}
        <Grid item xs={12} sm={3}>

          <Grid>
            <label>Flying From</label>
          </Grid>
          <TextField
            required
            id="full_name"
            name="flyingfrom"
            label="Airport, City, Countery"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
          
        </Grid>
            {/* second text field */}
       
        <Grid item xs={12} sm={3}>
          
        <Grid>
            <label>Flying To</label>
          </Grid>
          <TextField
            required
            id="flying-to"
            name="flyingto"
            label="Airport, City, Countery"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
      {/* Departure select date */}
        <Grid item xs={12} sm={2}>
          <label>
            Departure
          </label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          variant="outlined"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={dateChange}
          name="departure"
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
        
        </Grid>
         {/* Returning select date */}


        <Grid item xs={12} sm={2}>
          <label>
            Returning
          </label>
          
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
         
          inputFormat="MM/dd/yyyy"
          value={datevalue2}
          onChange={dateChange2}
          name="departure"
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
        
        </Grid>

          {/* Direct or indirect flight field */}

        <Grid item xs={12} sm={2}>
        <Grid>
          <label>Direct Flight</label>
        </Grid>
      
      <Autocomplete
        value={valueb}
        variant="outlined"
        onChange={(event, newValue) => {
          setValueb(newValue);
        }}
        inputValue={inputValueb}
        onInputChange={(event, newInputValue) => {
          setInputValueb(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightb}
        name="direct"
        
        renderInput={(params) => <TextField {...params}  />}
      />
    
        
        </Grid>

            {/* Select Flight */}


        <Grid item xs={12} sm={3}>
        <Grid>
          <label>Select Flight</label>
        </Grid>
      
      <Autocomplete
        value={valuec}
        onChange={(event, newValue) => {
          setValuec(newValue);
        }}
        inputValue={inputValuec}
        onInputChange={(event, newInputValue) => {
          setInputValuec(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightc}
        name="flight"
        renderInput={(params) => <TextField {...params}  />}
      />
    </Grid>

    {/* Select Flight Class */}


    <Grid item xs={12} sm={3}>
        <Grid>
          <label>Class</label>
        </Grid>
      
      <Autocomplete
        value={valued}
        onChange={(event, newValue) => {
          setValued(newValue);
        }}
        inputValue={inputValued}
        onInputChange={(event, newInputValue) => {
          setInputValued(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightd}
       
        renderInput={(params) => <TextField {...params}  
        name="Class"
       
        />}
      />
    </Grid>

     {/* Select Adult */}


     <Grid item xs={12} sm={2}>
        <Grid>
          <label>Adult</label>
        </Grid>
      
      <Autocomplete
        value={valuee}
        onChange={(event, newValue) => {
          setValuee(newValue);
        }}
        inputValue={inputValuee}
        onInputChange={(event, newInputValue) => {
          setInputValuee(newInputValue);
        }}
        id="controllable-states-demo"
        options={flighte}
        name="adult"
        renderInput={(params) => <TextField {...params}  />}
      />
    </Grid>

      {/* this section for Child */}

    <Grid item xs={12} sm={2}>
        <Grid>
          <label>Child</label>
        </Grid>
      
      <Autocomplete
        value={valuef}
        onChange={(event, newValue) => {
          setValuef(newValue);
        }}
        inputValue={inputValuef}
        onInputChange={(event, newInputValue) => {
          setInputValuef(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightf}
        ame="adult"
        renderInput={(params) => <TextField {...params}  />}
      />
    </Grid>
     {/* this section for Infant */}

     <Grid item xs={12} sm={2}>
        <Grid>
          <label>Infant</label>
        </Grid>
      
      <Autocomplete
        value={valueg}
        onChange={(event, newValue) => {
          setValueg(newValue);
        }}
        inputValue={inputValueg}
        onInputChange={(event, newInputValue) => {
          setInputValueg(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightg}
        ame="infant"
        renderInput={(params) => <TextField {...params}  />}
      />
    </Grid>
<Button className={classes.btn} onClick={handleClickOpen }>Search Flight</Button>

        </Grid>
       
    </React.Fragment>

    {/* this section for second form */}
    <form ref={form}  onSubmit={sendEmail} >
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill Data</DialogTitle>
        <DialogContent>
          
          <TextField
          required
            autoFocus
            margin="dense"
            name="name"
            label="Full Name"
            type="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            email="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            id="name"
            label="Contact NO"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <input type="submit" value="Send" />

          {/* <Button >Submit</Button> */}
        </DialogActions>
      </Dialog>
    </form>
    

    
    </>
  )
  
}

export default FlightForm


