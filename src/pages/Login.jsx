import { Link } from "react-router-dom"
import useGetUserData from "../store/UserStore"

const Login = () => {

  const getUser = useGetUserData() 

  return (
    <div className="bg-[url('./images/bataan.png')] bg-no-repeat bg-cover bg-center w-full h-screen flex justify-center">
        <div className="bg-white w-full xl:w-[45%] md:w-[80%] block p-2 m-auto mx-2 rounded-lg">
            
            <form action="" onSubmit={getUser.loginUser} method="post" 
                className="flex flex-col items-center justify-center xl:text-lg text-sm py-8 xl:w-[70%] md:w-[80%] mx-auto m-[1em] space-y-7">

                <h1 className="xl:text-4xl text-2xl pb-8 font-thin uppercase text-gray-700">Login Form</h1>

                <div className="w-full mb-4">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Email</label>
                    <input required type="text" name="email" placeholder="Enter email" className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    
                    />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Password</label>
                    <input required type="password" name="password" placeholder="Enter password" className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    
                    />
                </div>

                <button type="submit" className="bg-green-300 py-2 mb-4 px-7 rounded-lg uppercase hover:bg-green-200 text-gray-700">Login</button>
                <Link className="font-thin text-base hover:underline text-blue-400" to="/register">Create an account</Link>
                <Link className="font-thin text-base hover:underline text-blue-400">Forgot Password?</Link>
                
            </form>
        </div>
        
    </div>
  )
}

export default Login