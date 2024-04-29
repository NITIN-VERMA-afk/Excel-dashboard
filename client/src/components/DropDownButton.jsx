import React, { useState } from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      <button
        className=" text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600"
        onClick={toggleDropdown}
      >
        <FaArrowAltCircleDown />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
          <button
            className="block w-full text-left px-4 py-2 "
            onClick={() => handleOptionClick("Option 1")}
          >
            Excel
          </button>
          <button
            className="block w-full text-left px-4 py-2 "
            onClick={() => handleOptionClick("Option 2")}
          >
            pdf
          </button>
          <button
            className="block w-full text-left px-4 py-2"
            onClick={() => handleOptionClick("Option 3")}
          >
            csv
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
