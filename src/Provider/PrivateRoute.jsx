import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const { User, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center  items-center mt-40">
        
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (User) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;