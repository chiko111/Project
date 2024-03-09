// rootReducer.js
import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer, // Ensure the key matches what you use in useSelector
  // other reducers if any
});

export default rootReducer;
