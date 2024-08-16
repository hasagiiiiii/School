export const Service  = {
  getTokenCookies : ()=>{
    const cookies = document.cookie?.split(";");
    // isAuthenticator.filter
    const acces_tokens =cookies?.filter(cookie => cookie.includes('access_token')); // Kiểm tra xem có access token có hay không
    return acces_tokens[0]?.split("=")[1] // lay value sau dau =;
  },
  DeleteCookie : (nameCookie)=>{
    document.cookie = `${nameCookie} =;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; `
    // document.cookie = ''
  },
  getRefeshToken : ()=>{
    const cookies = document.cookie?.split(";");
    const refeshToken = cookies?.filter(cookie => cookie.includes('refesh_Token'));
    return refeshToken[0]?.split("=")[1];
  },
  getInforUser: ()=>{
    const cookies = document.cookie?.split(";");
    const Infor = cookies?.filter(cookie => cookie.includes('Info'));
    return Infor[0]?.split("=")[1];
  }
 
}
