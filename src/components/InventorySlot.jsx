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
import { motion } from "framer-motion"


function InventorySlot({qty, item, itemQtyUpdate, onDelete, onEquip}) {
  const [objDetailsOpen, setObjDetailsOpen] = useState(false);

  //item quantity controllers
  const [itemQty, setItemQty] = useState(qty);

  const handleItemQtyUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setItemQty(parseInt(event.target.value))
    }
  }

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

  const variant = {
    initial: {
      opacity: 0,
      filter: 'blur(5px)',
      transform: 'scaleX(1.3) scaleY(1.1)',
    },
    animate: { 
      opacity: 1, 
      height: '6.5ch',
      marginTop: '1ch',
      filter: 'blur(0px)',
      transform: 'scaleX(1) scaleY(1)',
      transition: { ease: "circInOut", duration: .4}
    },
    exit: {
      opacity: 0,
      transform: 'scaleX(0.9) scaleY(0.8)',
      height: 0, 
      marginTop: 0 ,
      filter: 'blur(5px)',
      transition: { ease: "easeInOut", duration: .4}
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variant}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{height: '1'}}
      >
        <TextField
          hiddenLabel
          variant="standard"
          inputProps={{ style: { textAlign: 'center' }}}
          value={itemQty}
          sx={{
            width: '6ch',
            minWidth: '6ch'
          }}
          onChange={handleItemQtyUpdate}
        />
        <Paper
          elevation={4}
          sx={{
            width: '1',
            minWidth: '0ch',
            height: '1',
            pr: '1ch',
            pl: '1.5ch'
        }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{height: '1'}}
          >
            <Box sx={{width: 'calc(100% - 19ch)'}}>
              <Typography sx={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {item.name}
              </Typography>
            </Box>
            
            <Box>
              <Chip label={rolItemTypes[item.itemtype]} size="small"/>
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
          open={objDetailsOpen}
          onClose={handleObjInfoClose}
          onDelete={onDelete}
          item={item}
          qty={qty}
        />
      </Stack>
    </motion.div>
  )
}

export default InventorySlot