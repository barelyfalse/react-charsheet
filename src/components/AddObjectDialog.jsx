import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { rolCharStats, rolCharSkillStats, rolItemTypes, rolCharBasicStats } from '../data/Data.js';
import { v4 as uuid } from 'uuid';
import { 
  Box,
  Button,
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
  Stack,
  MenuItem,
} from '@mui/material';

function AddObjectDialog(props) {
  const { onClose, open, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    if(isNaN(parseInt(itemType)) || parseInt(itemType) < 0 || itemName === "") {
      return
    }
      
    let newItem = {
      id: uuid(),
      type: parseInt(itemType), 
      name: itemName, 
      description: itemDesc 
    };
    
    if(itemType === 0) {
      newItem.mods = {};
      newItem.mods.dmg = weaponDamage;
    }

    if(itemType === 1 || itemType === 2) {
      newItem.mods = mods;
    }

    if(itemType === 2) {
      if(isNaN(consUses) || consUses < 0 || isNaN(consDuration) || consDuration < 0)
        return
      newItem.uses = consUses;
      newItem.duration = consDuration;
    }
    onClose(newItem);
  };

  //item name controllers
  const [itemName, setItemName] = useState('');

  const handleItemNameUpdate = (event) => {
    setItemName(event.target.value);
  }

  //item type select controllers
  const [itemType, setItemType] = useState(3);

  const handleItemTypeChange = (event) => {
    setItemType(event.target.value);
  };

  //item description controllers
  const [itemDesc, setItemDesc] = useState('');

  const handleItemDescUpdate = (event) => {
    setItemDesc(event.target.value);
  }

  //weapon damage controllers
  const [weaponDamageText, setWeaponDamageText] = useState('0');
  const [weaponDamage, setWeaponDamage] = useState(0);

  const handleWeaponDamageTextUpdate = (event) => {
    setWeaponDamageText(event.target.value);
  }

  const handleWeaponDamageUpdate = () => {
    if(!isNaN(weaponDamageText) && !isNaN(parseInt(weaponDamageText))) {
      setWeaponDamage(parseInt(weaponDamageText));
    } else {
      setWeaponDamageText(weaponDamage)
    }
  }

  //use duration controllers
  const [consUsesText, setConsUsesText] = useState('1');
  const [consUses, setConsUses] = useState(1);
  const handleConsUsesTextUpdate = (event) => {
    setConsUsesText(event.target.value);
  }
  const handleConsUsesUpdate = () => {
    if(!isNaN(consUsesText) && !isNaN(parseInt(consUsesText))) {
      setConsUses(parseInt(consUsesText));
    } else {
      setConsUsesText(consUses)
    }
    
  }
  const [consDurationText, setConsDurationText] = useState('0');
  const [consDuration, setConsDuration] = useState(0);;
  const handleConsDurationTextUpdate = (event) => {
    setConsDurationText(event.target.value);
  }
  const handleConsDurationUpdate = () => {
    if(!isNaN(consDurationText) && !isNaN(parseInt(consDurationText))) {
      setConsDuration(parseInt(consDurationText));
    } else {
      setConsDurationText(consDuration)
    }
    
  }

  //mod selection controllers
  const [selectedMod, setSelectedMod] = useState('');

  const handleSelectedModUpdate = (event) => {
    setSelectedMod(event.target.value);
  }

  //mod value controllers
  const [modValue, setModValue] = useState(0);
  const [modValueText, setModValueText] = useState('');
  
  const handleModValueTextUpdate = (event) => {
    setModValueText(event.target.value);
  }

  const handleModValueUpdate = () => {
    console.log('mod value loss focus')
    if(!isNaN(modValueText) && !isNaN(parseInt(modValueText))) {
      setModValue(parseInt(modValueText));
    } else {
      setModValueText(modValue)
    }
  }

  //mods constroller
  const [mods, setMods] = useState({});

  const handleModsAdd = () => {
    if(selectedMod === '' || !Number.isInteger(parseInt(modValue)) || parseInt(modValue) === 0) {
      return
    }

    setMods(prevMods => {
      let newMods = {...prevMods};
      newMods[selectedMod] = parseInt(modValue);
      return newMods;
    })
  }

  const deleteMod = (mod) => {
    setMods(prevMods => {
      let newMods = {...prevMods};
      delete newMods[mod];
      return newMods;
    })
  }

  function DeleteableChip(props) {
    let mod = props.mod;
    return (
      <Chip
        label={mod.toUpperCase() + ' ' + (mods[mod] > 0 ? '+':'') + mods[mod]}
        color={mods[mod] > 0 ? 'success' : 'error'}
        variant={rolCharStats.map((skill) => { return skill.short }).includes(mod.toUpperCase()) ? "outlined" : ""}
        onDelete={() => {deleteMod(mod)}}
      />
    )
  }

  function ModificatorDetails() {
    if( itemType !== 1 && itemType !== 2)
      return <></>
    return(
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" spacing={2} sx={{mt: '1ch'}}>
          <FormControl sx={{width: '1', maxWidth: '20ch'}}>
            <TextField
              id="mod-selection"
              select 
              size="small"
              label="Modificador"
              value={selectedMod}
              onChange={handleSelectedModUpdate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TextField
                      key="mod-value"
                      size="small"
                      id="mod-value-text" 
                      hiddenLabel
                      variant="standard" 
                      value={modValueText}
                      onChange={handleModValueTextUpdate}
                      onBlur={handleModValueUpdate}
                      inputProps={{ style: { textAlign: 'center' } }}
                      InputProps={{ disableUnderline: true }}
                      sx={{width: '6ch', mt: '.5ch'}}
                    />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem disabled value=""><em>Skill stats</em></MenuItem>
              {
                rolCharSkillStats.map((stat) => { return stat.short }).map((stat, index) => {
                  return <MenuItem key={index} value={stat.toLowerCase()}>{stat}</MenuItem>
                })
              }

              <MenuItem disabled value=""><em>Basic stats</em></MenuItem>
              {
                rolCharBasicStats.map((stat) => { return stat.short }).map((stat, index) => {
                  return <MenuItem key={index + rolCharSkillStats.length} value={stat.toLowerCase()}>{stat}</MenuItem>
                })
              }

              <MenuItem disabled value=""><em>Base stats</em></MenuItem>
              {
                rolCharStats.map((stat) => { return stat.short }).map((stat, index) => {
                  return <MenuItem key={index + rolCharSkillStats.length + rolCharBasicStats.length} value={stat.toLowerCase()}>{stat}</MenuItem>
                })
              }
            </TextField>
          </FormControl>
          <Button variant="contained" onClick={handleModsAdd}>Añadir</Button>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing="1ch" sx={{mt: '2ch'}}>
          {
            Object.getOwnPropertyNames(mods).map((mod, index) => {
              return <DeleteableChip key={index} mod={mod} />
            })
          }
        </Stack>
        
      </Grid>
    );
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%' } }}
      TransitionProps={{  }}
      open={open}
      {...other}
    >
      <DialogTitle>Añadir item</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} sx={{
          mt: '1ch',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Grid item xs={12} sm={8} sx={{mt: '1ch'}}>
            <TextField
              size="small"
              fullWidth 
              id="char-name-text" 
              label="Nombre" 
              variant="outlined" 
              value={itemName}
              onChange={handleItemNameUpdate}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{mt: '1ch'}}>
            <FormControl fullWidth>
              <TextField
                id="item-type-selection"
                select
                size="small"
                label="Tipo"
                value={itemType}
                onChange={handleItemTypeChange}
              >
                <MenuItem disabled value=""><em>Tipo</em></MenuItem>
                {
                  rolItemTypes.map((itemType, index) => {
                    return <MenuItem key={index} value={index}>{itemType}</MenuItem>
                  })
                }
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{mt: '1ch'}}>
            <TextField
              id="item-description"
              label="Descripción"
              multiline
              fullWidth
              maxRows={4}
              value={itemDesc}
              onChange={handleItemDescUpdate}
            />
          </Grid>
          {
            itemType === 0 ?
            <Grid item xs={12}>
              <Box sx={{display: 'flex', justifyContent: 'center', mt: '1ch'}}>
                <FormControl sx={{width: '15ch'}}>
                  <OutlinedInput
                    key="weapon-dmg-val"
                    id="weapon-damage" 
                    value={weaponDamageText}
                    startAdornment={<InputAdornment position="start">Daño:</InputAdornment>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleWeaponDamageTextUpdate}
                    onBlur={handleWeaponDamageUpdate}
                  />
                </FormControl>
              </Box>
            </Grid> :
            <></>
          }
          {
            itemType === 2 ?
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center" spacing={2} sx={{mt: '1ch'}}>
                <FormControl sx={{width: '15ch'}}>
                  <OutlinedInput
                    key="item-uses"
                    id="consumable-uses" 
                    value={consUsesText}
                    size="small"
                    startAdornment={<InputAdornment position="start">Usos:</InputAdornment>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleConsUsesTextUpdate}
                    onBlur={handleConsUsesUpdate}
                  />
                </FormControl>
                <FormControl sx={{width: '15ch'}}>
                  <OutlinedInput
                    key="item-dur"
                    id="consumable-duration" 
                    value={consDurationText}
                    size="small"
                    startAdornment={<Tooltip title="Turnos"><InputAdornment position="start">Duración:</InputAdornment></Tooltip>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleConsDurationTextUpdate}
                    onBlur={handleConsDurationUpdate}
                  />
                </FormControl>
              </Stack>
            </Grid> :
            <></>
          }
          {
            itemType === 1 || itemType === 2 ?
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center" spacing={2} sx={{mt: '1ch'}}>
                <FormControl sx={{width: '1', maxWidth: '20ch'}}>
                  <TextField
                    id="mod-selection"
                    select 
                    size="small"
                    label="Modificador"
                    value={selectedMod}
                    onChange={handleSelectedModUpdate}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TextField
                            key="mod-value"
                            size="small"
                            id="mod-value-text" 
                            hiddenLabel
                            variant="standard" 
                            value={modValueText}
                            onChange={handleModValueTextUpdate}
                            onBlur={handleModValueUpdate}
                            inputProps={{ style: { textAlign: 'center' } }}
                            InputProps={{ disableUnderline: true }}
                            sx={{width: '6ch', mt: '.5ch'}}
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem disabled value=""><em>Skill stats</em></MenuItem>
                    {
                      rolCharSkillStats.map((stat) => { return stat.short }).map((stat, index) => {
                        return <MenuItem key={index} value={stat.toLowerCase()}>{stat}</MenuItem>
                      })
                    }

                    <MenuItem disabled value=""><em>Basic stats</em></MenuItem>
                    {
                      rolCharBasicStats.map((stat) => { return stat.short }).map((stat, index) => {
                        return <MenuItem key={index + rolCharSkillStats.length} value={stat.toLowerCase()}>{stat}</MenuItem>
                      })
                    }

                    <MenuItem disabled value=""><em>Base stats</em></MenuItem>
                    {
                      rolCharStats.map((stat) => { return stat.short }).map((stat, index) => {
                        return <MenuItem key={index + rolCharSkillStats.length + rolCharBasicStats.length} value={stat.toLowerCase()}>{stat}</MenuItem>
                      })
                    }
                  </TextField>
                </FormControl>
                <Button variant="contained" onClick={handleModsAdd}>Añadir</Button>
              </Stack>
              <Stack direction="row" justifyContent="center" spacing="1ch" sx={{mt: '2ch'}}>
                {
                  Object.getOwnPropertyNames(mods).map((mod, index) => {
                    return <DeleteableChip key={index} mod={mod} />
                  })
                }
              </Stack>
            </Grid> :
            <></>
          }
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleOk}>Agregar</Button>
      </DialogActions>
    </Dialog>
  )
}

AddObjectDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AddObjectDialog