export const FETCH_GALLERY_REQUEST = "FETCH_GALLERY_REQUEST";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_FAILURE = "FETCH_GALLERY_FAILURE";

export const fetchGallery = () => async (dispatch) => {
  dispatch({ type: FETCH_GALLERY_REQUEST });
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos)"
    );
    const data = await response.json();
    dispatch({ type: FETCH_GALLERY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_GALLERY_FAILURE, payload: error.message });
  }
};
