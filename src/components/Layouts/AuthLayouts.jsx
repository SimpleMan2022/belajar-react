const AuthLayouts = (props) => {
  const { title, children } = props
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs bg-slate-100 p-5 rounded-2xl">
        <h1 className="text-3xl text-blue-500 font-bold">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
        {children}
      </div>
    </div>
  )
}
export default AuthLayouts
