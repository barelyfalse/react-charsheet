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
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Tooltip,
  Button
} from '@mui/material';

import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import Skill from '../components/Skill';
import Stat from '../components/Stat';
import SkillSelect from '../components/SkillSelect';

import { rolClasses, rolCharStats } from '../data/Data.js';
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
    maxPod: 10
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

  //lvl controllers
  const [lvl, setLvl] = useLocalStorage('lvl', 1);

  const handleLvlUpdate = (event) => {
    if(!isNaN(event.target.value) && !isNaN(parseInt(event.target.value))) {
      setLvl(parseInt(event.target.value));
    }
  }

  //lvl controllers
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
      setSkillSelectValue( parseInt(newValue));
      addSkill(newValue);
    }
  };

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
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={5} xs={12}>
            <Card>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {'PV:'}
                  </Typography>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold'}}>
                    {'/'}
                  </Typography>
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
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mt: '2ch'}}>
                  <Box sx={{display: 'flex', alignItems: 'center', width: 1/2}}>
                    <Typography sx={{mr: '1ch', fontWeight: 'bold' }}>
                      {'Nivel:'}
                    </Typography>
                    <Box sx={{mt: '0ch'}}>
                      <TextField 
                      hiddenLabel
                      size="small"
                      fullWidth
                      id="lvlText" 
                      variant="outlined"
                      inputProps={{ style: { textAlign: 'center' }}}
                      value={lvl}
                      onChange={handleLvlUpdate}
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{display: 'flex', alignItems: 'center', width: 1/2}}>
                    <Typography sx={{mx: '1ch', fontWeight: 'bold'}}>
                      {'XP:'}
                    </Typography>
                    <Box sx={{mt: '0ch'}}>
                      <TextField 
                      hiddenLabel
                      size="small"
                      fullWidth
                      id="xpText" 
                      variant="outlined"
                      inputProps={{ style: { textAlign: 'center' }}}
                      onChange={handleXpUpdate}
                      value={xp}
                      />
                    </Box>
                  </Box>
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={2} xs={6}>
            <Card>
              <CardContent>
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
                      />
                    })
                  }
                </Stack>

              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2} xs={6}>
            <Card sx={{height: '1'}}>
              <CardContent sx={{height: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                  <Typography sx={{fontWeight: 'bold', width: '30%'}}>
                    {'ATQ:'}
                  </Typography>
                  
                  <Typography sx={{fontWeight: 'bold', width: '25%', textAlign: 'center'}} variant="h6">
                    {'+99'}
                  </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                  <Typography sx={{fontWeight: 'bold', width: '30%'}}>
                    {'DEF:'}
                  </Typography>

                  <Typography sx={{fontWeight: 'bold', width: '25%', textAlign: 'center'}} variant="h6">
                    {'+99'}
                  </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                  <Typography sx={{fontWeight: 'bold', width: '30%'}}>
                    {'POD:'}
                  </Typography>
                  
                  <Typography sx={{fontWeight: 'bold', width: '25%', textAlign: 'center'}} variant="h6">
                    {'+99'}
                  </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <Box sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    maxWidth: '20ch'
                  }}>
                    <IconButton aria-label="delete" size="small" onClick={() => {decreasePod()}}>
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
                    <IconButton aria-label="delete" size="small" onClick={() => {addPod()}}>
                      <AddCircleRoundedIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={8} xs={12}>
            <Card sx={{height: '1'}}>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Typography variant="h6">
                    Skills
                  </Typography>
                  <Box>
                    <Tooltip title="Añadir habilidad">
                      <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClickSkillSelect}>
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

          <Grid item sm={6} xs={12}>
            <Card>
              <CardContent>
                Equipo
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Card>
              <CardContent>
                Inventario
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} xs={12}>
            <Box sx={{width: 1, mt: '1ch', display: 'flex', justifyContent: 'center'}}>
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