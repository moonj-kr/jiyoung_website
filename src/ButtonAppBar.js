import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import logo from './logo.png';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

        <CardMedia
        component="img"
        image={logo}
        style={{height:30, width:30}}
      />
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" >Work</Button>

          <Button 
            color="inherit" >About
          </Button>

          <Button color="inherit">Resume</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}