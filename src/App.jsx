
import { Route, Routes} from 'react-router-dom'
import PrivateRoute from "./utils/PrivateRoute"
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from './pages/Home'
import GameRoom from './pages/GameRoom'
import Navbar from "./components/Navbar"
import Playpage from './pages/Playpage'

import useGetUserData from "./store/UserStore"

const App = () => {

  const getUser = useGetUserData()
  // const customers = useMyFirstStore((state) => (state.customers))

  return (
    <div className="bg-[linear-gradient(152deg,_#1F2833,_#66FCF1_200%,_#66FCF1)]  min-h-screen">
       <Navbar />
       <div className={getUser.user !== null ? 'px-[1em] xl:px-[2em] pt-[5em]' : 'p-0'}>
        <Routes>
          {/* elements inside private route requires authentication, else they will be redirected to login page */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='play' element={<Playpage />}>
              <Route path=':room-id' element={<GameRoom />}/>
            </Route>
              
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path='/register' element={<Register />}/> 
        </Routes>
       </div>
      

      {/* <p>There are {customers} right now</p>
      <button className="bg-blue-200 p-2 rounded-xl hover:bg-blue-300" onClick={useMyFirstStore((state) => (state.increaseCustomer))}>Increase Customer count</button>
      <button className="bg-red-200 p-2 rounded-xl hover:bg-red-300 block mt-2" 
      onClick={useMyFirstStore((state) => (state.decreaseCustomer))}>Decrease Customer count</button> */}
    </div>
  )
}

export default App