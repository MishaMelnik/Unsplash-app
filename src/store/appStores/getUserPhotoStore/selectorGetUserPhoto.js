import { createSelector } from 'reselect';

const getUserPhoto = createSelector([(state) => state.getUserPhoto.userPhoto], (data) => data);

export default getUserPhoto;
