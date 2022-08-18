import { combineReducers } from 'redux';

import defaultPhotoStoreReducer from '../appStores/getDefaultPhotoStore/getDefaultPhotoStore';
import responsePhotoStoreReducer from '../appStores/getResponsePhotoStore/getResponsePhotoStore';
import getUserPhotoStoreReducer from '../appStores/getUserPhotoStore/getUserPhotoStore';

export default combineReducers({
  getDefaultPhoto: defaultPhotoStoreReducer,
  getResponsePhoto: responsePhotoStoreReducer,
  getUserPhoto: getUserPhotoStoreReducer,
});
