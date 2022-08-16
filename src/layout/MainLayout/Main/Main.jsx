import React, { useState } from 'react';
// MATERIAL
import { Button, IconButton, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// SCSS
import './Main.scss';
// IMG
import img from '../../../img/img3.svg';
import Posts from '../Posts/Posts';

const Main = () => {
  const [value, setValue] = useState('');

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
    <div>
      <div className="main">
        <div className="main_container container">
          <div className="container_boxDescription">
            <div className="container_description">
              <Typography className="container_subtitle1" variant="subtitle1">
                Photo of the
                <br />
                Day by
                <br />
                Mary Skrynnikova
              </Typography>
              <Typography className="container_subtitle2" variant="subtitle2" paragraph>
                Mary Skrynnikova
              </Typography>
              <Button className="container_button">Explore All</Button>
            </div>
          </div>
          <div className="container_searchLineBox searchLineBox">
            <div className="searchLineBox_line">
              <form className="searchLineBox_form">
                <InputBase
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="searchLineBox_inputBase"
                  placeholder="Search for high-resolution photos"
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </form>
              <div className="searchLineBox_toolbar toolbar">
                <div>
                  <ul className="toolbar_list">
                    {navbarLinks.map((item) => {
                      return (
                        <li className="toolbar_item" key={item.title}>
                          <Button className="toolbar_link">{item.title}</Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_boxImg">
          <img className="main_img" src={img} alt="img" />
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Main;
