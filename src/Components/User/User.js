import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import Header from "../Header/Header.js"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router';
import {textAlign} from '@mui/system';

const User = () => {
    const history= useHistory();

    let {id} = useParams();

    const [Users,
        setUsers] = useState({items: []})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((json) => {
            setUsers({items: json, DataisLoaded: true});
        })

    }, [])

    const user_details = Users
        .items
        .filter((val) => (val.id == id));
    console.log(user_details[0]);
    return (

        <div>
            <Header title={"User"}></Header>

            <Grid
                container
                spacing={10}
                style={{
                marginTop: "10vh"
            }}>
                {user_details[0] &&< Grid item lg = {
                    8
                }
                md = {
                    8
                }
                sm = {
                    8
                } > <Card >
                    <CardContent>
                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Name : {user_details[0].name}
                        </Typography>

                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Username : {user_details[0].username}
                        </Typography>
                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Email : {user_details[0].email}
                        </Typography>
                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Phone : {user_details[0].phone}
                        </Typography>
                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Website : {user_details[0].website}
                        </Typography>

                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Company Name : {user_details[0].company.name}
                        </Typography>

                        <Typography
                            sx={{
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                            color="text.secondary"
                            gutterBottom>
                            Address : {user_details[0].address.suite+", "+user_details[0].address.street+", "+user_details[0].address.city+", "+user_details[0].address.zipcode}
                        </Typography>


                    </CardContent>
                </Card> </Grid>}
                <Grid item lg={4} md={4} sm={4}>
                    <Grid container spacing={5}>
                        <Grid item lg={12}>
                            <Button onClick={()=>{history.push("/posts/"+id)}} size="large" variant="contained">posts</Button>
                        </Grid>
                        <Grid item lg={12}>
                            <Button onClick={()=>{history.push("/user/"+id+"/albums")}} size="large" variant="contained">albums</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default User
