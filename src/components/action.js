import { FETCH_GALLERY_REQUEST, FETCH_GALLERY_SUCCESS, FETCH_GALLERY_FAILURE } from './actionTypes';

export const fetchGallery = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_GALLERY_REQUEST });
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_GALLERY_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: FETCH_GALLERY_FAILURE, payload: error }));
  };
};
