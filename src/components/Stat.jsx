import React, { useState } from 'react';
import { 
  TextField, 
  Typography,
  Box,
  Tooltip
} from '@mui/material';

function Stat({statIndex, statName, fullStat, updateStatState, statValue}) {
  const handleStatUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      updateStatState(statIndex, parseInt(event.target.value));
    }
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'center', mt: '1ch', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Tooltip title={fullStat}>
        <Typography sx={{fontWeight: 'bold', width: '6ch', textAlign: 'center'}}>
          {statName}:
        </Typography>
      </Tooltip>
      <Box sx={{width:'10ch'}}>
        <TextField 
        hiddenLabel
        size="small"
        fullWidth
        id={'stat' + statIndex}
        variant="outlined"
        inputProps={{min: 0, style: { textAlign: 'center' }}}
        value={statValue}
        onChange={handleStatUpdate}
        />
      </Box>
      <Tooltip title={'Modificador de raza'}>
        <Typography color="secondary" sx={{ml: '1ch', width: '4ch', textAlign: 'center' }}>
          {'+ 9'}
        </Typography>
      </Tooltip>
    </Box>
  )
}

export default Stat