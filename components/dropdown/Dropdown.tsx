'use client'

import React, { useState } from 'react';

type DropdownProps = {
  items: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggl = () => setIsOpen(!isOpen);

  const onOptionClick = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-block">
        <button onClick={toggl} className="inline-flex justify-center w-80 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {selectedOption || "Select"}
        </button>
        {isOpen && (
          <ul className="py-1 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {items.map((item, i) => (
              <li key={i} onClick={onOptionClick(item)} className="flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
