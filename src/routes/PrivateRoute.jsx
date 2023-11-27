import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  console.log(loading)
  if (loading) return <div className="flex justify-center items-center z-50 h-screen w-screen top-0 left-0 right-0 overflow-hidden bg-black"><span className=" loading loading-infinity loading-lg text-accent"></span></div>
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}

export default PrivateRoute
