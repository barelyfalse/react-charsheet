import React, { useState } from 'react';
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

import { rolClasses } from '../data/Data.js';

function Character() {
  const charData = {
    name: "a",
    rolClass: 0,
    lvl: 0,
    xp: 0,
    actualPv: 0,
    totalPv: 0,
    stats: [
      {name: 'FUE', full: 'Fuerza', value: 1}, 
      {name: 'DES', full: 'Destreza', value: 6}, 
      {name: 'CON', full: 'Constitución', value: 6},
      {name: 'CAR', full: 'Carisma', value: 2},
      {name: 'INT', full: 'Inteligencia', value: 2}, 
      {name: 'PER', full: 'Percepción', value: 3},
    ],
    skills: [0, 1, 2],
    actualPod: 0,
  };

  //chardata controllers
  const [charStats, setCharStats] = useState(charData.stats.map(stat =>stat.value));

  function updateStats(statId, value) {
    //console.log('trying to update ' + statId + ' with ' + value);
    setCharStats(prevCharStats => {
      const newCharStats = [...prevCharStats];
      newCharStats[statId] = value;
      return newCharStats;
    })
  }


  //pv controllers
  const [pv, setPv] = useState(charData.actualPv)

  function addPv() {
    setPv(prevPv => prevPv + 1);
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
  const [rolClass, setRolClass] = useState(charData.rolClass);

  const handleClassSelChange = (event) => {
    setRolClass(event.target.value);
  };

  //pod controllers
  const [pod, setPod] = useState(charData.actualPod)

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
                
                />
                <FormControl fullWidth sx={{ mt: '2ch' }}>
                  <InputLabel id="rol-class-selection-lbl">Clase</InputLabel>
                  <Select
                    labelId="rol-class-selection-lbl"
                    id="rol-class-selection"
                    size="small"
                    value={rolClass}
                    label="Clase"
                    onChange={handleClassSelChange}
                  >
                    <MenuItem disabled value=""><em>Clase</em></MenuItem>
                    {
                      rolClasses.map(stat => stat.name).map((rolClass, index) => {
                        return <MenuItem value={index}>{rolClass}</MenuItem>
                      })
                    }
                  </Select>
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
                    <IconButton aria-label="delete" size="small" onClick={() => {decreasePv();}}>
                      <RemoveCircleRoundedIcon fontSize="inherit"/>
                    </IconButton>
                    <Box sx={{mt: '0ch'}}>
                      <TextField 
                      hiddenLabel
                      size="small"
                      fullWidth
                      id="pvText" 
                      variant="outlined"
                      defaultValue={pv}
                      value={pv}
                      inputProps={{ style: { textAlign: 'center' }}}
                      onChange={handlePvUpdate}
                      />
                    </Box>
                    <IconButton aria-label="delete" size="small" onClick={() => {addPv();}}>
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
                    id="totalPvText" 
                    variant="outlined"
                    inputProps={{ style: { textAlign: 'center' }, disabled: false}}
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
                    charData.stats.map((stat, index) => {
                      return <Stat 
                      statIndex={index} 
                      statName={stat.name} 
                      fullStat={stat.full} 
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
              <CardContent sx={{height: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
                      defaultValue={pod}
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
                      <IconButton color="primary" aria-label="add to shopping cart">
                        <AddRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                
                <Box>
                  <Stack>
                    {
                      charData.skills.map((skillid, index) => {
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