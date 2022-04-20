import React from 'react';
import { rolClasses } from '../data/Data.js';
import { 
  Box, 
  Paper, 
  Typography, 
  Button,
  IconButton, 
  Tooltip, 
  Dialog, 
  DialogContent, 
  DialogActions, 
  DialogContentText, 
  DialogTitle,
  Stack,
  List,
  ListItem,
  ListItemText,
  Chip,
  Snackbar,
  Alert
} from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CloseIcon from '@mui/icons-material/Close';

function Skill({rolClass, skillIndex, reducePod, canLevelUp, levelUpSkill }) {
  const skill = rolClasses[rolClass].skills[skillIndex[0]];

  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickUseSkill = () => {
    reducePod(skill.advance[skillIndex[1] - 1].cost);
  };

  const handleSkillLevelUpClick = () => {
    //no max level
    if(!skillIndex[1] < skill.advance.count) {
      console.log('max level')
      return;
    }
    //can level up
    if(canLevelUp()) {
      //level up
      levelUpSkill(skillIndex[0]);
      setOpen(false);
    } else {
      
      setSnackOpen(true);
    }
  }

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

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
        py: '1ch',
        px: '1.5ch',
        mt: '1ch',
      }}>
        <Stack 
          direction={{xs: 'column', sm: 'row'}} 
          alignItems={{xs: 'start', sm: 'center'}}
          justifyContent="space-between"
        >
          <Typography>
            {skill.name + ' ' + 'I'.repeat(skillIndex[1])}
          </Typography>
          <Stack
           direction="row" 
           alignItems="center"
          >
            <Tooltip title="infomación" arrow>
              <IconButton aria-label="info" color="primary" onClick={handleClickOpen}>
                <InfoRoundedIcon />
              </IconButton>        
            </Tooltip>
            
            <Tooltip title={skill.type === 'Pasiva' ? 'pasiva' : 'Usar habilidad: -' + skill.advance[skillIndex[1] - 1].cost + ' POD'} arrow>
              <div>
                <IconButton aria-label="info" color="primary" onClick={handleClickUseSkill} disabled={skill.type === 'Pasiva'}>
                  <DoubleArrowRoundedIcon />
                </IconButton> 
              </div>
            </Tooltip>
          </Stack>
        </Stack>
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="skill-dialog-title"
        aria-describedby="skill-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="skill-dialog-title">
          {skill.name + ' ' + 'I'.repeat(skillIndex[1])}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="skill-dialog-description">
            {
              <Box>
                <Typography>
                  {skill.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  sx={{
                    mt: '1ch'
                  }}
                >
                  <Chip
                    label={skill.type}
                    size="small" 
                    color="primary"
                  />
                  <Chip
                    label={skill.action}
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                </Stack>
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
                </Stack>
              </Box>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSkillLevelUpClick}>
            Subir nivel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={snackbarAction}
      >
      <Alert severity="warning">No se puede subir de nivel</Alert>
      </Snackbar>
    </Box>
  )
}

export default Skill