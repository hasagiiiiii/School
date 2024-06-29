import { Service } from "./service"

export const FETCH_API_Class = {
    AddClass :async (value)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/class-school`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Service.getTokenCookies()}`,
              },
            body:JSON.stringify(value),
            credentials:"include"
        }).then(res => res.status).then(data => console.log(data)).catch(err=>console.log(err))
    },    
    GetAttendance : async (idClass,action)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/diemdanh?idMonHoc=${idClass}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials:"include"
        }).then(res=>res.json()).then(data=>action(data))
    }

}