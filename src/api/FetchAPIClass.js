import { Service } from "./service"

export const FETCH_API_Class = {
    AddClass : (value)=>{
        fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/class-school`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Service.getTokenCookies()}`,
              },
            body:JSON.stringify(value),
            credentials:"include"
        }).then(res => res.status).then(data => console.log(data)).catch(err=>console.log(err))
    }
}