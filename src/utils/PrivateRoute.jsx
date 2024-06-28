
import { Outlet, Navigate } from 'react-router-dom'
import useGetUserData from '../store/UserStore'

const PrivateRoute = () => {

  const getUser = useGetUserData();

  return getUser.userToken ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute