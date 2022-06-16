import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function UserForm ({closeForm}){



     

          return(
        <>
       <div>
      <Button variant="standard" onClick={()=>{closeForm(false);}}> close</Button>
      <hi>hi my name is avain</hi>
      
    </div>
        </>
          )



};  