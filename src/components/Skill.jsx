import React from 'react';
import { rolClasses } from '../data/Data.js';
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
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const da = rolClasses;

function Skill({rolClass, skillIndex, reducePod }) {
  const skill = da[rolClass].skills[skillIndex];
  var info = '';
  if(skill.cost === 0 && skill.duration === 0) {
    info = 'pasiva'
  } else {
    info = 'costo: ' + skill.cost;
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickUseSkill = () => {
    reducePod(skill.cost);
  };

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
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
        <Box sx={{display: 'flex', alignItems: 'center',}}>
          <Tooltip title="infomación" arrow>
            <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
              <InfoRoundedIcon />
            </IconButton>        
          </Tooltip>
          
          <Tooltip title={!info.localeCompare('pasiva') ? 'Habilidad pasiva' : 'Usar habilidad'} arrow>
            <div>
              <Button 
                variant="contained" 
                disabled={!info.localeCompare('pasiva')} 
                size="small" 
                endIcon={<DoubleArrowRoundedIcon />} 
                onClick={handleClickUseSkill}
              >
                Usar
              </Button>
            </div>
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