import React, {useState, useEffect} from 'react'
import { rolItemTypes, rolClasses } from '../data/Data.js';
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


function InventorySlot({qty, item, itemQtyUpdate, onDelete, onEquip, rolClass, equipmentStatus}) {
  const [objDetailsOpen, setObjDetailsOpen] = useState(false);

  //item quantity controllers
  const [itemQtyText, setItemQtyText] = useState(''+qty);
  const [itemQty, setItemQty] = useState(qty);
  const handleItemQtyTextUpdate = (event) => {
    setItemQtyText(event.target.value.trim())
  }
  const handleItemQtyUpdate = (event) => {
    if(!isNaN(itemQtyText) && !isNaN(parseInt(itemQtyText))) {
      setItemQty(parseInt(itemQtyText));
      itemQtyUpdate(parseInt(itemQtyText), item.id);
    } else {
      setItemQtyText(itemQty);
    }
  }

  useEffect(() => {
    //console.log('qty updated');
    setItemQty(qty);
  },[qty])

  const unequippableItem = () => {
    if(item.itemtype < 3) {
      switch(item.itemtype) {
        case 0:
          //arma
          return !rolClasses[rolClass].weapontypes.includes(item.weapontype) || !equipmentStatus.weapons < 1;
        case 1:
          //armadura
          return !rolClasses[rolClass].armortypes.includes(item.armortype) || !equipmentStatus.armor < 1;
        case 2:
          //accesorio
          return !equipmentStatus.accesories < 2;
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
          value={itemQtyText}
          sx={{
            width: '6ch',
            minWidth: '6ch'
          }}
          onChange={handleItemQtyTextUpdate}
          onBlur={handleItemQtyUpdate}
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
            justifyContent="end"
            alignItems="center"
            sx={{height: '1'}}
          >
            <Box sx={{width: '1', minWidth: '0ch'}}>
              <Typography sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {item.name}
              </Typography>
            </Box>
            
            <Stack direction="row" alignItems="center">
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
            </Stack>
            
          </Stack>
          
        </Paper>
        <ObjectDetailsDialog
          item={item}
          qty={qty}
          open={objDetailsOpen}
          onClose={handleObjInfoClose}
          onDelete={onDelete}
        />
      </Stack>
    </motion.div>
  )
}

export default InventorySlot