import React from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { useNavigate,useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const { isLogin } = React.useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    if (isLogin === false) {
      navigate('/', { state: { from: location } });
    }
  }, [isLogin, navigate, location]);

  return isLogin ? children : null;
};
export default PrivateRouter;