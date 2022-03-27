import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Skill from '../components/Skill';

function Character() {

  const charData = {
    name: "a",
    rolClass: 0,
    lvl: 0,
    xp: 0,
    actualPv: 0,
    totalPv: 0,
    stats: [0, 0, 0, 0, 0, 0],
    skills: [0, 1, 2],
    actualPod: 0,
  }

  //pv controllers
  const [pv, setPv] = useState(0)

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
  const [rolClass, setRolClass] = React.useState('');

  const handleClassSelChange = (event) => {
    setRolClass(event.target.value);
  };

  //pod controllers
  const [pod, setPod] = useState(0)

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
                    <MenuItem value={1}>Samurai</MenuItem>
                    <MenuItem value={2}>Guerrero</MenuItem>
                    <MenuItem value={3}>Asesino</MenuItem>
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
                    <IconButton aria-label="delete" onClick={() => {decreasePv();}}>
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
                    <IconButton aria-label="delete" onClick={() => {addPv();}}>
                      <AddCircleRoundedIcon fontSize="inherit" />
                    </IconButton>
                  </ButtonGroup>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold'}}>
                    {'/'}
                  </Typography>
                  <Box sx={{mt: '0ch'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="totalPvText" 
                    variant="outlined"
                    inputProps={{ style: { textAlign: 'center' }, disabled: true}}
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
                      type="number"
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
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'FUE:'}
                  </Typography>
                  <Box sx={{mt: '0ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="strText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'DES:'}
                  </Typography>
                  <Box sx={{mt: '1ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="dexText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'CON:'}
                  </Typography>
                  <Box sx={{mt: '1ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="conText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'CAR:'}
                  </Typography>
                  <Box sx={{mt: '1ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="carText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'INT:'}
                  </Typography>
                  <Box sx={{mt: '1ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="intText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '7ch'}}>
                    {'PER:'}
                  </Typography>
                  <Box sx={{mt: '1ch', width:'1'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="perText"
                    variant="outlined"
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

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

                <Box sx={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
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
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={8} xs={12}>
            <Card sx={{height: '1'}}>
              <CardContent>
                <Typography variant="h6">
                  Skills
                </Typography>
                <Box>
                  <Stack>
                    {
                      charData.skills.map((skillid, index) => {
                        return <Skill rolClass={charData.rolClass} skillIndex={skillid} />
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
            <Card>
              <CardContent>
                Boton de editar
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Character