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
              <span className="container_subtitle1">
                Photo of the
                <br />
                Day by
                <br />
                Mary Skrynnikova
              </span>
              <span className="container_subtitle2">Mary Skrynnikova</span>
              <button className="container_button">Explore All</button>
            </div>
          </div>
          <div className="container_searchLineBox">
            <div className="container_line">
              <form className="container_form">
                <InputBase
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="container_inputBase"
                  placeholder="Search for high-resolution photos"
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </form>
              <div className="container_toolbar toolbar">
                <div>
                  <ul className="toolbar_list">
                    {navbarLinks.map((item) => {
                      return (
                        <li className="toolbar_item" key={item.title}>
                          <span className="toolbar_link">{item.title}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container_boxImg">
            <img className="container_img" src={img} alt="img" />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Main;
