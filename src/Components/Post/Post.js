import React from 'react'
import Header from "../Header/Header.js"
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Comments from '../Comments/Comments.js';
import { Suspense } from 'react';

const LazyComments = React.lazy(() => import('../Comments/Comments.js'));
const Post = () => {
    let {id} = useParams();

    const [PostData,
        setPostData] = useState({items: []})

       
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id).then((res) => res.json()).then((json) => {
            setPostData({items: json, DataisLoaded: true});
        })

    }, [])
    return (
        <div>
            <Header title="Post"></Header>

            <Card
                style={{
                backgroundColor: "lightgray",
               marginTop:"5vh",
            }}
            >
                <CardContent>
                    <Typography
                        sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                        color="text.secondary"
                        gutterBottom>
                        Title : {PostData.items.title}
                    </Typography>

                    <Typography
                        sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                        color="text.secondary"
                        gutterBottom>
                        Body : {PostData.items.body}
                    </Typography>

                </CardContent>
            </Card>


                        <Card
                style={{
                    marginTop:"10vh",
                backgroundColor: "gray"
            }}
            >
                <CardContent>
                    <Typography
                        sx={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "left"
                    }}
                        color="text.secondary"
                        gutterBottom>
                       COMMENTS:
                    </Typography>

                </CardContent>
            </Card>
            <Suspense fallback={<div>Loading...</div>}>
            <LazyComments id={id}></LazyComments>
            </Suspense>



        </div>
    )
}

export default Post
