const initialState = {
    history: [Array(9).fill(null)],
    currentMove: 0,
  };
  
  const ticTacReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLAY_MOVE':
        return {
          ...state,
          history: [...state.history.slice(0, state.currentMove + 1), action.payload],
          currentMove: state.history.length,
        };
      case 'JUMP_TO_MOVE':
        return {
          ...state,
          currentMove: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ticTacReducer;