import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { rolCharStats, rolCharSkillStats, rolItemTypes, rolWeaponTypes, rolArmorTypes, rolCharBasicStats } from '../data/Data.js';
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

  function resetInputs() {
    setItemName('');
    setItemType('4');
    setItemDesc('');
    setWeaponDamage(0);
    setWeaponDamageText('0');
    setWeaponType('');
    setArmorDefense(0);
    setArmorDefenseText('0');
    setArmorType('');
    setConsUses(1);
    setConsDuration(0);
    setMods({});
    setModValue(0);
    setModValueText('0');
    setSelectedMod('')
  }

  const handleOk = () => {
    if(isNaN(parseInt(itemType)) || parseInt(itemType) < 0 || itemName === "") {
      return
    }
      
    let newItem = {
      id: uuid(),
      itemtype: parseInt(itemType), 
      name: itemName.trim(), 
      description: itemDesc.trim()
    };

    switch(parseInt(itemType)) {
      case 0:
        if(weaponType !== '') {
          newItem.mods = {};
          newItem.mods.dmg = weaponDamage;
          newItem.weapontype = weaponType;
        }
        break;
      case 1:
        if(armorType !== '') {
          newItem.mods = {};
          newItem.mods.def = armorDefense;
          newItem.armortype = armorType;
        }
        break;
      case 2: case 3:
        newItem.mods = mods;
        if(parseInt(itemType) == 3) {
          console.log(isNaN(consUses));
          if(!isNaN(consUses) || !isNaN(consDuration)) {
            newItem.uses = consUses;
            newItem.duration = consDuration;
          }
        }
        break;
    }

    resetInputs();
    onClose(newItem);
  };

  //item name controllers
  const [itemName, setItemName] = useState('');

  const handleItemNameUpdate = (event) => {
    setItemName(event.target.value);
  }

  //item type select controllers
  const [itemType, setItemType] = useState(4);

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
  
  //weapon type controllers
  const [weaponType, setWeaponType] = useState('');
  const handleWeaponTypeUpdate = (event) => {
    setWeaponType(event.target.value);
  }

  //armor defense controllers
  const [armorDefenseText, setArmorDefenseText] = useState('0');
  const [armorDefense, setArmorDefense] = useState(0);

  const handleArmorDefenseTextUpdate = (event) => {
    setArmorDefenseText(event.target.value);
  }
  const handleArmorDefenseUpdate = () => {
    if(!isNaN(armorDefenseText) && !isNaN(parseInt(armorDefenseText))) {
      setArmorDefense(parseInt(armorDefenseText));
    } else {
      setArmorDefenseText(armorDefense)
    }
  }

  //armor type controllers
  const [armorType, setArmorType] = useState('');
  const handleArmorTypeUpdate = (event) => {
    setArmorType(event.target.value);
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

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%', borderRadius: '2ch' } }}
      TransitionProps={{  }}
      open={open}
      {...other}
    >
      <DialogTitle>Añadir item</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              margin='dense'
              id="char-name-text" 
              label="Nombre" 
              variant="outlined" 
              value={itemName}
              onChange={handleItemNameUpdate}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin='dense'>
              <TextField
                id="item-type-selection"
                select
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              id="item-description"
              label="Descripción"
              margin='dense'
              value={itemDesc}
              onChange={handleItemDescUpdate}
            />
          </Grid>
          {
            itemType === 0 ?
            <>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
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
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
                  <TextField
                    id="weapon-type"
                    select
                    label="Tipo de arma"
                    value={weaponType}
                    onChange={handleWeaponTypeUpdate}
                  >
                    <MenuItem disabled value=""><em>Tipo de arma</em></MenuItem>
                    {
                      rolWeaponTypes.map((type, index) => {
                        return <MenuItem key={index} value={index}>{type}</MenuItem>
                      })
                    }
                  </TextField>
                </FormControl>
              </Grid>
            </> : <></>
          }
          {
            itemType === 1 ?
            <>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
                  <OutlinedInput
                    key="armor-def-val"
                    id="armor-defense"
                    value={armorDefenseText}
                    startAdornment={<InputAdornment position="start">Defensa:</InputAdornment>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleArmorDefenseTextUpdate}
                    onBlur={handleArmorDefenseUpdate}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
                  <TextField
                    id="armor-type"
                    select
                    label="Tipo de armadura"
                    value={armorType}
                    onChange={handleArmorTypeUpdate}
                  >
                    <MenuItem disabled value=""><em>Tipo de armadura</em></MenuItem>
                    {
                      rolArmorTypes.map((type, index) => {
                        return <MenuItem key={index} value={index}>{type}</MenuItem>
                      })
                    }
                  </TextField>
                </FormControl>
              </Grid>
            </> : <></>
          }
          {
            itemType === 3 ?
            <>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
                  <OutlinedInput
                    key="item-uses"
                    id="consumable-uses" 
                    value={consUsesText}
                    startAdornment={<InputAdornment position="start">Usos:</InputAdornment>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleConsUsesTextUpdate}
                    onBlur={handleConsUsesUpdate}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth margin='dense'>
                  <OutlinedInput
                    key="item-dur"
                    id="consumable-duration" 
                    value={consDurationText}
                    startAdornment={<Tooltip title="Turnos"><InputAdornment position="start">Duración:</InputAdornment></Tooltip>}
                    inputProps={{ style: { textAlign: 'center'} }}
                    onChange={handleConsDurationTextUpdate}
                    onBlur={handleConsDurationUpdate}
                  />
                </FormControl>
              </Grid>
            </> : <></>
          }
        </Grid>
        {
          itemType === 3 || itemType === 2 ?
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth margin='dense'>
                <TextField
                  id="mod-selection"
                  select
                  label="Modificador"
                  value={selectedMod}
                  onChange={handleSelectedModUpdate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                          key="mod-value"
                          id="mod-value-text" 
                          hiddenLabel
                          variant="standard" 
                          value={modValueText}
                          onChange={handleModValueTextUpdate}
                          onBlur={handleModValueUpdate}
                          inputProps={{ style: { textAlign: 'center' } }}
                          InputProps={{ disableUnderline: true }}
                          
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
            </Grid>
            <Grid item container xs={12} sm={4} justifyContent="center" alignItems="center">
              <Button variant="contained" onClick={handleModsAdd}>Añadir</Button>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center" spacing="1ch" >
                {
                  Object.getOwnPropertyNames(mods).map((mod, index) => {
                    return <DeleteableChip key={index} mod={mod} />
                  })
                }
              </Stack>
            </Grid>
          </Grid> : <></>
        }
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