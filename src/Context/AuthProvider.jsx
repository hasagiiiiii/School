import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Service } from "../api/service";
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
    // Remove acces_tokense
    fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1/token/logout`,{
      method:"PUT",
      headers: {
        Authorization: `Bearer ${Service.getTokenCookies()}`,
      }
    })
    Service.DeleteCookie('access_token') // Delete access_token
    Service.DeleteCookie('refesh_Token') // Delete refesh_token
    setLogin(false)
    navigate('/')
    console.log(isLogin)
    window.location.reload();
  };
  const CheckRedirect = () => {
    // Check Redirect
    


  // console.log(checkAccess)
    const access = Service.getTokenCookies();
    // console.log(access)
    const isAuthenticator =  access === undefined ? true : false; // check xem accesToken co gia tri hay khong
    if(isAuthenticator ){
      const REFESH_TOKEN = Service.getRefeshToken();
      if(REFESH_TOKEN){
        try{
          fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1/token/refesh-token`,{
            method : "PUT",
            headers: {
              Authorization: `Bearer ${REFESH_TOKEN}`,
            },
          }).then(res=>res.json())
              .then(data=> {
                const backendDateTime = new Date(data.access_Expire_Token).toUTCString();
                const backendDateTimeRefesh = new Date(data.refresh_Expire_Token).toUTCString()
                document.cookie = `access_token =${data.access_Token};Expires = ${backendDateTime}`
                document.cookie = `refesh_Token = ${data.refresh_Token};Expires = ${backendDateTimeRefesh}`
                setLogin(true)
                setLoading(true)
              })
        }catch(err){
          throw err
        }
      }
    }
    
  };

//  React.useEffect(() => {
//     const access = Service.getTokenCookies();
//     // console.log(access)
//     const isAuthenticator =  access === undefined ? true : false; // check xem accesToken co gia tri hay khong
//     if(isAuthenticator ){
//       const REFESH_TOKEN = Service.getRefeshToken();
//       if(REFESH_TOKEN){
//         try{
//           fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1/token/refesh-token`,{
//             method : "PUT",
//             headers: {
//               Authorization: `Bearer ${REFESH_TOKEN}`,
//             },
//           }).then(res=>res.json())
//               .then(data=> {
//                 document.cookie = `access_token =${data.access_Token};Expires = ${data.access_Expire_Token}`
//                 document.cookie = `refesh_Token = ${data.refresh_Token};Expires = ${data.refresh_Expire_Token}`
//                 setLogin(true)
//                 console.log(data)
//               })
//         }catch(err){
//           throw err
//         }
//       }
//     }
    
//     setLogin(false);
//   },[navigate])

  return (
    <AuthContext.Provider value={{ Logout, isLogin,setLogin, CheckRedirect,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
