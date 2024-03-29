'use client'

import React, { useLayoutEffect, useRef, useState } from 'react';
import {createPortal} from "react-dom"
import { DropdownProps, IValue, Nullbale } from './@types';
import { DropdownOption } from './DropdownOption';

interface ICoordinates{
 width: number;
 left:number;
 top: number
}
const OFFSET = 20;

const Dropdown = <T extends string | number = string>({ items, currentOption, className } : DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<Nullbale<HTMLButtonElement>>(null)
  const [coords, setCoords] = useState<Nullbale<ICoordinates>>(null)
  const [selectedOption, setSelectedOption] = useState<Nullbale<IValue<T>>>(currentOption || null);

  const toggl = () => setIsOpen(!isOpen);

  const onOptionClick = (value: IValue<T>) => {    
    setSelectedOption(value);
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    if (ref.current) {
      const {width, top, left, height} = ref.current.getBoundingClientRect()
      setCoords({
        width,
        top: top + OFFSET + height, left
      })
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-block">
        <button ref={ref} onClick={toggl} className="inline-flex justify-center w-80 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {selectedOption?.label || "Select"}
        </button>
        {isOpen && (
          createPortal(<ul style={{width: coords?.width, top: coords?.top, left: coords?.left}} className="py-1 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {items.map((item) => <DropdownOption key={item.value} item={item} onOptionClick={onOptionClick} />)}
          </ul>, document.body)
         )
        }
      </div>
    </div>
  );
};

export default Dropdown;
