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
    },
    PostAttendance :async (payload)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/diemdanh`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            credentials:"include"
        }).then(res=>console.log(res))
    },
    CreateExercise : async(formdata)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/baitap`,
            {
                method:"POST",
                    body: formdata,
                    credentials:"include"
                    }).then(res=>console.log(res)).catch(err=>console.log(err))
            
    },
    GetExercise : async(id,action)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/baitap?idMonHoc=${id}`,
            {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    },
                    credentials:"include"
                    }).then(res=>res.json()).then(data=>action(data))
    },
    GetUserInClass : async (idMonHoc,action)=>{
        await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/monhoc/member?idMonHoc=${idMonHoc}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                },
                credentials:"include"
        }).then(res => res.json()).then(data=>action(data))
    }       

}