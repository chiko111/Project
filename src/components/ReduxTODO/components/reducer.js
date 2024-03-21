const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodoItem = {
        text: action.payload.text,
        read: action.payload.read || false,
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodoItem],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_TODO_READ_STATUS":
      const updatedTodoList = [...state.todoList];
      updatedTodoList[action.payload] = {
        ...updatedTodoList[action.payload],
        read: !updatedTodoList[action.payload].read,
      };
      return {
        ...state,
        todoList: updatedTodoList,
      };
    case "LOAD_TODO_LIST":
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
