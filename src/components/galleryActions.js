import {
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./actionTypes";

export const fetchGalleryRequest = () => ({
  type: FETCH_GALLERY_REQUEST,
});

export const fetchGallerySuccess = (data) => ({
  type: FETCH_GALLERY_SUCCESS,
  payload: data,
});

export const fetchGalleryFailure = (error) => ({
  type: FETCH_GALLERY_FAILURE,
  payload: error,
});
export const addToFavorites = (id) => ({
  type: ADD_TO_FAVORITES,
  payload: { id },
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: { id },
});
export const toggleFavorite = (id) => (dispatch, getState) => {
  const { favorites } = getState().gallery;
  dispatch({
    type: favorites.includes(id) ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES,
    payload: { id },
  });
};
export const fetchGallery = () => {
  return async (dispatch) => {
    dispatch(fetchGalleryRequest());

    try {
      // Simulate an API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();

      dispatch(fetchGallerySuccess(data));
    } catch (error) {
      dispatch(fetchGalleryFailure(error.message));
    }
  };
};
