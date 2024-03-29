import Dropdown from "@/components/dropdown/Dropdown";

export default function Home() {

  const items = [{label: 'First', value: 1}, {label: 'First', value: 1}, {label: 'First', value: 1}]

  return (
    <Dropdown<number> items={items}/>
  )
}
