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
const UserPosts = () => {
    const history = useHistory();
    let {id} = useParams();
    const [AllUsersPosts,
        setAllUsersPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((json) => {
            
            const userPosts= json.filter((user)=>(user.userId==id));
            setAllUsersPosts({items: userPosts, DataisLoaded: true});
        })

    }, [])
   

    return (
        <div>
            <Header title={"Posts"}></Header>

            <Box sx={{
            flexGrow: 1,
            marginTop:"5vh"
        }}>
            <Grid container spacing={2} alignItems="stretch">
  
                {AllUsersPosts.items&&AllUsersPosts.items
                    .map((post) => (
                        <Grid lg={12} item>
                            <Card 
                            style={{backgroundColor:"lightgray"}}
                               onClick={()=>{history.push("/post/"+post.id)}}
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
                                        Title : {post.title}
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

export default UserPosts
