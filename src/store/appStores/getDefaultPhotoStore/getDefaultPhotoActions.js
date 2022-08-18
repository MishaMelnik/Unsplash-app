import store from '../../store';
const { dispatch } = store;
// PACKAGE
import { createApi } from 'unsplash-js';
const unsplash = createApi({ accessKey: process.env.REACT_APP_ACCESSKEY });
// TYPES
import { ADD_DEFAULT_PHOTO } from '../../../constant/TYPES';

const sortedResponse = (data) => {
  const photoData = data.flat(1);
  const resulData = {
    name: photoData[0]?.user?.name,
    description: photoData[0]?.description,
    photo: photoData[0]?.urls?.regular,
    alt_description: photoData[0]?.alt_description,
  };
  // return DefaultPhotoActions.addDefaultPhoto(resulData);
};

const DefaultPhotoActions = {
  loadDefaultPhoto: async () => {
    const response = await unsplash.photos.getRandom({ count: 1 });
    return sortedResponse(response.response);
  },
  addDefaultPhoto: async (data) => {
    dispatch({
      type: ADD_DEFAULT_PHOTO,
      defaultPhoto: data,
    });
  },
};

export default DefaultPhotoActions;
