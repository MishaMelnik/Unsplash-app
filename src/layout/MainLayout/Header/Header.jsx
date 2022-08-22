import React, { useState } from 'react';
// MATERIAL-UI
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import SearchIcon from '@mui/icons-material/Search';
// SCSS
import './Header.scss';

const navbarLinks = [{ title: 'Home' }, { title: 'Featured collections' }, { title: 'My profile' }];

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: '10', backgroundColor: 'white', boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        {menuClicked ? (
          <IconButton className="container_menu" onClick={toggleMenuClick}>
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton onClick={toggleMenuClick}>
            <CloseIcon className="container_menu" />
          </IconButton>
        )}
        <ul className={menuClicked ? 'container_list' : 'container_list container_list--active'}>
          {navbarLinks.map((item) => {
            return (
              <li className="container_item" key={item.title}>
                <span className="container_link">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <IconButton>
          <PersonOutlineRoundedIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
