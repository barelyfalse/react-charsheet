import React from 'react';
import { v4 as uuid } from 'uuid';
import { Container, 
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
  Label
} from '@mui/material';

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

import Skill from '../components/Skill';
import Stat from '../components/Stat';
import SkillSelect from '../components/SkillSelect';
import InventorySlot from '../components/InventorySlot';
import AddObjectDialog from '../components/AddObjectDialog';

import { rolClasses, rolCharStats, rolItemTypes, rolRaces } from '../data/Data.js';
import { useLocalStorage } from "../useLocalStorage";

function Character() {
  var charData = {
    charId: 123,
    name: "Nombre",
    rolClass: 0,
    lvl: 1,
    xp: 0,
    currentPv: 10,
    maxPv: 10,
    stats: [ 2, 4, 3, 5, 2, 3 ],
    skills: [ 0, 2 ],
    currentPod: 10,
    maxPod: 10,
    inventory: []
  };

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

  const [charSkills, setCharSkills] = useLocalStorage('skills', []);

  function addSkill(skillId) {
    setCharSkills(prevSkills => {
      var newSkills = [...prevSkills];
      newSkills.push(parseInt(skillId));
      return newSkills;
    })
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
      setLvl(parseInt(event.target.value));
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
      addSkill(newValue);
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
      newInventory.find(o => o.item.id === id).qty = qty;
      return newInventory;
    })
  }

  const removeItemFromInventory = (id) => {
    setInventory(prevInventory => {
      let newInventory = [...prevInventory];
      const index = newInventory.indexOf(newInventory.find(o => o.item.id === id));
      if (index > -1) {
          let removed = newInventory.splice(index, 1);
          return newInventory;
      }
    })
  }

  return (
    <>
      <Container maxWidth="lg" sx={{mt: '2ch'}}>
        <Grid container spacing={1}>
          <Grid item sm={7} xs={12}>
            <Card>
              <CardContent>
                <TextField
                  size="small"
                  fullWidth 
                  id="outlined-basic" 
                  label="Nombre" 
                  variant="outlined" 
                  value={charName}
                  onChange={handleNameUpdate}
                />
                <Grid container spacing={1}>
                  <Grid item md={8} sm={6} xs={6}>
                    <FormControl fullWidth sx={{ mt: '2ch' }}>
                      <TextField
                        id="rol-class-selection"
                        select
                        size="small"
                        label="Clase"
                        value={rolClass}
                        onChange={handleClassSelChange}
                      >
                        <MenuItem disabled value=""><em>Clase</em></MenuItem>
                        {
                          rolClasses.map(stat => stat.name).map((rolClass, index) => {
                            return <MenuItem key={index} value={index}>{rolClass}</MenuItem>
                          })
                        }
                      </TextField>
                    </FormControl>
                  </Grid>
                  
                  <Grid item md={4} sm={6} xs={6}>
                    <FormControl fullWidth sx={{ mt: '2ch' }}>
                      <TextField
                        id="rol-race-selection"
                        select
                        size="small"
                        label="Raza"
                        value={rolRace}
                        onChange={handleRaceSelChange}
                      >
                        <MenuItem disabled value=""><em>Raza</em></MenuItem>
                        {
                          rolRaces.map((race, index) => {
                            let modsLabel = '';
                            Object.getOwnPropertyNames(race.mods).map((mod) => {
                              modsLabel += ' ' + mod.toUpperCase() + ' +' + race.mods[mod];
                            });
                            return (
                              <MenuItem key={index} value={index}>
                                <Tooltip title={modsLabel} arrow>
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
            <Card>
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
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                
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
            <Card sx={{height: '1'}}>
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
                      />
                    })
                  }
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Card sx={{height: '1'}}>
              <CardContent sx={{height: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {
                  ['atq', 'def', 'ins', 'pod'].map((mod, index) =>{
                    const actualLvl = (lvl > 0 && lvl <= 10) ? lvl : 1;
                    const modValue = rolClass !== '' ? rolClasses[rolClass].advance.find(adv => adv.level === actualLvl).mods[mod] : 0;
                    return <Box key={index} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                      <Typography sx={{fontWeight: 'bold', width: '30%', textAlign: 'center' }}>
                        {mod.toUpperCase()+':'}
                      </Typography>
                      <Typography sx={{fontWeight: 'bold', width: '25%', textAlign: 'center'}} variant="h6">
                        {mod === 'pod' ? modValue + 10 : (modValue >= 0 ? '+ ' : '- ') + Math.abs(modValue)}
                      </Typography>
                      <Typography sx={{width: '20%', textAlign: 'center', }} color='secondary'>
                        {'+ 9'}
                      </Typography>
                      
                    </Box>
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
            <Card sx={{}}>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="h6">
                    Skills
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
                  rolClassSkills={rolClasses[charData.rolClass].skills}
                  selectedRolClassSkills={charSkills}
                />
                <Box>
                  <Stack>
                    {
                      charSkills.map((skillid, index) => {
                        return <Skill key={index} rolClass={charData.rolClass} skillIndex={skillid} reducePod={reducePodSkill} />
                      })
                    }
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Card>
              <CardContent>
                <Box>
                  <Typography variant="h6">
                    Equipo
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <Card>
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
                  <Stack>
                    {
                      inventory.map((slot, index) => {
                        return <InventorySlot key={index} qty={slot.qty} item={slot.item} itemQtyUpdate={handleItemQtyUpdate} onDelete={removeItemFromInventory} />
                      })
                    }
                  </Stack>
                </Box>
              </CardContent>
            </Card>
            <AddObjectDialog 
              id="add-item-menu"
              key={uuid()}
              keepMounted
              open={addItemOpen}
              onClose={handleAddItemClose}
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Box sx={{width: 1, my: '1ch', display: 'flex', justifyContent: 'center'}}>
              <Tooltip title="Editar hoja">
                <Button variant="contained" endIcon={<EditRoundedIcon />}>
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