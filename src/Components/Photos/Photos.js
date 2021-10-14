import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Header from "../Header/Header.js"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Grid} from '@mui/material';
import UserGrid from '../UserGrid/UserGrid.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import {useHistory} from 'react-router';
import {CardMedia} from '@mui/material';
import Modal from '@mui/material/Modal';
import ImagePopup from '../ImagePopup/ImagePopup.js';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const UserPosts = () => {
    const history = useHistory();
    let {albumid} = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [AlbumPhotos,
        setAlbumPhotos] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => res.json()).then((json) => {

            const photos = json.filter((album) => (album.albumId == albumid));
            setAlbumPhotos({items: photos, DataisLoaded: true});
        })

    }, [])

    return (
        <div>
            <Header title={"Photos"}></Header>
            <Box
                sx={{
                flexGrow: 1,
                marginTop: "5vh"
            }}>
                <Grid container spacing={2} alignItems="stretch">

                    {AlbumPhotos.items && AlbumPhotos
                        .items
                        .map((photo) => (
                            <Grid lg={12} item>
                                <Card
                                    style={{
                                    backgroundColor: "lightgray",
                                    display: "flex"
                                }}>
                                    {/* <CardMedia
                                    onClick={handleOpen}
                                        component="img"
                                        sx={{
                                        width: 151
                                    }}
                                        image={photo.thumbnailUrl}
                                        alt="thumbnail"/> */}
                                        <ImagePopup imageUrl={photo.url} thumbnailUrl={photo.thumbnailUrl}></ImagePopup>
                                    <CardContent>
                                        <Typography
                                            sx={{
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                            color="text.secondary"
                                            gutterBottom>
                                            Photo Title : {photo.title}
                                        </Typography>

                                    </CardContent>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description">
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{
                                                mt: 2
                                            }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Box>

        </div>
    )
}

export default UserPosts
