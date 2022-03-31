import React, {useState} from 'react'
import { rolItemTypes } from '../data/Data.js';
import ObjectDetailsDialog from './ObjectDetailsDialog';
import { Box, 
  Paper, 
  Typography,
  TextField, 
  Chip,
  ButtonBase,} from '@mui/material'


function InventorySlot({qty, item, itemQtyUpdate, onDelete}) {

  //inventory detail controllers
  const [objDetailsOpen, setObjDetailsOpen] = React.useState(false);
  //add new set state if want to set new values to objects
  
  //item quantity controllers
  const [itemQty, setItemQty] = useState(qty);

  const handleItemQtyUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setItemQty(parseInt(event.target.value));
      itemQtyUpdate(parseInt(event.target.value), item.id);
    }
  }

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
        value={itemQty}
        sx={{
          width: '6ch',
        }}
        onChange={handleItemQtyUpdate}
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
      <ObjectDetailsDialog
        id={item.id+'-details'}
        keepMounted
        open={objDetailsOpen}
        onClose={handleObjInfoClose}
        onDelete={onDelete}
        item={item}
        qty={qty}
      />
    </Box>
  )
}

export default InventorySlot