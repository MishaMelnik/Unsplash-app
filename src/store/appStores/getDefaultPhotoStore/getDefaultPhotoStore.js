import { ADD_DEFAULT_PHOTO } from '../../../constant/TYPES';

const INITIAL_STATE = {
  defaultPhoto: [],
};

const defaultPhotoStoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DEFAULT_PHOTO:
      return {
        ...state,
        defaultPhoto: [action.defaultPhoto],
      };
    default:
      return state;
  }
};

export default defaultPhotoStoreReducer;
