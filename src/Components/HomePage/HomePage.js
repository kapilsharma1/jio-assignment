import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from "../Header/Header.js"
import { useHistory } from 'react-router';

//import MenuIcon from '@mui/icons-material/Menu';

export default function HomePage() {
    let history = useHistory();
    function handleClick() {
        history.push("/users");
      }
    
    return (

        <div
            style={{
            maxHeight: "100vh",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-evenly"
        }}>

            <Header title={"Home"}></Header>
            <div
                style={{
                    marginTop:"10vh",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Button size="large" onClick={handleClick} variant="contained">Select User to Proceed</Button>
            </div>
        </div>
    );
}
