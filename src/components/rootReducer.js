import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';
import ticTacReducer from './ticTacReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer, 
  game: ticTacReducer
  // other reducers if any
});

export default rootReducer;
