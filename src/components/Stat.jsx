import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { 
  TextField, 
  Typography,
  Box,
  Tooltip,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Stack
} from '@mui/material';

function Stat({statIndex, statName, fullStat, updateStatState, statValue}) {
  const handleStatUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      updateStatState(statIndex, parseInt(event.target.value));
    }
  }

  return (
    <Stack 
      key={uuid()}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={1}
      sx={{mt: '1ch'}}
    >
      <FormControl sx={{width: '15ch'}}>
        <OutlinedInput
          id="item-detail" 
          size="small"
          value={statValue}
          onChange={handleStatUpdate}
          startAdornment={
            <Tooltip title={fullStat}>
              <InputAdornment position="start">
                {statName}
              </InputAdornment>
            </Tooltip>
          }
          inputProps={{ style: { textAlign: 'center'} }}
        />
      </FormControl>
      <Tooltip title={'Modificador de raza'}>
        <Typography color="secondary" sx={{ml: '1ch', width: '4ch', textAlign: 'center' }}>
          {'+ 9'}
        </Typography>
      </Tooltip>
    </Stack>
  )
}

export default Stat