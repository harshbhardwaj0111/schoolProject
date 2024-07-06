import React, { useState } from 'react';

const Dropdownmy = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  const handleSelectionChange = (e) => {
    const value = parseInt(e.target.value);
    setSelectedValue(value);
    setInputCount(value);
  };

  return (
    <div>
      <select onChange={handleSelectionChange}>
        <option value="0">Select a number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        {/* Add more options as needed */}
      </select>

      {[...Array(inputCount)].map((_, index) => (
        <div key={index}>
          <select>
            <option value="0">Select an option</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            {/* Add more options as needed */}
          </select>
          <input type="text" placeholder={`Text Field ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Dropdownmy;
