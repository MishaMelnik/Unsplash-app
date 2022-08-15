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
    <AppBar>
      <Toolbar className="header">
        {menuClicked ? (
          <IconButton onClick={toggleMenuClick}>
            <MenuIcon className="header_menu" />
          </IconButton>
        ) : (
          <IconButton onClick={toggleMenuClick}>
            <CloseIcon className="header_menu" />
          </IconButton>
        )}
        <aside>
          <ul className={menuClicked ? 'header_list' : 'header_list header_list--active'}>
            {navbarLinks.map((item) => {
              return (
                <li className="header_item" key={item.title}>
                  <span className="header_link">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </aside>
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
