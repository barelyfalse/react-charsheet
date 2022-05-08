import React from 'react';
import {  
  Typography,
  Tooltip,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Stack
} from '@mui/material';
import { rolCharStats, rolRaces } from '../data/Data.js';

function Stat({statIndex, statName, fullStat, updateStatState, statValue, race, equipment, disabled}) {
  const handleStatUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      updateStatState(statIndex, parseInt(event.target.value));
    }
  }

  function ModLabel() {
    if(race === '' && !(equipment.lenght > 0)){
      return <></>
    }

    let noEquipment = true;

    equipment.map(equip => {
      if(Object.getOwnPropertyNames(equip.mods).some(m => rolCharStats.map(s => s.short.toLowerCase()).includes(m))) {
        noEquipment = false;
      }
    })

    let raceMod = 0;

    if(race !== '' && !isNaN(race) && Object.getOwnPropertyNames(rolRaces[race].mods).includes(statName.toLowerCase())) {
      raceMod += rolRaces[race].mods[statName.toLowerCase()]
    }

    let equipMod = 0;

    if(!noEquipment) {
      equipment.map(e => {
        if(Object.getOwnPropertyNames(e.mods).includes(statName.toLowerCase())) {
          equipMod += e.mods[statName.toLowerCase()]
        }
      })
    }

    let tooltipText = '';

    if(raceMod > 0 && equipMod === 0) {
      tooltipText = 'Modificador de raza'
    } else if(raceMod === 0 && equipMod > 0) {
      tooltipText = 'Modificador de equipo'
    } else {
      tooltipText = 'Raza: ' + raceMod + ' equipo: ' + equipMod;
    }

    return (
      <Tooltip title={tooltipText} arrow>
        <Typography key={statIndex} color="secondary" sx={{ml: '1ch', width: '4ch', textAlign: 'center' }}>
          {(raceMod + equipMod) !== 0 ? '+ ' + (raceMod + equipMod) : ''}
        </Typography>
      </Tooltip>
    )
    
  }

  return (
    <Stack 
      key={statIndex}
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
          disabled={disabled}
          startAdornment={
            <Tooltip title={fullStat} placement="right" arrow>
              <InputAdornment position="start">
                {statName}
              </InputAdornment>
            </Tooltip>
          }
          inputProps={{ style: { textAlign: 'center'} }}
          sx={{width: '15ch'}}
        />
      </FormControl>
      {
        race !== '0' ?
        <ModLabel/> :
        <></>        
      }
    </Stack>
  )
}

export default Stat