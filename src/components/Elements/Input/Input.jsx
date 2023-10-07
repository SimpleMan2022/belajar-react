const Input = (props) => {
  const { type, name, id, placeholder } = props

  return (
    <input
      type={type}
      className="border rounded w-full py-2 px-3 placeholder:opacity-50 block text-slate-700 text-sm  mb-2"
      name={name}
      id={id}
      placeholder={placeholder}
    />
  )
}

export default Input
