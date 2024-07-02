// TODO.js
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleTodoReadStatus
} from '../ReduxTODO/components/actions';

//!Checkbox with done on every element
// import "./TODO.css";
const todoSelector = state => state.todoRd.todoList;

const ReduxTODO = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector(todoSelector);

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      dispatch(addTodo({ text: inputValue, read: false }));
      setInputValue('');
    }
  };
  const handleToggleRead = i => {
    dispatch(toggleTodoReadStatus(i));
  };

  return (
    <div className="inputContainer">
      <div className="inputForm">
        <form className="formInput" onSubmit={handleSubmit}>
          <label className="label-name">
            Type text:
            <input
              type="text"
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
            <button type="submit">Submit</button>
          </label>
          <div className="row">
            {todoList.map((todo, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={todo.read}
                  onChange={() => handleToggleRead(index)}
                />
                <p>
                  {index + 1}. {todo.text}
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(deleteTodo(index))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReduxTODO;
