import React, { memo, useEffect, useState } from 'react';
// REDUX
import { useSelector } from 'react-redux';
import getDefaultPhoto from '../../../store/appStores/getDefaultPhotoStore/selectorGetDefaultPhoto';
import ResponsePhotoActions from '../../../store/appStores/getResponsePhotoStore/getResponsePhotoActions';
import DefaultPhotoActions from '../../../store/appStores/getDefaultPhotoStore/getDefaultPhotoActions';
// MATERIAL
import { Box, Button, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// SCSS
import './Main.scss';

const Main = () => {
  const defaultPhoto = useSelector(getDefaultPhoto);
  const [value, setValue] = useState('');
  useEffect(() => {
    DefaultPhotoActions.loadDefaultPhoto();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    ResponsePhotoActions.loadSearchPhoto({
      search: value,
    });
    setValue('');
  };
  const handleUseTage = (tag) => {
    ResponsePhotoActions.loadSearchPhoto({
      search: tag,
    });
  };
  const navbarLinks = [
    { title: 'Trending' },
    { title: 'Nature' },
    { title: 'Travel' },
    { title: 'Animals' },
    { title: 'Food' },
    { title: 'Health' },
    { title: 'Technology' },
    { title: 'Events' },
  ];

  return (
    <Box sx={{ paddingTop: '50px' }}>
      <Box className="main_container container">
        <Box className="container_boxDescription">
          <Box sx={{ padding: '0 40px 0 40px', display: 'flex', flexDirection: 'column' }}>
            <span className="container_subtitle1">
              Photo of the
              <br />
              Day by
              <br />
              {`${defaultPhoto[0]?.name}`}
            </span>
            <Button sx={{ borderRadius: '80px', padding: '1.5vh 5vw' }} variant="contained" color="success">
              Explore All
            </Button>
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 5, top: '76vh', left: '10vw', right: '10vw' }}>
          <Box className="container_line">
            <form onSubmit={handleSubmit} className="container_form">
              <InputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ paddingLeft: '2vw', width: '90%' }}
                placeholder="Search for high-resolution photos"
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </form>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <ul className="toolbar_list">
                  {navbarLinks.map((item) => {
                    return (
                      <li className="toolbar_item" key={item.title}>
                        <span
                          onClick={() => {
                            handleUseTage(item.title);
                          }}
                          className="toolbar_link"
                        >
                          {item.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="container_boxImg">
          <img
            className="container_img"
            src={`${defaultPhoto[0]?.photo}`}
            alt={`${defaultPhoto[0]?.alt_description}`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export const MemoizedMain = memo(Main);
