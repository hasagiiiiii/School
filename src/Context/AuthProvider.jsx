import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = React.useState(false); // Check User Login
  const [loading, setLoading] = React.useState(false)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(()=>{
    setLoading(true)

    return ()=>{
      setTimeout(()=>{setLoading(false)},2000)
    }
  },[navigate])




  const Logout = () => {
    localStorage.removeItem("acces");
    //Remove acces_tokense
    setLogin(false)
    navigate('/')
    window.location.reload();
  };
  const CheckRedirect = () => {
    // Check Redirect
    if (isLogin===false) {
      setLoading(true) // HIển thị loading trước khi render content 
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
    <AuthContext.Provider value={{ Logout, isLogin, CheckRedirect,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
