import store from '../../store';
const { dispatch } = store;
// PACKAGE
import { createApi } from 'unsplash-js';
const unsplash = createApi({ accessKey: process.env.REACT_APP_ACCESSKEY });
// TYPES
import { ADD_RESPONSE_SEARCH_PHOTO } from '../../../constant/TYPES';

const ResponsePhotoActions = {
  loadSearchPhoto: async ({ search }) => {
    const response = await unsplash.search.getPhotos({
      query: `${search}`,
      page: 1,
      perPage: 12,
    });
    return ResponsePhotoActions.addSearchPhoto(response.response.results);
  },
  addSearchPhoto: async (data) => {
    dispatch({
      type: ADD_RESPONSE_SEARCH_PHOTO,
      responsePhoto: data,
    });
  },
};

export default ResponsePhotoActions;
