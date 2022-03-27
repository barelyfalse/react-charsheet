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
    <Box sx={{display: 'flex', alignItems: 'center', mt: '1ch'}}>
      <Tooltip title={fullStat}>
        <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
          {statName}:
        </Typography>
      </Tooltip>
      <Box sx={{mt: '0ch', width:'1'}}>
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
    </Box>
  )
}

export default Stat