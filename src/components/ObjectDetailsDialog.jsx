import React from 'react';
import PropTypes from 'prop-types';
import { rolCharStats } from '../data/Data.js';
import {
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
import NoBackpackIcon from '@mui/icons-material/NoBackpack';

function UseDetails(props) {
  if(props.item.type !== 2)
    return <></>;
  
  return (
    <Grid item xs={12} sx={{mt: '2ch'}}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <FormControl sx={{width: '15ch'}}>
          <OutlinedInput
            id="item-detail" 
            value={
              props.item.uses
            }
            startAdornment={<InputAdornment position="start">
            {
              'Usos'
            }</InputAdornment>}
            inputProps={{ style: { textAlign: 'center'} }}
            disabled={true}
          />
        </FormControl>
        <FormControl sx={{width: '15ch'}}>
          <OutlinedInput
            id="item-detail" 
            value={
              props.item.duration
            }
            startAdornment={<InputAdornment position="start">
            {
              'Duración'
            }</InputAdornment>}
            inputProps={{ style: { textAlign: 'center'} }}
            disabled={true}
          />
        </FormControl>
      </Stack>
    </Grid>
  )
}

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
          Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
            return <Chip 
              key={index} 
              label={mod.toUpperCase() + ' ' + (props.item.mods[mod] > 0 ? '+':'') +props.item.mods[mod]}
              color={props.item.mods[mod] > 0 ? 'success' : 'error'}
              variant={rolCharStats.map((skill) => { return skill.short }).includes(mod.toUpperCase()) ? "outlined" : ""}
            />
          })
        }
      </Stack>
    </Grid>
  );
}


function ObjectDetailsDialog(props) {
  const { onClose, onDelete, item: valueProp, open, qty, ...other } = props;
  const [item, setItem] = React.useState(valueProp);

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

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%' } }}
      maxWidth="sm"
      fullWidth={true}
      TransitionProps={{  }}
      open={open}
      {...other}
    >
      <DialogTitle>Información del item</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} sx={{
          mt: '1ch',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Grid item xs={1}>
            <Tooltip title="Cantidad">
              <Typography sx={{textAlign: 'center', textWeight: 'bold' }} variant="h6">{qty}</Typography>
            </Tooltip>
            
          </Grid>
          <Grid item xs={11}>
            <TextField
              size="small"
              fullWidth
              id="item-name" 
              label="Nombre del item" 
              variant="outlined" 
              value={item.name}
              disabled={true}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: '2ch'}}>
            <TextField
              id="item-description"
              label="Descripción"
              multiline
              fullWidth
              maxRows={4}
              value={item.description}
              disabled={true}
            />
          </Grid>
          <UseDetails item={item} />
          <ModificatorDetails item={item} />
        </Grid>
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