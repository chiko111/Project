import {
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "./actionTypes";

const initialState = {
  loading: false,
  gallery: [],
  error: null,
  favorites: []
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_REQUEST:
      return { ...state, loading: true };
    case FETCH_GALLERY_SUCCESS:
      return { ...state, loading: false, gallery: action.payload, error: null };
    case FETCH_GALLERY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default galleryReducer;
