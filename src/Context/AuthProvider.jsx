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

  const DeleteCookie = (nameCookie)=>{
    document.cookie = `${nameCookie} =;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; `
  }

  const Logout = () => {
    localStorage.removeItem("acces");
    DeleteCookie('access_token') // Delete access_token
    //Remove acces_tokense
    setLogin(false)
    navigate('/')
    window.location.reload();
  };
  const CheckRedirect = () => {
  const Cookie_Acess_TOKEN = document.cookie?.split(";")
  const checkAccess = Cookie_Acess_TOKEN.filter(cookie=> cookie.includes("access_token")) // check xem đã có access token chưa
  // console.log(checkAccess)
    // Check Redirect
    if (isLogin===false || checkAccess.length < 1) {
      setLoading(true) // HIển thị loading trước khi render content 
      navigate("/");
      return null;
    }
  };

  React.useMemo(() => {
    const isAuthenticators = document.cookie?.split(";");
    // isAuthenticator.filter
    const filter =isAuthenticators?.filter(cookie => cookie.includes('access_token')); // Kiểm tra xem có access token có hay không
    const isAuthenticator = filter.length >=1 ? true : false;

    console.log(isAuthenticator)
    // Check Acces_Token
    setLogin(isAuthenticator);
  },[isLogin,navigate])

  return (
    <AuthContext.Provider value={{ Logout, isLogin, CheckRedirect,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
