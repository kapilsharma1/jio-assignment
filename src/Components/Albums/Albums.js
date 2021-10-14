import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import Header from "../Header/Header.js"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import UserGrid from '../UserGrid/UserGrid.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import { useHistory } from 'react-router';
const Albums = () => {
    const history = useHistory();
    let {userid} = useParams();
    const [AllUsersAlbums,
        setAllUsersAlbums] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums").then((res) => res.json()).then((json) => {
            
            const userAlbums= json.filter((user)=>(user.userId==userid));
            setAllUsersAlbums({items: userAlbums, DataisLoaded: true});
        })

    }, [])
   

    return (
        <div>
            <Header title={"Albums"}></Header>

            <Box sx={{
            flexGrow: 1,
            marginTop:"5vh"
        }}>
            <Grid container spacing={2} alignItems="stretch">
  
                {AllUsersAlbums.items&&AllUsersAlbums.items
                    .map((album) => (
                        <Grid lg={4} item alignItems="stretch">
                            <Card 
                            style={{backgroundColor:"lightgray",height:"100%"}}
                               onClick={()=>{history.push("/album/"+album.id+"/photos")}}
                               >
                                <CardContent>
                                    <Typography
                                        sx={{
                                        fontSize: 16,
                                        fontWeight:"bold",
                                        textAlign:"center"
                                    }}
                                        color="text.secondary"
                                        gutterBottom>
                                        Album Title : {album.title}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>
            
        </div>
    )
}

export default Albums
