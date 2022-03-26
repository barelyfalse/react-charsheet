import React from 'react';
import {rolClasses} from '../data/Data.js';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  IconButton, 
  Tooltip, 
  Dialog, 
  DialogContent, 
  DialogActions, 
  DialogContentText, 
  DialogTitle,
  Backdrop } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const da = rolClasses;

function Skill(props) {
  const skill = da[props.rolClass].skills[props.skillIndex];
  var info = '';
  if(skill.cost == 0 && skill.duration == 0) {
    info = 'pasiva'
  } else {
    info = 'costo: ' + skill.cost;
  }

  console.log(info.localeCompare('pasiva'));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Paper sx={{
        py: '1ch',
        px: '1.5ch',
        mt: '1ch',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography>
          <strong>{skill.name}</strong> ({info})
        </Typography>
        <Box>
          <Tooltip title="infomación">
            <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
              <InfoOutlinedIcon />
            </IconButton>        
          </Tooltip>
          
          <Tooltip title="Usar">
            <Button variant="contained" disabled={!info.localeCompare('pasiva')} size="small" endIcon={<DoubleArrowRoundedIcon />}>
              Usar
            </Button>
          </Tooltip>
        </Box>
      </Paper>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      </Backdrop>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="skill-dialog-title"
        aria-describedby="skill-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="skill-dialog-title">
          {skill.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="skill-dialog-description">
            {skill.description}
            <br/>
            Costo: {skill.cost}
            <br/>
            Duración: {skill.duration}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Skill