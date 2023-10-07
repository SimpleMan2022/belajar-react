import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        label="Password"
        name="password"
        id="password"
        type="password"
        placeholder="****"
      ></InputForm>
      <Button classname="bg-blue-600 w-full my-3">Login</Button>
    </form>
  )
}
export default FormLogin
