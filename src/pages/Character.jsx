import React, {createRef, useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import {
  Container, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  ButtonGroup,
  IconButton,
  Typography,
  Box,
  MenuItem,
  FormControl,
  Stack,
  Tooltip,
  Button,
  OutlinedInput,
  InputAdornment,
  Input,
} from '@mui/material';
import { motion, AnimatePresence, useMotionValue } from "framer-motion"

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import Skill from '../components/Skill';
import InheritSkill from '../components/InheritSkill';
import Stat from '../components/Stat';
import SkillSelect from '../components/SkillSelect';
import InventorySlot from '../components/InventorySlot';
import AddObjectDialog from '../components/AddObjectDialog';
import EquimentSlot from '../components/EquimentSlot';
import ClassInfoDialog from '../components/ClassInfoDialog';

import { rolClasses, rolCharStats, rolCharSkillStats, rolRaces, rolCharHandicaps } from '../data/Data.js';
import { useLocalStorage } from "../useLocalStorage";

function Character() {
  //general props
  const gProps = {
    bRad: '1ch'
  };

  //edit controllers
  const [editFields, setEditFields] = useState(true);
  const handleEditFields = () => {
    setEditFields(prevEditFields => !prevEditFields);
  }

  //chardata controllers
  const [charStats, setCharStats] = useLocalStorage('stats', [0, 0, 0, 0, 0, 0]);

  function updateStats(statId, value) {
    //console.log('trying to update ' + statId + ' with ' + value);
    setCharStats(prevCharStats => {
      const newCharStats = [...prevCharStats];
      newCharStats[statId] = value;
      return newCharStats;
    })
  }

  //skill controllers
  const [charSkills, setCharSkills] = useLocalStorage('skills', []);

  function addSkill(skillId) {
    setCharSkills(prevSkills => {
      var newSkills = [...prevSkills];
      newSkills.push([skillId, 1]);
      return newSkills;
    })
  }

  function levelUpSkill(skillId) {
    setCharSkills(prevSkills => {
      var newSkills = [...prevSkills];
      newSkills.find(s => s[0] === skillId)[1] += 1;
      return newSkills;
    })
  }

  function resetSkills() {
    setCharSkills([]);
    console.log('Skills reseted');
  }


  //name controllers 
  const [charName, setCharName] = useLocalStorage('name', '');

  const handleNameUpdate = (event) => {
    setCharName(event.target.value);
  }

  //max pv controllers
  const [currentPv, setCurrentPv] = useLocalStorage('maxPv', 0);

  const handleCurrentPvUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setCurrentPv(parseInt(event.target.value));
    }
  }

  //pv controllers
  const [pv, setPv] = useLocalStorage('currentPv', 0);

  function addPv() {
    setPv(prevPv => { 
      if(prevPv < currentPv) {
        return prevPv + 1;
      } else {
        return prevPv;
      }
    });
  }

  function decreasePv() {
    setPv(prevPv => { 
      if(prevPv !== 0) {
        return prevPv - 1;
      } else {
        return 0;
      }
    });
  }

  const handlePvUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setPv(parseInt(event.target.value));
    }
  }

  //class select controllers
  const [rolClass, setRolClass] = useLocalStorage('rolClass', '');

  const handleClassSelChange = (event) => {
    setRolClass(event.target.value.toString());
    resetSkills();
  };

  //race select controllers
  const [rolRace, setRolRace] = useLocalStorage('rolRace', '');

  const handleRaceSelChange = (event) => {
    setRolRace(event.target.value.toString());
  };

  //lvl controllers
  const [lvl, setLvl] = useLocalStorage('lvl', 1);

  const handleLvlUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      const newLvl = parseInt(event.target.value);
      setLvl(prevLvl => {
        return newLvl;
      });
    }
  }

  //xp controllers
  const [xp, setXp] = useLocalStorage('xp', 0);

  const handleXpUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setXp(parseInt(event.target.value));
    }
  }

  //pod controllers
  const [pod, setPod] = useLocalStorage('currentPod', 0);

  function addPod() {
    setPod(prevPod => prevPod + 1);
  }

  function decreasePod() {
    setPod(prevPod => { 
      if(prevPod !== 0) {
        return prevPod - 1;
      } else {
        return 0;
      }
    });
  }

  function reducePodSkill(skillCost) {
    setPod(prevPod => { 
      if(prevPod - skillCost >= 0) {
        return prevPod - skillCost;
      } else {
        return prevPod;
        //snackbar
      }
    });
  }

  const handlePodUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setPod(parseInt(event.target.value));
    }
  }

  //skill selection controllers
  const [skillSelectOpen, setSkillSelectOpen] = React.useState(false);
  const [skillSelectValue, setSkillSelectValue] = React.useState(0);

  const handleClickSkillSelect = () => {
    setSkillSelectOpen(true);
  };

  const handleSkillSelectClose = (newValue) => {
    setSkillSelectOpen(false);

    if (newValue) {
      setSkillSelectValue(parseInt(newValue));
      addSkill(parseInt(newValue));
    }
  };

  //add item to inventory controllers
  const [addItemOpen, setAddItemOpen] = React.useState(false);

  const handleClickAddItem = () => {
    setAddItemOpen(true);
  };

  const handleAddItemClose = (newItem) => {
    setAddItemOpen(false);

    if (newItem) {
      addItemToInventory(newItem);
    }
  };

  const handleAddItemFile = async (newItem) => {
    newItem.preventDefault();
    const reader = new FileReader();
    reader.onload = async (newItem) => {
      const text = (newItem.target.result);
      const item = JSON.parse(text);
      if(item) {
        addItemToInventory(item)
      }
    };
    reader.readAsText(newItem.target.files[0])
  }

  //inventory controllers
  const [equipment, setEquipment] = useLocalStorage('equipment', []);
  const [inventory, setInventory] = useLocalStorage('inventory', []);

  const addItemToInventory = (item) => {
    setInventory(prevInventory => {
      let newInventory = [...prevInventory];
      newInventory.push({qty: 1, item: item});
      return newInventory
    })
  }

  const handleItemQtyUpdate = (qty, id) => {
    setInventory(prevInventory => {
      let newInventory = [...prevInventory];
      console.log(newInventory);
      
      newInventory.find(o => o.item.id === id).qty = qty;
      
      console.log(newInventory);
      return newInventory;
    })
  }

  const removeItemFromInventory = (id) => {
    setInventory(prevInventory => {
      let newInventory = [...prevInventory];
      const index = newInventory.indexOf(newInventory.find(o => o.item.id === id));
      if (index > -1) {
          newInventory.splice(index, 1);
          return newInventory;
      } else {
      }
    })
  }

  const handleItemEquip = (id) => {
    let removed = {};
    
    setInventory(prevInventory => {
      let newInventory = [...prevInventory];
      const index = newInventory.indexOf(newInventory.find(o => o.item.id === id));
      if (index > -1) {
        if(newInventory[index].qty > 1) {
          newInventory[index].qty = newInventory[index].qty - 1;
          
          removed = newInventory[index].item;
          return newInventory;
        } else {
          removed = newInventory.splice(index, 1)[0].item;
          return newInventory;
        }
      }
    })

    if(removed) {
      setEquipment(prevEquipment => {
        let newEquipment = [...prevEquipment];
        newEquipment.push(removed);
        return newEquipment;
      })
    }
  }

  const handleItemUnequip = (id) => {
    let removed = {};
    setEquipment(prevEquipment => {
      let newEquipment = [...prevEquipment];
      const index = newEquipment.indexOf(newEquipment.find(o => o.id === id));
      if (index > -1) {
        removed = newEquipment.splice(index, 1)[0];
        return newEquipment;
      }
    });

    if(removed) {
      setInventory(prevInventory => {
        let newInventory = [...prevInventory];
        if(newInventory.find(o => o.item.id === id)) {
          const index = newInventory.indexOf(newInventory.find(o => o.item.id === id));
          if(index > -1) {
            newInventory[index].qty++;
            return newInventory;
          }
        } else {
          newInventory.push({qty: 1, item: removed});
          return newInventory;
        }
      })
    }
  }

  function equipmentStatus() {
    let status = { weapons: 0, armor: 0, accesories: 0 }
    equipment.map((e) => { 
      switch(e.itemtype) {
        case 0: 
          status.weapons++;
          break;
        case 1:
          status.armor++;
          break;
        case 2:
          status.accesories++;
          break;
        default:
          console.log('wrong item type on equipment status!');
      }
    });
    return status;
  }

  const resetInventory = () => {
    setInventory([]);
    setEquipment([]);
    console.log('inventory reseted');
  }

  //leveling logic
  const canLevelUpSkill = () => {
    const numberOfSkillLevels = charSkills.reduce((accum, skill) => {return accum + skill[1]}, 0);
    return ((lvl + 4) > numberOfSkillLevels && (charSkills.length >= 5));
  }

  const canAddNewSkill = () => {
    return ((lvl + 4) > charSkills.length);
  }

  //class info dialog controllers
  const [classInfoDiaOpen, setClassInfoDiaOpen] = useState(false);

  const handleClassInfoDiaClickOpen = () => {
    setClassInfoDiaOpen(true);
  };

  const handleClassInfoDiaClose = () => {
    setClassInfoDiaOpen(false);
  };

  //handicap controllers
  const [handicap, setHandicap] = useLocalStorage('handicap', '');
  const handleHandicapChange = (event) => {
    setHandicap(event.target.value.toString());
  };
  const [visibleSecrets, setVisibleSecrets] = useState(false);
  const handleVisibleSecrets = () => {
    setVisibleSecrets(!visibleSecrets);
  }

  return (
    <>
      <Container maxWidth="lg" sx={{mt: '2ch', mb: '5ch'}}>
        <Grid container spacing={1}>
          <Grid item sm={7} xs={12}>
            <Card sx={{borderRadius: gProps.bRad}}>
              <CardContent>
                <TextField
                  size="small"
                  fullWidth 
                  id="char-name" 
                  label="Nombre" 
                  variant="outlined" 
                  disabled={editFields}
                  value={charName}
                  onChange={handleNameUpdate}
                />
                <Grid container spacing={1}>
                  <Grid item md={7} sm={6} xs={6}>
                    <Stack direction="row" alignContent="center" sx={{ mt: '2ch' }}>
                      <FormControl fullWidth>
                        <TextField
                          id="rol-class-selection"
                          select
                          size="small"
                          label="Clase"
                          value={rolClass}
                          onChange={handleClassSelChange}
                          disabled={editFields}
                        >
                          <MenuItem disabled value=""><em>Clase</em></MenuItem>
                          {
                            rolClasses.map(stat => stat.name).map((rolClass, index) => {
                              return <MenuItem key={index} value={index}>{rolClass}</MenuItem>
                            })
                          }
                        </TextField>
                      </FormControl>
                      <Tooltip title="Información de la clase" arrow>
                        <IconButton color="primary" aria-label="Inforamción de clase" onClick={handleClassInfoDiaClickOpen}>
                          <InfoRoundedIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                    <ClassInfoDialog open={classInfoDiaOpen} rolClass={rolClass} handleClose={handleClassInfoDiaClose} />
                  </Grid>
                  
                  <Grid item md={5} sm={6} xs={6}>
                    <FormControl fullWidth sx={{ mt: '2ch' }}>
                      <TextField
                        id="rol-race-selection"
                        select
                        size="small"
                        label="Raza"
                        value={rolRace}
                        onChange={handleRaceSelChange}
                        disabled={editFields}
                      >
                        <MenuItem disabled value=""><em>Raza</em></MenuItem>
                        {
                          rolRaces.map((race, index) => {
                            let modsLabel = '';
                            Object.getOwnPropertyNames(race.mods).map((mod) => {
                              modsLabel += ' ' + mod.toUpperCase() + ' +' + race.mods[mod];
                              return null
                            });
                            return (
                              <MenuItem key={index} value={index}>
                                <Tooltip title={modsLabel} placement="right" arrow>
                                  <Typography sx={{width: '1'}}>
                                    {race.name}
                                  </Typography>
                                </Tooltip>
                              </MenuItem>
                            )
                          })
                        }
                      </TextField>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={5} xs={12}>
            <Card sx={{borderRadius: gProps.bRad}}>
              <CardContent>
                
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Tooltip title="Puntos de vida" arrow>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        {'PV:'}
                      </Typography>
                    </Tooltip>
                    <Tooltip title="Puntos de vida actuales" arrow>
                      <ButtonGroup variant="outlined" aria-label="primary button group">
                        <IconButton color="primary" aria-label="delete" size="small" onClick={() => {decreasePv();}}>
                          <RemoveCircleRoundedIcon fontSize="inherit"/>
                        </IconButton>
                        <Box sx={{mt: '0ch'}}>
                          <TextField 
                          hiddenLabel
                          size="small"
                          fullWidth
                          id="pvText" 
                          variant="outlined"
                          value={pv}
                          inputProps={{ style: { textAlign: 'center' }}}
                          onChange={handlePvUpdate}
                          />
                        </Box>
                        <IconButton color="primary" aria-label="delete" size="small" onClick={() => {addPv();}}>
                          <AddCircleRoundedIcon fontSize="inherit" />
                        </IconButton>
                      </ButtonGroup>
                    </Tooltip>
                    <Typography sx={{mr: '1ch', fontWeight: 'bold'}}>
                      {'/'}
                    </Typography>
                    <Tooltip title="Puntos de vida máximos" arrow>
                      <Box sx={{mt: '0ch', width: 1/1.5}}>
                        <TextField 
                        hiddenLabel
                        size="small"
                        fullWidth
                        id="currentPvText" 
                        variant="outlined"
                        inputProps={{ style: { textAlign: 'center' }, disabled: false}}
                        onChange={handleCurrentPvUpdate}
                        value={currentPv}
                        disabled={editFields}
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                  {
                    /**
                    <Box>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <IconButton color="primary" aria-label="sume" component="span" size="small">
                        <RemoveOutlinedIcon />
                      </IconButton>
                      <TextField 
                      sx={{width: '7ch'}}
                      inputProps={{ style: { textAlign: 'center' }}}
                      size="small"
                      id="basic" 
                      variant="outlined" />
                      <IconButton color="primary" aria-label="suma" component="span" size="small">
                        <AddOutlinedIcon />
                      </IconButton>
                    </ButtonGroup>
                  </Box>
                    
                     */
                  }
                
                <Stack direction="row" spacing={2} sx={{mt: '2ch'}}>
                  <FormControl>
                    <OutlinedInput
                      id="lvl-tex" 
                      size="small"
                      value={lvl}
                      onChange={handleLvlUpdate}
                      startAdornment={
                        <Tooltip title={'Nivel del personaje'} arrow>
                          <InputAdornment position="start">
                            {'Nivel:'}
                          </InputAdornment>
                        </Tooltip>
                      }
                      inputProps={{ style: { textAlign: 'center'} }}
                    />
                  </FormControl>
              
                  <FormControl>
                    <OutlinedInput
                      id="xp-text" 
                      size="small"
                      value={xp}
                      onChange={handleXpUpdate}
                      startAdornment={
                        <Tooltip title={'Puntos de experiencia'} arrow>
                          <InputAdornment position="start">
                            {'XP:'}
                          </InputAdornment>
                        </Tooltip>
                      }
                      inputProps={{ style: { textAlign: 'center'} }}
                    />
                  </FormControl>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3} md={3} xs={6}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent sx={{height: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Stack>
                  {
                    rolCharStats.map((stat, index) => {
                      return <Stat 
                      key={index}
                      statIndex={index} 
                      statName={stat.short} 
                      fullStat={stat.name} 
                      statValue={charStats[index]} 
                      updateStatState={updateStats}
                      race={rolRace}
                      equipment={equipment}
                      disabled={editFields}
                      />
                    })
                  }
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent sx={{height: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {
                  ['atq', 'def', 'ins', 'pod'].map((mod, index) =>{
                    const actualLvl = (lvl > 0 && lvl <= 10) ? lvl : 1;
                    const modValue = rolClass !== '' ? rolClasses[rolClass].advance.find(adv => adv.level === actualLvl).mods[mod] : 0;
                    const nextLevelModValue = rolClass !== '' && lvl < 10 ? rolClasses[rolClass].advance.find(adv => adv.level === actualLvl + 1).mods[mod] : 0;
                    let noEquipMod = true;
                    equipment.map(equip => {
                      if(equip.mods && Object.getOwnPropertyNames(equip.mods).some(m => rolCharSkillStats.map(s => s.short.toLowerCase()).includes(m))) {
                        noEquipMod = false;
                      }
                    })
                    let equipMod = 0;
                    if(!noEquipMod) {
                      equipment.map(e => {
                        if(Object.getOwnPropertyNames(e.mods).includes(mod)) {
                          equipMod += e.mods[mod];
                        }
                      })
                    }

                    return (
                      <Stack 
                        key={index} 
                        direction="row" 
                        alignItems="center" 
                        justifyContent="center"
                        spacing={{ xs: 0, sm: 2, md: 0 }}
                      >
                        <Typography sx={{fontWeight: 'bold', width:'5ch' }}>
                          {mod.toUpperCase()+':'}
                        </Typography>
                        <Tooltip title={'Siguiente nivel: ' + (mod === 'pod' ? (nextLevelModValue + 10) : (nextLevelModValue >= 0 ? '+' : '-') + Math.abs(nextLevelModValue))} placement="right" arrow>
                          <Typography sx={{fontWeight: 'bold', width:'4ch', textAlign: 'center'}} variant="h6">
                            {mod === 'pod' ? modValue + 10 : (modValue >= 0 ? '+ ' : '- ') + Math.abs(modValue)}
                          </Typography>
                        </Tooltip>
                        <Tooltip title="Modificador de equipo" arrow>
                          <Typography sx={{width: noEquipMod ? '0' : '5ch', textAlign: 'center' }} color='secondary'>
                            {equipMod === 0 ? '' : (equipMod >= 0 ? '+ ' : '- ') + Math.abs(equipMod)}
                          </Typography>
                        </Tooltip>
                      </Stack>
                    )
                  })
                }
                
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <Box sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    maxWidth: '20ch'
                  }}>
                    <IconButton color="primary" aria-label="delete" size="small" onClick={() => {decreasePod()}}>
                      <RemoveCircleRoundedIcon fontSize="inherit"/>
                    </IconButton>
                    <Box sx={{mt: '0ch', width: '1'}}>
                      <TextField 
                      hiddenLabel
                      fullWidth
                      size="small"
                      id="podText" 
                      variant="outlined"
                      value={pod}
                      inputProps={{ style: { textAlign: 'center'}}}
                      onChange={handlePodUpdate}
                      />
                    </Box>
                    <IconButton color="primary" aria-label="delete" size="small" onClick={() => {addPod()}}>
                      <AddCircleRoundedIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={7} md={6} xs={12}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="h6">
                    Habilidades
                  </Typography>
                  <Box>
                    <Tooltip title="Añadir habilidad" arrow>
                      <IconButton color="primary" aria-label="Añadir habilidad" onClick={handleClickSkillSelect}>
                        <AddRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                <SkillSelect 
                  id="skill-selection-menu"
                  keepMounted
                  open={skillSelectOpen}
                  onClose={handleSkillSelectClose}
                  value={skillSelectValue}
                  rolClass={rolClass}
                  selectedRolClassSkills={charSkills}
                  canAddNewSkill={canAddNewSkill}
                />
                <Box>
                  <Stack>
                    {
                      rolRace ?
                      rolRaces[rolRace].skills.map((skill, index) => {
                        return (
                          <InheritSkill 
                            key={index}
                            skill={skill}
                            reducePod={reducePodSkill}
                          />
                        )
                      }) : null
                    }
                    {
                      charSkills.map((skillid, index) => {
                        return (
                          <Skill 
                            key={index} 
                            rolClass={rolClass} 
                            skillIndex={skillid} 
                            reducePod={reducePodSkill} 
                            canLevelUp={canLevelUpSkill}
                            levelUpSkill={levelUpSkill}
                          />
                        );
                      })
                    }
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent>
                <Box>
                  <Typography variant="h6">
                    Equipo
                  </Typography>
                </Box>
                <Box>
                  <AnimatePresence initial={false}>
                    {
                      equipment.map((item) => {
                        return (
                          <EquimentSlot 
                            key={item.id} 
                            item={item}
                            onUnequip={handleItemUnequip}
                          />
                        )
                      })
                    }
                  </AnimatePresence>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="h6">
                    Inventario
                  </Typography>
                  <Box>
                    <Tooltip title="Subir ítem" arrow>
                      <label htmlFor="icon-button-file">
                        <Input accept=".itm" id="icon-button-file" type="file" sx={{display: 'none'}} onChange={(e) => handleAddItemFile(e)}/>
                        <IconButton color="primary" aria-label="Subir ítem" component="span">
                          <FileUploadRoundedIcon />
                        </IconButton>
                      </label>
                    </Tooltip>
                    <Tooltip title="Añadir al inventario" arrow>
                      <IconButton color="primary" aria-label="Añadir al inventario" onClick={handleClickAddItem}>
                        <AddRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                <Box>
                  <AnimatePresence initial={false}>
                    {
                      inventory.map((slot) => {
                        return (
                          <InventorySlot
                            key={slot.item.id}
                            qty={slot.qty} 
                            item={slot.item} 
                            itemQtyUpdate={handleItemQtyUpdate} 
                            onDelete={removeItemFromInventory} 
                            onEquip={handleItemEquip}
                            rolClass={rolClass}
                            equipmentStatus={equipmentStatus()}
                          />
                        )
                      })
                    }
                  </AnimatePresence>
                </Box>
              </CardContent>
            </Card>
            <AddObjectDialog
              key="object-diag"
              id="add-item-menu"
              keepMounted
              open={addItemOpen}
              onClose={handleAddItemClose}
            />
          </Grid>
          
          <Grid item sm={12} xs={12}>
            <Card sx={{height: '1', borderRadius: gProps.bRad}}>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '2ch'}}>
                  <Typography variant="h6">
                    Desventaja
                  </Typography>
                  <IconButton color="primary" aria-label="delete" onClick={handleVisibleSecrets}>
                    {visibleSecrets ?
                      <VisibilityRoundedIcon fontSize="inherit" /> :
                      <VisibilityOffRoundedIcon fontSize="inherit" />
                    }
                  </IconButton>
                </Box>
                <FormControl fullWidth sx={{filter: visibleSecrets ? 'blur(0px)' : 'blur(4px)'}}>
                  <TextField
                    id="handicap-selection"
                    select
                    size="small"
                    label="Desventaja"
                    value={handicap}
                    onChange={handleHandicapChange}
                    disabled={!visibleSecrets || editFields}
                  >
                    <MenuItem disabled value=""><em>Desventaja</em></MenuItem>
                    {
                      rolCharHandicaps.map((hc, index) => {
                        return <MenuItem key={index} value={index}>{hc}</MenuItem>
                      })
                    }
                  </TextField>
                </FormControl>
                
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} xs={12}>
            <Box sx={{width: 1, my: '1ch', display: 'flex', justifyContent: 'center'}}>
              <Tooltip title="Editar hoja">
                <Button variant="contained" endIcon={<EditRoundedIcon />} onClick={handleEditFields}>
                  Editar
                </Button>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Character