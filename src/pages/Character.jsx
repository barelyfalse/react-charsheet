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

function Character() {
  //pv controlers
  const [pv, setPv] = useState(0)

  function addPv() {
    setPv(prevPv => prevPv + 1);
  }

  function decreasePv() {
    setPv(prevPv => { 
      if(prevPv != 0) {
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

  //class select controlers
  const [rolClass, setRolClass] = React.useState('');

  const handleClassSelChange = (event) => {
    setRolClass(event.target.value);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{mt: '2ch'}}>
        <Grid container spacing={1}>
          <Grid item sm={8} xs={12}>
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

          <Grid item sm={4} xs={12}>
            <Card>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {'PV:'}
                  </Typography>
                  <ButtonGroup variant="outlined" aria-label="primary button group" >
                    <IconButton aria-label="delete" onClick={() => {decreasePv();}}>
                      <RemoveCircleRoundedIcon fontSize="inherit"/>
                    </IconButton>
                    <Box sx={{mt: '0ch', width: '1/2'}}>
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
                  <Box sx={{mt: '0ch', width: '1/2'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold' }}>
                    {'Nivel:'}
                  </Typography>
                  <Box sx={{mt: '0ch', width: '1/2'}}>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="lvlText" 
                    variant="outlined"
                    inputProps={{ style: { textAlign: 'center' }}}
                    />
                  </Box>
                  <Typography sx={{mx: '1ch', fontWeight: 'bold'}}>
                    {'XP:'}
                  </Typography>
                  <Box sx={{mt: '0ch', width: '1/2'}}>
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
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Card>
              <CardContent>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'FUE:'}
                  </Typography>
                  <Box sx={{mt: '0ch'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'DES:'}
                  </Typography>
                  <Box sx={{mt: '1ch'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'CON:'}
                  </Typography>
                  <Box sx={{mt: '1ch'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'CAR:'}
                  </Typography>
                  <Box sx={{mt: '1ch'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'INT:'}
                  </Typography>
                  <Box sx={{mt: '1ch'}}>
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
                  <Typography sx={{mr: '1ch', fontWeight: 'bold', width: '16ch'}}>
                    {'PER:'}
                  </Typography>
                  <Box sx={{mt: '1ch'}}>
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
          <Grid item sm={2} xs={6}>
            <Card sx={{height: '1'}}>
              <CardContent sx={{height: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography sx={{fontWeight: 'bold', width: '16ch'}}>
                    {'ATQ:'}
                  </Typography>
                  <Box>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="atqText"
                    variant="outlined"
                    inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mt: '1ch'}}>
                  <Typography sx={{fontWeight: 'bold', width: '16ch'}}>
                    {'DEF:'}
                  </Typography>
                  <Box>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="defText"
                    variant="outlined"
                    inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mt: '1ch'}}>
                  <Typography sx={{fontWeight: 'bold', width: '16ch'}}>
                    {'POD:'}
                  </Typography>
                  <Box>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="podText"
                    variant="outlined"
                    inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mt: '1ch', mb:'3ch'}}>
                  <Typography sx={{fontWeight: 'bold', width: '16ch'}}>
                    {'INS:'}
                  </Typography>
                  <Box>
                    <TextField 
                    hiddenLabel
                    size="small"
                    fullWidth
                    id="insText"
                    variant="outlined"
                    inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={8} xs={12}>
            <Card>
              <CardContent>
                Skills
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