
import React, { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
 
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 import Grid from '@mui/material/Grid';
   import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
 import Autocomplete from '@mui/material/Autocomplete';
  import Dialog from '@mui/material/Dialog';
  import IconButton from '@mui/material/IconButton';
  import CloseIcon from '@mui/icons-material/Close';
  

    



const flightb = ['One Way', 'RoundTrip' ];

export default function UserForm(props)    {
         
      // this section for Fight direct or indirect
 const [valueb, setValueb] = React.useState(flightb[0]);
 const [inputValueb, setInputValueb] = React.useState('');
// this section for date
const [datevalue, setdate] = React.useState(new Date('2022-08-18T21:11:54'));
const dateChange = (newValue) => {
  setdate(newValue);
};
// this section for date2
const [datevalue2, setdate2] = React.useState(new Date('2022-08-19T21:11:54'));
const dateChange2 = (newValue2) => {
  setdate2(newValue2);
};



//this section for second form
      const{title,children, openPopup, setOpenPopup}= props;
      const handleClose = () => {
        setOpenPopup(false);
      };
      


         return  (
<>
          <div>
           <Dialog open={openPopup} onClose={handleClose}>
      <DialogTitle >Please Enter Information</DialogTitle
      
      >
      <DialogContent>
        
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="name"
          fullWidth
          variant="outlined"
        />
        <TextField
          
          margin="dense"
          id="contact"
          label="Contect No"
          type="contact"
          fullWidth
          variant="outlined"
        />
        <TextField
          
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
        />
        <Autocomplete
        value={valueb}
        onChange={(event, newValue) => {
          setValueb(newValue);
        }}
        inputValue={inputValueb}
        onInputChange={(event, newInputValue) => {
          setInputValueb(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightb}
        
        renderInput={(params) => <TextField {...params}  />}
      />
      <Grid sm={6}>
      <TextField
          
          margin="dense"
          id="email"
          label="Flying From"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          
          margin="dense"
          id="email"
          label="Flying To"
          type="email"
          fullWidth
          variant="outlined"
        />

      </Grid>

      <div>
      {/* Departure select date */}
         <Grid xs={6} sm={6}>
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
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
    </Grid>
        
        {/* Returning select date */}


        <Grid item xs={6} sm={6}>
          <label>
            Returning
          </label>
          
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
         
          inputFormat="MM/dd/yyyy"
          value={datevalue2}
          onChange={dateChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        
      </Stack>
    </LocalizationProvider>
        
        </Grid>
        </div>
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={5}
          fullWidth
         
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} >Submit</Button>
      </DialogActions>
    </Dialog>
  </div>
          
          
          
          </>

      


         )
          
         

         
};