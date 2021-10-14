import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from "../Header/Header.js"
import { Grid } from '@mui/material';
import UserGrid from '../UserGrid/UserGrid.js';
//import MenuIcon from '@mui/icons-material/Menu';

export default function Users() {
  return (

    <div style={{maxHeight:"100vh",display:'flex',flexDirection:"column",justifyContent:"space-evenly"}}>
<Header title={"Users"}></Header>
    
    <div style={{marginTop:"5vh",display:'flex',flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
    <UserGrid></UserGrid>
    </div>
    </div>
  );
}
