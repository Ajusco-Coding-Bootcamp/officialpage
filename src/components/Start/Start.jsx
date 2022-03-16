import { useState } from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery} from '@mui/material/'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTheme } from '@mui/material/styles';



const Start = () => {
      const [open, setOpen] = useState(false);
      const theme = useTheme();
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
      return (
            <div>
                  <h3>Empieza ahora</h3>
                  <h5>El futuro es tuyo...</h5>
                  <Button variant="outlined" onClick={handleClickOpen}>
        APLICAR AHORA
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}
        
        aria-labelledby="responsive-dialog-title">
        <DialogTitle>Formato de Aplicación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Llena el siguiente formulario para solicitar una aplicación para el proceso de selección 2022. Cierre del periodo:  31 de Julio 2022.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
          <HighlightOffIcon/>Autosabotaje</Button>
          <Button onClick={handleClose}>
          <AutoFixHighIcon/> APLICAR</Button>
        </DialogActions>
      </Dialog>
            </div>
      )
}

export default Start