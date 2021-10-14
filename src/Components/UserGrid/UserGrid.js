import * as React from 'react';
import {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

export default function UserGrid() {
    const history = useHistory();

    const handleClick=()=>{
       

    }

    const [Users,
        setUsers] = useState({items: []})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((json) => {
            setUsers({items: json, DataisLoaded: true});
        })
        
    }, [])
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <Grid container spacing={2} alignItems="stretch">
            {console.log("users", Users.items)}
                {Users
                    .items
                    .map((user) => (
                        <Grid lg={4} item>
                            <Card 
                            style={{backgroundColor:"lightgray"}}
                               onClick={()=>{history.push("/user/"+user.id)}}>
                                <CardContent>
                                    <Typography
                                        sx={{
                                        fontSize: 16,
                                        fontWeight:"bold"
                                    }}
                                        color="text.secondary"
                                        gutterBottom>
                                        Name : {user.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                        mb: 1.5
                                    }}
                                        color="text.secondary">
                                        Username : {user.username}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>

    );
}
