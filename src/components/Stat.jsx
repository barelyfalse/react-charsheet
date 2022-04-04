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
import { rolCharStats, rolRaces } from '../data/Data.js';

function Stat({statIndex, statName, fullStat, updateStatState, statValue, race}) {
  const handleStatUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      updateStatState(statIndex, parseInt(event.target.value));
    }
  }

  let mod = 0;



  if(race !== '' && !isNaN(race) && Object.getOwnPropertyNames(rolRaces[race].mods).includes(statName.toLowerCase())) {
    mod = rolRaces[race].mods[statName.toLowerCase()]
  }

  function ModLabel() {
    if(race === '0'){
      return <></>
    } else {
      return (
        <Tooltip title={'Modificador de raza'} arrow>
          <Typography color="secondary" sx={{ml: '1ch', width: '4ch', textAlign: 'center' }}>
            {mod !== 0 ? '+ ' + mod : ''}
          </Typography>
        </Tooltip>
      )
    }
    
  }

  return (
    <Stack 
      key={uuid()}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{mt: '1ch'}}
    >
      <FormControl>
        <OutlinedInput
          id="item-detail" 
          size="small"
          value={statValue}
          onChange={handleStatUpdate}
          startAdornment={
            <Tooltip title={fullStat} arrow>
              <InputAdornment position="start">
                {statName}
              </InputAdornment>
            </Tooltip>
          }
          inputProps={{ style: { textAlign: 'center'} }}
          sx={{width: (race === 0 ? '1' : '15ch')}}
        />
      </FormControl>
      <ModLabel/>
    </Stack>
  )
}

export default Stat