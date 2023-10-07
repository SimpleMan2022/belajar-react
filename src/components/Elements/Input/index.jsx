import Input from "./Input"
import Label from "./label"

const InputForm = (props) => {
  const { label, name, type, placeholder, id } = props
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input placeholder={placeholder} name={name} id={id} type={type} />
    </div>
  )
}
export default InputForm
