export type Nullbale<T> = T | null

export interface IValue<T>{
  label: string;
  value: T
}

export interface DropdownProps<T>{
  className?: string
  currentOption?: IValue<T>
  items: Array<IValue<T>>;
};