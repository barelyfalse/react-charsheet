import React from 'react';
import PropTypes from 'prop-types';
import { rolCharStats, rolItemTypes, rolWeaponTypes, rolArmorTypes } from '../data/Data.js';
import {
  useTheme,
  Typography, 
  Button,
  IconButton,
  Tooltip, 
  Dialog, 
  DialogContent, 
  DialogActions,
  DialogTitle,
  TextField,
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Chip,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';



function ModificatorDetails(props) {
  /*
  Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
    console.log(mod + ' ' + props.item.mods[mod]);
  })
  */
  if(props.item.itemtype === 4)
    return <></>;
  
  return (
    <Grid item xs={12}>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{mt: '1ch'}}>
        {
          props.item.mods ?
          Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
            return <Chip 
              key={index} 
              label={mod.toUpperCase() + ' ' + (props.item.mods[mod] > 0 ? '+':'') +props.item.mods[mod]}
              color={props.item.mods[mod] > 0 ? 'success' : 'error'}
              variant={rolCharStats.map((skill) => { return skill.short }).includes(mod.toUpperCase()) ? "outlined" : ""}
            />
          }) : null
        }
      </Stack>
    </Grid>
  );
}


function ObjectDetailsDialog(props) {
  const { onClose, onDelete, item: valueProp, open, qty, ...other } = props;
  const [item, setItem] = React.useState(valueProp);
  const chipPalette = useTheme().palette.chip;

  const handleOk = () => {
    onClose();
  };

  const handleItemRemove = () => {
    onDelete(item.id);
    onClose();
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(item)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = item.name+'.itm';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  
  const WeaponInfo = () => {
    return (
      <>
        <Chip label={'Arma ' + rolWeaponTypes[item.weapontype].toLowerCase()} variant="outlined" />
      </>
    )
  }

  const ArmorInfo = () => {
    return (
      <>
        <Chip label={'Armadura ' + rolArmorTypes[item.armortype].toLowerCase()} variant="outlined" />
      </>
    )
  }

  const ConsumableInfo = () => {
    return (
      <>
        <Chip label={'Usos: ' + item.uses} variant="outlined" />
        <Chip label={
          item.duration === 0 ?
          'Instantánea' :
          'Duración: ' + item.duration
          } 
          variant="outlined" />
      </>
    )
  }

  const ItemModificators = () => {
    return (
      <>
        {
          props.item.mods ?
          Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
            return <Chip 
              key={index} 
              label={mod.toUpperCase() + ' ' + (props.item.mods[mod] > 0 ? '+':'') +props.item.mods[mod]}
              color={props.item.mods[mod] > 0 ? 'success' : 'error'}
              variant={rolCharStats.map((skill) => { return skill.short }).includes(mod.toUpperCase()) ? "outlined" : ""}
            />
          }) : null
        }
      </>
    )
  } 

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { borderRadius: '2ch'} }}
      maxWidth="sm"
      fullWidth={true}
      TransitionProps={{  }}
      open={open}
      {...other}
    >
      <DialogTitle>Información del ítem</DialogTitle>
      <DialogContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h4">{item.name}</Typography>
          <Chip label={rolItemTypes[item.itemtype]} />
        </Stack>
        <br />
        <Typography color={chipPalette.neutral} variant="h6">Descripción:</Typography>
        <Typography sx={{ml: '1ch'}}>{item.description}</Typography>
        <br />
        <Stack direction="row" spacing={1} justifyContent="center">
          {
            item.itemtype === 0 ?
            <WeaponInfo /> : null
          }
          {
            item.itemtype === 1 ?
            <ArmorInfo /> : null
          }
          {
            item.itemtype === 3 ?
            <ConsumableInfo /> : null
          }
          <ItemModificators />
        </Stack>
        
      </DialogContent>
      <DialogActions>
        <Tooltip title="Descargar ítem">
          <IconButton aria-label="delete" onClick={downloadTxtFile}>
            <FileDownloadRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Descartar ítem">
          <IconButton aria-label="delete" onClick={handleItemRemove}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Button onClick={handleOk}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}

ObjectDetailsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired
};

export default ObjectDetailsDialog