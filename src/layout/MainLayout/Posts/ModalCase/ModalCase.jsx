import React from 'react';
// MATERIAL
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// SCSS
import './ModalCase.scss';
// IMG
import img from '../../../../img/Avatar.png';
import img2 from '../../../../img/modal_img_2.png';

const ModalCase = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className="modal_card">
          <div className="modal_card_icon">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="modal_card_scroll">
            <div>
              <CardMedia image={img2} className="modal_cardMedia" alt="sdfdfsdf" />
              <CardContent>
                <Grid container columns={3}>
                  <Grid item xs={1} display="flex" color="gray" justifyContent="center" alignContent="center">
                    <Grid display="flex" width={130} justifyContent="space-between" alignContent="space-between">
                      <ArrowCircleDownOutlinedIcon />
                      {/* {picture?.user?.total_collections}*/}
                      <Typography>Downloads</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} display="flex" color="gray" justifyContent="center" alignContent="center">
                    <Grid display="flex" width={90} justifyContent="space-between" alignContent="space-between">
                      <RemoveRedEyeOutlinedIcon />
                      {/* {picture?.user?.total_photos}*/}
                      <Typography>Views</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} display="flex" color="gray" justifyContent="center" alignContent="center">
                    <Grid display="flex" width={100} justifyContent="space-between" alignContent="space-between">
                      <FavoriteBorderOutlinedIcon />
                      322
                      <Typography>Likes</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
            <CardContent>
              <Container maxWidth="xl">
                <Grid container spacing={2}>
                  <Grid item>
                    <Grid item xs={6}>
                      <Grid item paddingRight={6}>
                        <Avatar alt="avatar" src={img} sx={{ width: 140, height: 140 }} />
                      </Grid>
                    </Grid>
                    <Grid xs={6} item>
                      <Grid item>
                        <Typography fontSize={25} gutterBottom>
                          sfsfsf
                        </Typography>
                        <Typography paragraph fontSize={15}>
                          sfdsdfds
                        </Typography>
                        <Grid item display="flex">
                          <HomeOutlinedIcon />
                          <Typography color="darkgrey" paragraph gutterBottom>
                            afdsfsd
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={4} marginLeft={3} display="flex">
                    <Grid item marginRight={1}>
                      <Typography
                        color="darkgrey"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={19}
                        gutterBottom
                      >
                        About
                      </Typography>
                    </Grid>
                    <Grid item color="darkgrey" borderLeft={3} justifyContent="center" alignItems="center">
                      <Typography>Description:sdfsdfsdf</Typography>
                      <Typography>Location:sdfsdfdsfds</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
            <CardActions className="modal_cardActions">
              <Container display="flex" maxWidth="xl">
                <Grid container>
                  <Grid item>
                    <Typography display="flex" justifyContent="center" alignContent="center" width="80vw" fontSize={18}>
                      Downloads
                    </Typography>
                    <Typography
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      color="darkgrey"
                      width="80vw"
                      fontSize={13}
                    >
                      during 30 days
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography display="flex" justifyContent="center" alignContent="center" width="80vw" fontSize={18}>
                      Likes
                    </Typography>
                    <Typography
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      color="darkgrey"
                      width="80vw"
                      fontSize={13}
                    >
                      during 30 days
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </CardActions>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default ModalCase;
