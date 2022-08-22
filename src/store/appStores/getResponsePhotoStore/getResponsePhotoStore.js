import { ADD_RESPONSE_SEARCH_PHOTO } from '../../../constant/TYPES';

const INITIAL_STATE = {
  responsePhoto: [],
};

const responsePhotoStoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RESPONSE_SEARCH_PHOTO:
      return {
        ...state,
        responsePhoto: [...action.responsePhoto],
      };
    default:
      return state;
  }
};

export default responsePhotoStoreReducer;
