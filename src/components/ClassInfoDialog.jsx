import React from 'react';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { rolClasses, rolWeaponTypes, rolArmorTypes } from '../data/Data';

function ClassInfoDialog({open, rolClass, handleClose}) {
  if(!rolClass) return<></>;

  const handleDialogClose = () => {
    handleClose();
  }

  const c = rolClasses[rolClass];

  return (
    <Dialog
      open={open}
      
      keepMounted
      onClose={handleDialogClose}
      aria-describedby="class-info-slide-dialog"
    >
      <DialogTitle>Información de la clase</DialogTitle>
      <DialogContent>
        <Typography variant="h5">
          {c.name}
        </Typography>
        <DialogContentText id="class-info-slide-dialog">
          {c.description}
        </DialogContentText>
        <br />
        <Typography>
          <strong>Tipo de armas compatibles</strong>
        </Typography>
        <Stack direction="row" spacing={1}>
          {
            c.weapontypes.map((w, index) => {
              return <Chip key={index} label={rolWeaponTypes[w]} />
            })
          }
        </Stack>
        <br />
        <Typography>
          <strong>Tipo de armaduras compatibles</strong>
        </Typography>
        <Stack direction="row" spacing={1}>
          {
            c.armortypes.map((w, index) => {
              return <Chip key={index} label={rolArmorTypes[w]} />
            })
          }
        </Stack>
        <br />
        <Typography>
          <strong>Avance por nivel</strong>
        </Typography>
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
                          return <TableCell align="right" key={index}>{c.advance[index].mods[att]}</TableCell>
                        })
                      }
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ClassInfoDialog