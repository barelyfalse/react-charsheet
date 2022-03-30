import React from 'react'
import { rolItemTypes } from '../data/Data.js';
import ObjectDetails from './ObjectDetails';
import { Box, 
  Paper, 
  Typography,
  TextField, 
  Chip,
  Button,
  ButtonBase,
  IconButton, 
  Tooltip, 
  Dialog, 
  DialogContent, 
  DialogActions, 
  DialogContentText, 
  DialogTitle,
  Backdrop } from '@mui/material'


function InventoryObject({qty, item}) {

  //invetory detail controllers
  const [objDetailsOpen, setObjDetailsOpen] = React.useState(false);
  //add new set state if want to set new values to objects

  const handleClickObjInfo = () => {
    setObjDetailsOpen(true);
  };

  const handleObjInfoClose = (newValue) => {
    setObjDetailsOpen(false);
    /*
    if (newValue) {
      setSkillSelectValue( parseInt(newValue));
      addSkill(newValue);
    } */
  };

  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center',
      mt: '1ch'
    }}>
      <TextField
        id={item.id+'-item-qty'}
        hiddenLabel
        variant="standard"
        size="small"
        inputProps={{ style: { textAlign: 'center' }}}
        value={qty}
        sx={{
          width: '6ch',
        }}
      />
      <ButtonBase 
        onClick={handleClickObjInfo}
        sx={{
        ml: '1ch', 
        width: '1'
      }}>
        <Paper
          elevation={4}
          sx={{
          py: '1ch',
          px: '1.5ch',
          width: '1',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Typography>
            {item.name}
          </Typography>
          <Chip label={rolItemTypes[item.type]} size="small" sx={{ml: '1ch'}}/>
        </Paper>
      </ButtonBase>
      <ObjectDetails
        id={item.id+'-details'}
        keepMounted
        open={objDetailsOpen}
        onClose={handleObjInfoClose}
        item={item}
        qty={qty}
      />
    </Box>
  )
}

export default InventoryObject