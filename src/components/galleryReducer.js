// galleryReducer.js
import { FETCH_GALLERY_REQUEST, FETCH_GALLERY_SUCCESS, FETCH_GALLERY_FAILURE } from './actionTypes';

const initialState = {
  loading: false,
  gallery: [],
  error: null,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return { ...state, loading: true };
    case FETCH_GALLERY_SUCCESS:
        console.log(`Fetch success ${action.payload}`);
      return { ...state, loading: false, gallery: action.payload, error: null };
    case FETCH_GALLERY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default galleryReducer;
