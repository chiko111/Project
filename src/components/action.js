import {
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from "./actionTypes";

export const fetchGallery = () => {
  console.log("fetch return");
  return (dispatch) => {
    dispatch({ type: FETCH_GALLERY_REQUEST });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const chunks = [];
        for (let i = 0; i < data.length; i += 20) {
          chunks.push(data.slice(i, i + 20));
        }
        dispatch({ type: FETCH_GALLERY_SUCCESS, payload: chunks.slice(0, 5) });
      })
      .catch((error) =>
        dispatch({ type: FETCH_GALLERY_FAILURE, payload: error })
      );
  };
};
export const playMove = (nextSquares) => ({
  type: "PLAY_MOVE",
  payload: nextSquares,
});

export const jumpToMove = (nextMove) => ({
  type: "JUMP_TO_MOVE",
  payload: nextMove,
});
