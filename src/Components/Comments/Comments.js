import React from 'react'
import Header from "../Header/Header.js"
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';

const Comments = ({id}) => {
    const [PostCommentsData,
        setPostCommentsData] = useState({items: []})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json()).then((json) => {
            const postComments = json.filter((comment) => (comment.postId == id))
            setPostCommentsData({items: postComments, DataisLoaded: true});
        })

    }, [])
    return (
        <div>
            <Box sx={{
                flexGrow: 1
            }}>
                <Grid container spacing={2} alignItems="stretch">

                    {PostCommentsData.items && PostCommentsData
                        .items
                        .map((comment) => (
                            <Grid lg={12} item>
                                <Card
                                    style={{
                                    backgroundColor: "lightblue"
                                }}>
                                    <CardContent>
                                        <Typography
                                            sx={{
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                            color="text.secondary"
                                            gutterBottom>
                                            By : {comment.name}
                                            ({comment.email})
                                        </Typography>
                                        <Typography
                                            sx={{
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                            color="text.secondary"
                                            gutterBottom>
                                            Comment Body : {comment.body}
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

export default Comments
