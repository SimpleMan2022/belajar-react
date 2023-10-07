import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="Fullname"
        label="Fullname"
        name="Fullname"
        id="Fullname"
        placeholder="John Doe"
      ></InputForm>
      <InputForm
        type="email"
        label="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        type="password"
        label="Password"
        name="password"
        id="password"
        placeholder="xxxx"
      ></InputForm>
      <Button classname="bg-blue-500 w-full my-3 hover:bg-blue-600">
        Register
      </Button>
    </form>
  )
}
export default FormRegister
