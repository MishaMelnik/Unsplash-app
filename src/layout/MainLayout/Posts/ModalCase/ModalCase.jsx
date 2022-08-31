import React from 'react';
// REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom';
// MATERIAL
import { Avatar, Box, Card, CardContent, CardMedia, Modal, Typography } from '@mui/material';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// SCSS
import './ModalCase.scss';
const ModalCase = ({ open, setOpen, post }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            padding: '3vh 2vw',
            margin: '4vh 4vw',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                marginTop: '5px',
                height: '500px',
                overflowY: 'scroll',
              }}
            >
              <Box sx={{ height: '460px', width: '36vw', marginRight: '10px' }}>
                <CardMedia
                  image={post?.urls?.regular}
                  sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  component="img"
                  alt="sdfdfsdf"
                />
              </Box>
              <CardContent
                sx={{
                  width: '92%',
                }}
              >
                <Box display="flex" justifyContent="space-between" alignContent="center">
                  <Box display="flex" color="gray" gap={1} justifyContent="center" alignContent="center">
                    <ArrowCircleDownOutlinedIcon />
                    {post?.user?.total_collections}
                  </Box>
                  <Box display="flex" color="gray" gap={1} justifyContent="center" alignContent="center">
                    <RemoveRedEyeOutlinedIcon />
                    {post?.user?.total_photos}
                  </Box>
                  <Box display="flex" color="gray" gap={1} justifyContent="center" alignContent="center">
                    <FavoriteBorderOutlinedIcon />
                    {post?.likes}
                  </Box>
                </Box>
              </CardContent>
              <CardContent
                sx={{
                  width: '100%',
                  maxWidth: '92.5%',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '20px',
                  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.5)',
                }}
              >
                <Box>
                  <Avatar
                    alt={post?.alt_description}
                    src={post?.user?.profile_image?.medium}
                    sx={{ width: '70px', height: '70px', margin: '10px 20px 0 0' }}
                  />
                </Box>
                <Box sx={{ marginTop: '20px' }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }} gutterBottom>
                    {post?.user?.name}
                  </Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }} paragraph>
                    {post?.user?.username}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Modal>
    </>
  );
};

export default ModalCase;
