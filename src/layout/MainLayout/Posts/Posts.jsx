import React, { memo, useState } from 'react';
// COMPONENTS
import ModalCase from './ModalCase/ModalCase';
// REDUX
import { useSelector } from 'react-redux';
import getResponsePhoto from '../../../store/appStores/getResponsePhotoStore/selectorGetResponsePhoto';
// REACT-ROUTER-DOM
import { Link } from 'react-router-dom';
// MATERIAL
import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
// PACKAGE
import { format } from 'date-fns';

const Posts = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState();

  const handleOpen = (idx) => {
    setIndex(idx);
    setOpen(true);
  };
  const post = useSelector(getResponsePhoto);

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px', marginBottom: '40px' }}>
      <Grid container spacing={3}>
        {post?.map((item, idx) => (
          <Grid sx={{ display: 'flex' }} item key={item?.id} xs={12} sm={6} md={3}>
            <Card sx={{ alignItems: 'stretch', width: '100%' }}>
              <Box onClick={() => handleOpen(idx)}>
                <Link key={Math.random()} to={`/modal/${item?.id}`}>
                  <CardMedia image={item?.urls?.regular} sx={{ paddingTop: '35vh', cursor: 'pointer' }} />
                </Link>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item?.user?.name}
                  </Typography>
                  <Typography paragraph color="darkgrey">
                    {format(new Date(item?.created_at), 'E MMM HH:mm y')}
                  </Typography>
                </CardContent>
              </Box>
              <Divider />
              <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
                <Box paddingRight="1vw">
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <span>{item?.likes}</span>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <ModalCase open={open} setOpen={setOpen} post={post[index]} />
      </Grid>
    </Container>
  );
};

export const MemoizedPosts = memo(Posts);
