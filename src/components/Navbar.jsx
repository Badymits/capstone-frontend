import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useGetUserData from "../store/UserStore"
import { useGameStore } from "../store/GameStore";
// import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  
  const { logoutUser, inLobby } = useGetUserData()
  const getUser = useGetUserData((state) => (state.user));

  const { lobbyCode } = useGameStore((state) => ({
    lobbyCode: state.lobbyCode
  }))

  useEffect(() => {
    console.log(inLobby)
  }, [inLobby])

  return (
    <>
      {getUser &&   
      <nav className="h-[70px] flex justify-between items-center bg-[#1F2833] text-[#C5C6C7]  fixed w-screen px-[3em] z-50">

        <ul className="flex items-center justify-end gap-4 mx-4 h-full text-2xl font-thin text-[#C5C6C7]">


          <NavLink className='cursor-pointer  px-10 py-3 rounded-md m-4 bg-[#66FCF1] text-[#1F2833] hover:text-[#C5C6C7] hover:bg-[#5791d8]' to='play'>Play</NavLink>

          <NavLink className='cursor-pointer px-4 hover:text-[#66FCF1]' to='/'>Home</NavLink>
          <NavLink className='cursor-pointer px-4 hover:text-[#66FCF1]' to='about'>About</NavLink>
          <NavLink className='cursor-pointer px-4 hover:text-[#66FCF1]' to='contact'>Contact</NavLink>
          <NavLink className='cursor-pointer px-4 hover:text-[#66FCF1]' to='contact'>Tutorial</NavLink>
        </ul>
        <div className="flex items-center gap-2 pr-7 ">
          <div className="">
            <p>{getUser.username}</p>
            <p>{getUser.first_name}</p>
          </div>
          <div className="">
            <span className="bg-blue-400 w-[120px] h-[120px] p-3 rounded-full">&nbsp;</span>
          </div>
          <button className="cursor-pointer  px-10 py-3  rounded-md text-xl  bg-[#66FCF1] text-[#1F2833] hover:text-[#e2e7ec] hover:bg-[#5791d8]" onClick={logoutUser}>Logout</button>
        </div>
        
      </nav>
    }
      
    </>
    
  )
}

export default Navbar