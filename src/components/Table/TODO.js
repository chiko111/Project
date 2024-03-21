import React, { useEffect, useState } from "react";
import "./TODO.css";

const TODO = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      setTodoList((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (indexToDelete) => {
    console.log(todoList);
    console.log(indexToDelete);
    const newTodoList = todoList.filter((_, index) => indexToDelete !== index);
    console.log(newTodoList);
    setTodoList(newTodoList);
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
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Submit</button>
          </label>
          <div className="row">
            {todoList.map((todo, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {todo}
                </p>
                <button type="button" onClick={() => handleDelete(index)}>
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

export default TODO;
