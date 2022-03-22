import * as React from 'react';
import './App.css';
import { HeadBar } from './components/HeadBar'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ButtonGroup from "@mui/material/ButtonGroup";

import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const handleChange = (event) => {
    setRolClass(event.target.value);
  };

  const [rolClass, setRolClass] = React.useState('');

  return (
    <>
      <HeadBar />
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Nombre" variant="standard" />
            </Box>
            <FormControl variant="standard" sx={{ mt: '1ch', minWidth: '100%' }}>
              <InputLabel id="rol-class-selection">Clase</InputLabel>
              <Select
                labelId="class-selection"
                id="class-selection"
                value={rolClass}
                onChange={handleChange}
                label="Class"
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value={10}>Guerrero</MenuItem>
                <MenuItem value={20}>Samurai</MenuItem>
                <MenuItem value={30}>Asesino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-center', width: '100%'}}>
                    <TextField
                      id="pv-number"
                      label="PV"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{style: { textAlign: 'center' }}}
                      variant="standard"
                    />
                    <Box sx={{marginLeft: '1ch', marginRight: '1ch'}}>
                      <p>/</p>
                    </Box>
                    <TextField 
                      id="total-pv-input" 
                      label=" "
                      defaultValue="99"
                      type="text"
                      variant="standard" 
                      InputProps={{ 
                        readOnly: true,
                      }}
                      inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-center', width: '100%'}}>
                    <TextField 
                      id="lvl-input" 
                      label="LVL"
                      type="text"
                      defaultValue="1"
                      variant="standard" 
                      InputProps={{ 
                        readOnly: true,
                      }}
                      inputProps={{style: { textAlign: 'center' }}}
                    />
                    <Box sx={{marginLeft: '2ch', marginRight: '1ch'}}>
                    </Box>
                    <TextField
                      id="xp-number"
                      label="XP"
                      type="number"
                      defaultValue="0"
                      variant="standard"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{style: { textAlign: 'center' }}}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
              <Box sx={{ width: '8ch'}}>
                {'FUE:'}
              </Box>
              <ButtonGroup variant="outlined" aria-label="primary button group">
                <IconButton aria-label="delete">
                  <RemoveRoundedIcon fontSize="inherit"/>
                </IconButton>
                <TextField 
                hiddenLabel 
                size='small' 
                id="atqTxt" 
                variant="standard" 
                inputProps={{style: { textAlign: 'center' }}}
                />
                <IconButton aria-label="delete">
                  <AddRoundedIcon fontSize="inherit" />
                </IconButton>
              </ButtonGroup>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
              <Box sx={{ width: '8ch'}}>
                {'DES:'}
              </Box>
              <ButtonGroup variant="outlined" aria-label="primary button group">
                <IconButton aria-label="delete">
                  <RemoveRoundedIcon fontSize="inherit"/>
                </IconButton>
                <TextField 
                hiddenLabel 
                size='small' 
                id="atqTxt" 
                variant="standard"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                />
                <IconButton aria-label="delete">
                  <AddRoundedIcon fontSize="inherit" />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Grid>

          <Grid item sm={2} xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
              <Box sx={{ width: '8ch'}}>
                {'ATQ:'}
              </Box>
              <ButtonGroup variant="outlined" aria-label="primary button group">
                <IconButton aria-label="delete">
                  <RemoveRoundedIcon fontSize="inherit"/>
                </IconButton>
                <TextField 
                hiddenLabel 
                size='small' 
                id="atqTxt" 
                variant="standard" 
                inputProps={{style: { textAlign: 'center' }}}
                />
                <IconButton aria-label="delete">
                  <AddRoundedIcon fontSize="inherit" />
                </IconButton>
              </ButtonGroup>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
              <Box sx={{ width: '8ch'}}>
                {'DES:'}
              </Box>
              <ButtonGroup variant="outlined" aria-label="primary button group">
                <IconButton aria-label="delete">
                  <RemoveRoundedIcon fontSize="inherit"/>
                </IconButton>
                <TextField 
                hiddenLabel 
                size='small' 
                id="atqTxt" 
                variant="standard"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                />
                <IconButton aria-label="delete">
                  <AddRoundedIcon fontSize="inherit" />
                </IconButton>
              </ButtonGroup>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
              <Box sx={{ width: '8ch'}}>
                {'POD:'}
              </Box>
              <ButtonGroup variant="outlined" aria-label="primary button group">
                <IconButton aria-label="delete">
                  <RemoveRoundedIcon fontSize="inherit"/>
                </IconButton>
                <TextField 
                hiddenLabel 
                size='small' 
                id="atqTxt" 
                variant="standard"
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                />
                <IconButton aria-label="delete">
                  <AddRoundedIcon fontSize="inherit" />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Item>skills</Item>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Item>equip</Item>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Item>inv</Item>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Item>inv</Item>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
}

export default App;
