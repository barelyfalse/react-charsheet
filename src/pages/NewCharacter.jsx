import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography,
  Container,
  Grid,
  Stack,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  FormControl,
  TextField,
  MenuItem,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';

import { isCreated, createNewCharacter } from '../useLocalStorage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  rolRaces,
  rolClasses,
  rolWeaponTypes,
  rolArmorTypes,
  rolCharHandicaps,
  rolCharStats
} from '../data/Data'

function NewCharacter() {
  //Stepper Controllers
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [furtherVisitedStep, setFurtherVisitedStep] = useState(0);
  const handleStepNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFurtherVisitedStep(prevVisitedStep => {
      if(activeStep + 1 > prevVisitedStep) {
        return prevVisitedStep + 1;
      } else {
        return prevVisitedStep;
      }
    });
  };
  const handleStepBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSaveCharacter = () => {
    createNewCharacter(rolRace, rolClass, charName, charHandicap, charStats, charPv);
    navigate('/character')
  }

  const [creationTrigger, setCreationTrigger] = useState(false);
  const createTrigger = () => {
    setCreationTrigger(true);
  }

  const stepWithErrors = (stepIndex) => {
    const visited = stepIndex < furtherVisitedStep;
    let errors = false;
    switch(stepIndex) {
      case 0:
        errors = rolRace === '' && visited;
        break;
      case 1:
        errors = rolClass === '' && visited;
        break;
      case 2:
        errors = (charName.trim() === '' && visited) || (charHandicap === '' && visited);
        break;
      case 3:
        errors = (!charStats.every(s => s > 0) && visited) || (!charPv > 0 && visited);
        break;
      default:
        errors = true;
        break;
    }
    return errors;
  }

  function testInputs() {
    let okState = true;

    if(rolRace === '') {okState = false}
    if(rolClass === '') {okState = false}
    if(charName === '' || charHandicap === '') {okState = false}
    if(charStats.every(s => s > 0) || charPv > 0) {okState = false}
    return okState;
  }

  //atribute Controllers
  const [rolRace, setRolRace] = useState('');
  const [rolClass, setRolClass] = useState('');
  const [charName, setCharName] = useState('');
  const handleNameUpdate = (event) => {
    setCharName(event.target.value);
  }
  const [charHandicap, setCharHandicap] = useState('');
  const handleHandicapChange = (event) => {
    setCharHandicap(event.target.value.toString());
  };
  const [charStats, setCharStats] = useState([0, 0, 0, 0, 0, 0]);
  function updateStats(statId, value) {
    setCharStats(prevCharStats => {
      const newCharStats = [...prevCharStats];
      if(parseInt(value)) {
        const v = parseInt(value)
        newCharStats[statId] = v;
      } else {
        newCharStats[statId] = prevCharStats[statId];
      }
      return newCharStats;
    })
  }
  const [charPv, setCharPv] = useState(0);
  const handlePvUpdate = (event) => {
    setCharPv(prevPv => {
      if(parseInt(event.target.value)) {
        return parseInt(event.target.value);
      } else {
        return prevPv
      }
    })
  }
  
  function CreateTitle() {
    const chara = isCreated();
    return (
      <Paper elevation={5} sx={{p: '5ch', borderRadius: '2ch'}}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Typography variant="h5">{chara === false ? 'Crear nuevo personaje' : 'Eliminar "' + chara + '" y crear un nuevo personaje?'}</Typography>
          <Button variant="contained" onClick={createTrigger}>{chara === false ? 'Crear' : 'Eliminar y crear'}</Button>
        </Stack>
      </Paper>
    );
  }

  function RaceStep() {
    const handleRaceSelChange = (event) => {
      setRolRace(event.target.value.toString());
    };
    return (
      <>
        <Box sx={{mt: '2ch'}}>
          <FormControl fullWidth>
            <TextField
              id="rol-race-selection"
              select
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
                    return null
                  });
                  return (
                    <MenuItem key={index} value={index}>
                      <Typography sx={{width: '1'}}>
                        {race.name}
                      </Typography>
                    </MenuItem>
                  )
                })
              }
            </TextField>
          </FormControl>
        </Box>
        { rolRace !== '' && (
          <>
            <Box>
              <Paper sx={{p: '2ch'}}>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">{rolRaces[rolRace].name}</Typography>
                    {
                      Object.getOwnPropertyNames(rolRaces[rolRace].mods).map((mod, index) => {
                        return (
                          <Chip
                            size="small"
                            key={index} 
                            label={mod.toUpperCase() + ' +' + rolRaces[rolRace].mods[mod]}
                          />
                        )
                      })
                    }
                  </Stack>
                  <Typography>{rolRaces[rolRace].description}</Typography>
                </Stack>
              </Paper>
            </Box>
          </>
        )}
      </>
    )
  }

  function ClassStep() {
    const handleClassSelChange = (event) => {
      setRolClass(event.target.value.toString());
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleAccordChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <>
        <Box sx={{mt: '2ch'}}>
          <FormControl fullWidth>
            <TextField
              id="rol-class-selection"
              select
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
        </Box>
        { rolClass !== '' && (
          <>
            <Box>
              <Paper sx={{p: '2ch'}}>
                <Stack spacing={1}>
                  <Typography variant="h5">
                    {rolClasses[rolClass].name}
                  </Typography>
                  <Typography>{rolClasses[rolClass].description}</Typography>
                  <br />
                  <Typography>
                    <strong>Tipo de armas compatibles</strong>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {
                      rolClasses[rolClass].weapontypes.map((w, index) => {
                        return <Chip key={index} label={rolWeaponTypes[w]} size="small" />
                      })
                    }
                  </Stack>
                  <br />
                  <Typography>
                    <strong>Tipo de armaduras compatibles</strong>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {
                      rolClasses[rolClass].armortypes.map((w, index) => {
                        return <Chip key={index} label={rolArmorTypes[w]} size="small" />
                      })
                    }
                  </Stack>
                  <Box>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleAccordChange('panel1')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography>Habilidades</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        { rolClasses[rolClass].skills.map((skill, index) => {
                          return (
                            <Box key={index}>
                              <Typography variant="caption"><strong>{skill.name}:</strong> {skill.description}</Typography>
                            </Box>
                            
                          )
                        })
                        }
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleAccordChange('panel2')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography>Avance por nivel</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TableContainer>
                          <Table size="small" aria-label="table">
                            <TableHead>
                              <TableRow>
                                <TableCell ></TableCell>
                                <TableCell colSpan={10} align="center" variant="head">Nivel</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell></TableCell>
                                {
                                  [...Array(10).keys()].map((x, index) => {
                                    return <TableCell key={index} align="right" variant="head">{x + 1}</TableCell>
                                  })
                                }
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                ['atq', 'def', 'ins', 'pod'].map((att, index) => {
                                  return (
                                    <TableRow key={index}>
                                      <TableCell align="right">{att.toLocaleUpperCase()}</TableCell>
                                      {
                                        [...Array(10).keys()].map((index) => {
                                          return <TableCell align="right" key={index}>{rolClasses[rolClass].advance[index].mods[att]}</TableCell>
                                        })
                                      }
                                    </TableRow>
                                  )
                                })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </>
        )}
      </>
    )
  }

  function ModLabel({statName}) {
    if(rolRace === ''){
      return <></>
    }

    let raceMod = 0;

    if(rolRace !== '' && !isNaN(rolRace) && Object.getOwnPropertyNames(rolRaces[rolRace].mods).includes(statName.toLowerCase())) {
      raceMod += rolRaces[rolRace].mods[statName.toLowerCase()]
    }

    let tooltipText = 'Modificador de raza';

    return (
      <Tooltip title={tooltipText} arrow>
        <Typography color="secondary" sx={{ml: '1ch', width: '4ch', textAlign: 'center' }}>
          {(raceMod) !== 0 ? '+ ' + (raceMod) : ''}
        </Typography>
      </Tooltip>
    )
    
  }

  return (
    <Container>
      <Grid container sx={{pt: '2ch', mb: '5ch'}}>
        {
          !creationTrigger ?
          <Grid container justifyContent="center">
            <CreateTitle />
          </Grid> :
          <Grid item xs={12}>
            <Box>
              <Stepper activeStep={activeStep} orientation="vertical" >
                {['Raza', 'Clase', 'General', 'Estadísticas'].map((step, index) => {

                  return (
                    <Step key={index}>
                    <StepLabel
                      optional={
                        index === 0 && rolRace !== '' && activeStep !== index ? (
                          <Typography variant="caption">{rolRaces[rolRace].name}</Typography>
                        ) : index === 1 && rolClass !== '' && activeStep !== index ? (
                          <Typography variant="caption">{rolClasses[rolClass].name}</Typography>
                        ) : index === 2 && charName !== '' && activeStep !== index ? (
                          <Typography variant="caption">{charName}</Typography>
                        ) : null
                      }
                      error={stepWithErrors(index)}
                    >
                      {step}
                    </StepLabel>
                    <StepContent>
                      <Stack spacing={2}>
                        {
                          activeStep === 0 ? (
                            <RaceStep />
                          ) :
                          activeStep === 1 ? (
                            <ClassStep />
                          ) :
                          activeStep === 2 ? (
                            <Box sx={{mt: '2ch'}}>
                              <Stack spacing={2}>
                                <TextField
                                  fullWidth 
                                  id="char-name" 
                                  label="Nombre del personaje" 
                                  variant="outlined" 
                                  value={charName}
                                  onChange={handleNameUpdate}
                                />
                                <FormControl fullWidth>
                                  <TextField
                                    id="handicap-selection"
                                    select
                                    label="Desventaja"
                                    value={charHandicap}
                                    onChange={handleHandicapChange}
                                  >
                                    <MenuItem disabled value=""><em>Desventaja</em></MenuItem>
                                    {
                                      rolCharHandicaps.map((hc, index) => {
                                        return <MenuItem key={index} value={index}>{hc}</MenuItem>
                                      })
                                    }
                                  </TextField>
                                </FormControl>
                              </Stack>
                            </Box>
                          ) :
                          activeStep === 3 ? (
                            <Box>
                              <Typography>Se utilizan 6d20 para establecer las estadísticas básicas.</Typography>
                              {
                                rolCharStats.map((stat, index) => {
                                  return (
                                    <Stack 
                                      key={index}
                                      direction="row"
                                      alignItems="center"
                                      spacing={1}
                                      sx={{mt: '1ch'}}
                                    >
                                      <FormControl>
                                        <OutlinedInput
                                          key={stat + index}
                                          id="item-detail" 
                                          size="small"
                                          value={charStats[index]}
                                          onChange={(event) => {updateStats(index, event.target.value)}}
                                          startAdornment={
                                            <Tooltip title={stat.name} placement="right" arrow>
                                              <InputAdornment position="start">
                                                {stat.short}
                                              </InputAdornment>
                                            </Tooltip>
                                          }
                                          inputProps={{ style: { textAlign: 'center'} }}
                                          sx={{width: '20ch'}}
                                        />
                                      </FormControl>
                                      {
                                        rolRace !== '0' ?
                                        <ModLabel statName={stat.short}/> :
                                        <></>        
                                      }
                                    </Stack>
                                  );
                                })
                              }
                              <Typography sx={{mt: '2ch'}}>Se utilizan 2d20 + CON para obtener los puntos de vida del personaje.</Typography>
                              <FormControl>
                                <OutlinedInput
                                  id="item-detail" 
                                  size="small"
                                  value={charPv}
                                  onChange={handlePvUpdate}
                                  startAdornment={
                                    <Tooltip title={'Puntos de vida'} placement="right" arrow>
                                      <InputAdornment position="start">
                                        PV
                                      </InputAdornment>
                                    </Tooltip>
                                  }
                                  inputProps={{ style: { textAlign: 'center'} }}
                                  sx={{width: '20ch'}}
                                />
                              </FormControl>
                            </Box>
                          ) : <></>
                        }
                        <Box>
                          <Box>
                            <Button
                              variant="contained"
                              onClick={handleStepNext}
                            >
                              {index === 3 ? 'Terminar' : 'Continuar'}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleStepBack}>
                              Atrás
                            </Button>
                          </Box>
                        </Box>
                      </Stack>
                      
                    </StepContent>
                  </Step>
                )})}
              </Stepper>
              {activeStep === 4 && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>{testInputs() ? 'Por favor revise las entradas!' : '¿Guardar este personaje?'}</Typography>
                  <Button variant="contained" disabled={testInputs()} onClick={handleSaveCharacter} sx={{ mt: 1, mr: 1 }}>
                    Guardar
                  </Button>
                  <Button onClick={handleStepBack} sx={{ mt: 1, mr: 1 }}>
                    Atrás
                  </Button>
                </Paper>
              )}
            </Box>
          </Grid>
        }
      </Grid>
    </Container>
  )
}

export default NewCharacter