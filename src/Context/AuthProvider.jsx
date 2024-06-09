import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Service } from "../api/service";
import { resetAllState } from "../redux/ResetReducer";
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    setLoading(true);
    return () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  }, [navigate]);
  const Logout = () => {
    // Remove acces_tokense
    try {
      fetch("http://localhost:5071/api/v1.0/auth/logout", {
        method: "DELETE",
        credentials: 'include'
      }).catch(error=>console.log(error));
    } catch (error) {
      console.log(error);
    }
    resetAllState(dispatch);
    navigate("/");
    setLoading(true);
  };
  const CheckRedirect = () => {
    // const access = Service.getTokenCookies();
    // console.log(access)
    // const isAuthenticator = access === undefined ? true : false; // check xem accesToken co gia tri hay khong
    // if (isAuthenticator) {
    //   const REFESH_TOKEN = Service.getRefeshToken();
    //   console.log(REFESH_TOKEN);
    //   if (REFESH_TOKEN) {
    //     try {
    //       fetch(
    //         `${process.env.REACT_APP_URL_SEVER}/api/v1/token/refesh-token`,
    //         {
    //           method: "PUT",
    //           headers: {
    //             Authorization: `Bearer ${REFESH_TOKEN}`,
    //           },
    //         }
    //       )
    //         .then((res) => res.json())
    //         .then((data) => {
    //           const backendDateTime = new Date(
    //             data.access_Expire_Token
    //           ).toUTCString();
    //           const backendDateTimeRefesh = new Date(
    //             data.refresh_Expire_Token
    //           ).toUTCString();
    //           document.cookie = `access_token =${data.access_Token};Expires = ${backendDateTime};path =/`;
    //           document.cookie = `refesh_Token = ${data.refresh_Token};Expires = ${backendDateTimeRefesh};path=/`;
    //           setLoading(true);
    //         });
    //     } catch (err) {
    //       throw err;
    //     }
    //   } else {
    //     console.log("sdasjdnhasjkfhaksfahs");
    //     navigate("/");
    //   }
    // }
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
    <AuthContext.Provider
      value={{ Logout, CheckRedirect, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
