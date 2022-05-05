import * as React from 'react';
import { 
  Stack,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Paper,
  Chip,
  Box,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material/'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

import { rolClasses } from '../data/Data.js';

function SkillSelect(props) {
  const { onClose, value: valueProp, open, rolClass, selectedRolClassSkills, canAddNewSkill, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(null);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    if(canAddNewSkill()) {
      onClose(value);
    } else {
      setSnackOpen(true);
    }
    
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //snackbar controllers
  const [snackOpen, setSnackOpen] = React.useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };
  const snackbarAction = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  if(!rolClass) {
    return null
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%', borderRadius: '2ch' } }}
      fullWidth={true}
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Elegir nueva habilidad</DialogTitle>
      <DialogContent>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="skill"
          name="skill"
          value={value}
          onChange={handleChange}
        >
          <Stack spacing={2}>
            {
              rolClasses[rolClass].skills.map((skill, index) => {
                const selected = selectedRolClassSkills.map(selected => selected[0]).includes(index);
                return ( 
                <Paper
                  key={index}
                  elevation={selected ? 4 : 6}
                  sx={{
                    px: '1ch',
                    py: '1ch',
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'start', sm: 'center' }}
                    justifyContent="space-between"
                  >
                    <FormControlLabel
                      value={index}
                      control={<Radio />}
                      label={<strong>{skill.name}</strong>}
                      disabled={selected}
                    />
                    <Stack
                      direction="row"
                      spacing={1}
                    >
                      <Chip
                        label={skill.type}
                        size="small" 
                        color={!selected ? 'primary' : 'default'}
                      />
                      <Chip
                        label={skill.action}
                        size="small"
                        variant="outlined"
                        color={!selected ? 'primary' : 'default'}
                      />
                    </Stack>
                    
                  </Stack>
                  
                  <Typography sx={selectedRolClassSkills.includes(index) ? {color: 'gray'}:{}} textAlign="justify">
                    {skill.description}
                  </Typography>
                  {
                    !selected ?
                    <Stack spacing={2} sx={{mt: '1ch'}}>
                      {  
                        skill.advance.map((adv, index) => {
                        return (
                          <Box key={index}>
                            {
                              skill.type === 'Pasiva' ?
                              <Stack  direction="row" spacing={1}>
                                <Box>{'Nivel ' + adv.level}</Box>
                                <Chip
                                  label={'pasiva'}
                                  size="small"
                                  variant="outlined"
                                />
                              </Stack>:
                              <Stack  direction="row" spacing={1}>
                                <Box>{'Nivel ' + adv.level}</Box>
                                <Chip
                                  label={'costo: ' + adv.cost}
                                  size="small"
                                  variant="outlined"
                                />
                                { 
                                  adv.duration === 0 ?
                                  <></> :
                                  <Chip
                                    label={'turnos: ' + adv.duration}
                                    size="small"
                                    variant="outlined"
                                  />
                                }
                                {
                                  adv.cast === -1 ?
                                  <Chip
                                    label="bonus"
                                    size="small"
                                    variant="outlined"
                                  /> :
                                  adv.cast === 0 ?
                                  <Chip
                                    label="acción"
                                    size="small"
                                    variant="outlined"
                                  /> :
                                  <Chip
                                    label={'casteo: ' + adv.cast}
                                    size="small"
                                    variant="outlined"
                                  />
                                }
                              </Stack>
                            }
                            <Stack sx={{ml: '1.5ch'}}>
                              {
                                adv.descriptions.map((desc, index) =>{
                                  return (
                                    <Typography variant="caption" key={index}>{desc}</Typography>
                                  )
                                })
                              }
                            </Stack>
                          </Box>
                        )
                      })
                      }
                    </Stack> :
                    <></>
                  }
                  
                </Paper> )
              })
            }
          </Stack>
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleOk}>Aceptar</Button>
      </DialogActions>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={snackbarAction}
      >
      <Alert severity="warning">No se pueden agregar más habilidades</Alert>
      </Snackbar>
    </Dialog>
  );
}

SkillSelect.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  selectedRolClassSkills: PropTypes.array.isRequired
};

export default SkillSelect;