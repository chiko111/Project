import { combineReducers } from "redux";
import galleryReducer from "./galleryReducer";
import ticTacReducer from "./ticTacReducer";
import todoReducer from "./ReduxTODO/components/reducer";

const rootReducer = combineReducers({
  gallery: galleryReducer,
  game: ticTacReducer,
  todoRd: todoReducer,
  // other reducers if any
});

export default rootReducer;
