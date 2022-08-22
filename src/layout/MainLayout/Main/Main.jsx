import React, { memo, useEffect, useState } from 'react';
// COMPONENTS
import { MemoizedPosts } from '../Posts/Posts';
// REDUX
import { useSelector } from 'react-redux';
import getDefaultPhoto from '../../../store/appStores/getDefaultPhotoStore/selectorGetDefaultPhoto';
// MATERIAL
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// SCSS
import './Main.scss';
import ResponsePhotoActions from '../../../store/appStores/getResponsePhotoStore/getResponsePhotoActions';
import DefaultPhotoActions from '../../../store/appStores/getDefaultPhotoStore/getDefaultPhotoActions';

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
                {`${defaultPhoto[0]?.name}`}
              </span>
              <button className="container_button">Explore All</button>
            </div>
          </div>
          <div className="container_searchLineBox">
            <div className="container_line">
              <form onSubmit={handleSubmit} className="container_form">
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
                </div>
              </div>
            </div>
          </div>
          <div className="container_boxImg">
            <img
              className="container_img"
              src={`${defaultPhoto[0]?.photo}`}
              alt={`${defaultPhoto[0]?.alt_description}`}
            />
          </div>
        </div>
      </div>
      <MemoizedPosts />
    </div>
  );
};

export const MemoizedMain = memo(Main);
