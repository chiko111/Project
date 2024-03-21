export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (index) => ({
  type: "DELETE_TODO",
  payload: index,
});

export const loadTodoList = (todoList) => ({
  type: "LOAD_TODO_LIST",
  payload: todoList,
});
export const toggleTodoReadStatus = (index) => ({
  type: "TOGGLE_TODO_READ_STATUS",
  payload: index,
});
