import { createSelector } from 'reselect';

const getResponsePhoto = createSelector([(state) => state.getResponsePhoto.responsePhoto], (data) => data);

export default getResponsePhoto;
