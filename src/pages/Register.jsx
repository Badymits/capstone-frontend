import { useState } from 'react'
import { Link } from "react-router-dom"
import useGetUserData from "../store/UserStore"

const Register = () => {

  const [form, setForm] = useState({
    email: '',
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    password2: ''
  })
  const getUser = useGetUserData();

  const handleFormChange = (e) => {
      setForm(prevState => ({
        ...prevState, 
        [e.target.name]: e.target.value
      })
    )
  }

  return (
    <div className=" bg-[url('./images/bataan.png')] bg-no-repeat bg-cover bg-center max-w-full h-screen flex justify-center">
        <div className="bg-white w-full xl:w-[50%] md:w-[80%] block p-4 pt-6 m-10 mx-2 rounded-lg">
              <form onSubmit={getUser.registerUser} method="post" className="flex flex-col items-center justify-center 
              xl:text-lg text-sm py-8 xl:w-[70%] md:w-[80%] mx-auto">
                <h1 className="text-4xl pb-8 font-thin uppercase text-gray-700">Register Form</h1>

                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Email</label>
                    <input type="text" name="email" placeholder="Enter email" value={form.email} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>

                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">First Name</label>
                    <input type="text" name="firstname" placeholder="Enter firstname" value={form.firstname} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Last Name</label>
                    <input type="text" name="lastname" placeholder="Enter lastname" value={form.lastname} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Username</label>
                    <input type="text" name="username" placeholder="Enter username" value={form.username} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="" className="block text-gray-700 text-sm font-bold">Confirm Password</label>
                    <input type="password" name="password2" placeholder="Confirm password" value={form.password2} className="border border-solid pl-3 w-full h-[40px] rounded-lg"
                    onChange={(e) => handleFormChange(e)}
                    />
                </div>

                <input type="submit" name="register" value="Register" className="bg-green-300 py-2 mb-4 px-7 rounded-lg uppercase hover:bg-green-200 text-gray-700 cursor-pointer"/>
                <Link className="font-thin text-base hover:underline text-blue-400 pb-2" to="/login">Already have an account</Link>
                <Link className="font-thin text-base hover:underline text-blue-400">Forgot Password?</Link>

                </form>
            
        </div>
    </div>
  )
}

export default Register