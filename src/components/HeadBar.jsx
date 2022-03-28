import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

import { Link } from 'react-router-dom';

export function HeadBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>
        <ListItem button key='newchar'>
          <ListItemIcon>
            <CottageRoundedIcon />   
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </Link>

      <Divider />

      <Link to={'character'} style={{color: 'white', textDecoration: 'none'}}>
        <ListItem button key='newchar'>
          <ListItemIcon>
            <ReceiptLongRoundedIcon />  
          </ListItemIcon>
          <ListItemText primary='Character' />
        </ListItem>
      </Link>

      <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>
        <ListItem button key='newchar'>
          <ListItemIcon>
            <AddCircleOutlineRoundedIcon />  
          </ListItemIcon>
          <ListItemText primary='New Character' />
        </ListItem>
      </Link>

      <Link to={'/'} style={{color: 'white', textDecoration: 'none'}}>
        <ListItem button key='newchar'>
          <ListItemIcon>
            <MenuBookRoundedIcon />  
          </ListItemIcon>
          <ListItemText primary='Rol System' />
        </ListItem>
      </Link>
    </List>

    <Divider />
  </Box>
  );
  
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer('left', true)}>
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Character Sheet
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </>
  );
}