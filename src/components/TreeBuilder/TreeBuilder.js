import React, { useState } from 'react';
import './TreeBuilder.css'

const createArrayWithObjects = (length) => {
    const resultArray = [];
  
    for (let i = 1; i <= length; i++) {
      const value = '*'.repeat(i);
      const obj = { [i]: value };
      resultArray.push(obj);
    }
  
    return resultArray;
  };

const TreeBuilder = () => {
    const [inputValue, setInputValue] = useState('');
    const [treeObjects, setTreeObjects] = useState([]);
    const numberRegex = /^[0-9]+$/;
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (value === '' || numberRegex.test(value)) {
        setInputValue(value);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const length = parseInt(inputValue, 10); // Convert inputValue to an integer
  
      if (!isNaN(length) && length > 0) {
        const newObjects = createArrayWithObjects(length);
        setTreeObjects(newObjects);
      }
      setInputValue('');
    };
  
    return (
      <div className='inputContainer'>
        <div className='inputForm'>
      <form className='formInput' onSubmit={handleSubmit}>
        <label className='label-name'>
          Type number:  
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
        <button type="submit">Submit</button>
        </label>
        <div className='displayTree'>
        {treeObjects.map((object, index) => (
          <div  key={index}>
            {Object.keys(object).map((key) => (
              <span key={key}>{`${object[key]}`}</span>
            ))}
          </div>
        ))}
      </div>
      </form>
      </div>
      </div>
    );
  };
    export default TreeBuilder