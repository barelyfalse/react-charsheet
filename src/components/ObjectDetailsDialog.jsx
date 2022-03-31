import React from 'react';
import PropTypes from 'prop-types';
import { rolCharStats } from '../data/Data.js';
import { 
  Box,
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
  Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

function BasicDetails(props) {
  if(props.item.type !== 0 && props.item.type !== 1)
    return <></>;
  return (
    <Grid item xs={12}>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: '1ch'}}>
        <FormControl sx={{width: '15ch'}}>
          <OutlinedInput
            id="item-detail" 
            value={
              props.item.type === 0 ? props.item.mods['dmg'] : props.item.mods['def']
            }
            startAdornment={<InputAdornment position="start">
            {
              props.item.type === 0 ? 'Daño:' : 'Defensa:'
            }</InputAdornment>}
            inputProps={{ style: { textAlign: 'center'} }}
            disabled={true}
          />
        </FormControl>
      </Box>
    </Grid>
  );
}

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
  if(props.item.type !== 1 && props.item.type !== 2)
    return <></>;
  /*
  Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
    console.log(mod + ' ' + props.item.mods[mod]);
  })
  */
  return (
    <Grid item xs={12}>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{mt: '1ch'}}>
        {
          Object.getOwnPropertyNames(props.item.mods).map((mod, index) => {
            return <Chip 
              key={index} 
              label={mod.toUpperCase() + ' ' + props.item.mods[mod]}
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
  const { onClose, item: valueProp, open, qty, ...other } = props;
  const [item, setItem] = React.useState(valueProp);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(item);
  };

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
          <BasicDetails item={item} />
          <UseDetails item={item} />
          <ModificatorDetails item={item} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Tooltip title="Descargar item">
          <IconButton aria-label="delete">
            <DownloadForOfflineRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Descartar item">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleOk}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}

ObjectDetailsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired
};

export default ObjectDetailsDialog