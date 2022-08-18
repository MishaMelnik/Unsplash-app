import { combineReducers } from 'redux';

import leaderStoreReducer from '../appStores/getDefaultPhotoStore/getDefaultPhotoStore';
import responsePhotoStoreReducer from '../appStores/getResponsePhotoStore/getResponsePhotoStore';
import getUserPhotoStoreReducer from '../appStores/getUserPhotoStore/getUserPhotoStore';

export default combineReducers({
  getDefaultPhoto: leaderStoreReducer,
  getResponsePhoto: responsePhotoStoreReducer,
  getUserPhoto: getUserPhotoStoreReducer,
});
