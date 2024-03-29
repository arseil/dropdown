import { IValue } from "./@types"

interface DropdownOptionProps<T>{
  onOptionClick: (item: IValue<T>) => void
  item: IValue<T>
}

export const DropdownOption =<T,>({onOptionClick, item}: DropdownOptionProps<T>) => {
  
  return (
    <li onClick={() => onOptionClick(item)} className="flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">
          {item.label}
    </li>
  )
}