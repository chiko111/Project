import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';
import todoReducer from './ReduxTODO/components/reducer';
import ticTacReducer from './ticTacReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer,
  game: ticTacReducer,
  todoRd: todoReducer
  // other reducers if any
});

export default rootReducer;
