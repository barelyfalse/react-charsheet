import React, {useState, useEffect} from 'react'
import { rolItemTypes } from '../data/Data.js';
import ObjectDetailsDialog from './ObjectDetailsDialog';
import { Box, 
  Paper, 
  Typography,
  TextField, 
  Chip,
  Tooltip,
  IconButton,
  Stack
} from '@mui/material'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import NoBackpackIcon from '@mui/icons-material/NoBackpack';


function InventorySlot({qty, item, itemQtyUpdate, onDelete, onEquip}) {

  //inventory detail controllers
  const [objDetailsOpen, setObjDetailsOpen] = React.useState(false);
  //add new set state if want to set new values to objects

  //item quantity controllers
  const [itemQty, setItemQty] = useState(qty);

  const handleItemQtyUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setItemQty(parseInt(event.target.value))
    }
  }

  /*
  useEffect(() => {
    itemQtyUpdate(itemQty, item.id);
  },[itemQty])
  */

  console.log(item);

  const unequippableItem = () => {
    if(item.itemtype < 3) {
      switch(item.itemtype) {
        case 0:
          //arma
          return false;
        case 1:
          //armadura
          return false;
        case 2:
          //accesorio
          return false;
        default:
          return true;
      }
    } else return true;
  }

  const handleClickObjInfo = () => {
    setObjDetailsOpen(true);
  };

  const handleObjInfoClose = () => {
    setObjDetailsOpen(false);
  };

  const handleItemEquip = () => {
    if(item.itemtype < 3) {
      onEquip(item.id);
    }
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <TextField
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
      <Paper
          elevation={4}
          sx={{
          py: '1ch',
          px: '1.5ch',
          width: '1'
          
      }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
          >
            <Typography>
              {item.name}
            </Typography>
            <Chip label={rolItemTypes[item.itemtype]} size="small" sx={{ml: '1ch'}}/>
          </Stack>
          <Box>
            <Tooltip title="Información" arrow>
              <IconButton color="primary" aria-label="Informacón" onClick={handleClickObjInfo}>
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={item.itemtype > 2 ? 'No equipable':'Equipar ítem'} arrow>
              <span>
                <IconButton color="primary" aria-label="Equipar ítem" disabled={unequippableItem()} onClick={handleItemEquip}>
                  <NoBackpackIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
          
        </Stack>
        
      </Paper>
      <ObjectDetailsDialog
        keepMounted
        open={objDetailsOpen}
        onClose={handleObjInfoClose}
        onDelete={onDelete}
        item={item}
        qty={qty}
      />
    </Stack>
  )
}

export default InventorySlot