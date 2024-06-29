
import { Outlet, Navigate } from 'react-router-dom'
import useGetUserData from '../store/UserStore'

const PrivateRoute = () => {

  const getUser = useGetUserData((state) => (state.user));

  return getUser ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute