import { createSelector } from 'reselect';

const getDefaultPhoto = createSelector([(state) => state.getDefaultPhoto.defaultPhoto], (data) => data);

export default getDefaultPhoto;
