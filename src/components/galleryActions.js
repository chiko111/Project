// galleryActions.js
import { FETCH_GALLERY_REQUEST, FETCH_GALLERY_SUCCESS, FETCH_GALLERY_FAILURE } from './actionTypes';

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

export const fetchGallery = () => {
  return async (dispatch) => {
    dispatch(fetchGalleryRequest());

    try {
      // Simulate an API call
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();

      dispatch(fetchGallerySuccess(data));
    } catch (error) {
      dispatch(fetchGalleryFailure(error.message));
    }
  };
};
