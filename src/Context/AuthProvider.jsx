import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = React.useState(1); // Check User Login
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    localStorage.removeItem("acces");
    //Remove acces_token
    window.location.reload();
  };
  const CheckRedirect = () => {
    // Check Redirect
    if (!isLogin) {
      navigate("/");
      return null;
    }
  };
  React.useEffect(() => {
    const auth = () => {
      const isAuthenticator = localStorage.getItem("acces") !== null;
      // Check Acces_Token
      setLogin(isAuthenticator);
    };
    return () => auth(); // clean up function
  }, [navigate, dispatch]);

  return (
    <AuthContext.Provider value={{ Logout, isLogin, CheckRedirect }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
