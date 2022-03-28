import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';

function SkillSelect(props) {
  const { onClose, value: valueProp, open, rolClassSkills, selectedRolClassSkills, ...other } = props;
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
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="lg"
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
          {
            rolClassSkills.map((skill, index) => {
              var info = '';
              if(skill.cost === 0 && skill.duration === 0) {
                info = 'pasiva';
              } else {
                info = 'costo: ' + skill.cost + ', duración: ' + skill.duration;
              }
              return <Paper
              
              sx={{
                px: '1ch',
                my: '.5ch',
                py: '1ch',
              }}
              >
                <FormControlLabel
                  value={index}
                  key={index}
                  control={<Radio />}
                  label={skill.name}
                  disabled={selectedRolClassSkills.includes(index)}
                />
                <Typography sx={selectedRolClassSkills.includes(index) ? {color: 'gray'}:{}}>
                  {skill.description}
                </Typography>
                <Typography sx={{color: 'gray', mt: '1ch'}}>
                  {!selectedRolClassSkills.includes(index) ? info : ''}
                </Typography>
                
              </Paper>
            })
          }
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleOk}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
}

SkillSelect.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  rolClassSkills: PropTypes.array.isRequired,
  selectedRolClassSkills: PropTypes.array.isRequired
};

export default SkillSelect;