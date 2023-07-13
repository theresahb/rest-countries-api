import React, { useState } from 'react';

const DropdownMenu = ({selectRegion, setSelectRegion}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSelectRegion(option === 'Filter by Region' ? '' : option); // Set the region as an empty string when 'Filter by Region' is selected
  };

  return (
    <div className="dropdown flex">
      <div className="dropdown-header flex" onClick={toggleDropdown}>
        <p>{!selectedOption ? 'Filter by Region' : selectedOption}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 9l6 6l6 -6"></path>
        </svg>
      </div>
      {isOpen && 
        <div className="dropdown-options flex" >
          <p className="dropdown-option" onClick={() => handleOptionClick('Filter by Region')}>
            Filter by Region
          </p>
          <p className="dropdown-option" onClick={() => handleOptionClick('Africa')} >
            Africa
          </p>
          <p className="dropdown-option" onClick={() => handleOptionClick('Americas')} >
            Americas
          </p>
          <p className="dropdown-option" onClick={() => handleOptionClick('Asia')} >
            Asia
          </p>
          <p className="dropdown-option" onClick={() => handleOptionClick('Europe')} >
            Europe
          </p>
          <p className="dropdown-option" onClick={() => handleOptionClick('Oceania')} >
            Oceania
          </p>
        </div>
      }
    </div>
  );
};

export default DropdownMenu;
