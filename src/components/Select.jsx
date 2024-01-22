import React, { useState } from 'react';
import './Select.css';

const Select = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
        <label htmlFor="">Davlat</label>
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Davlatlar'}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
