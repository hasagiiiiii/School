import {collection,addDoc,Timestamp} from "firebase/firestore"
import {db} from "./config"
export const addDocument = async (collect,data)=>{
    let query = collection(db,collect)
    await addDoc(query,{
        ...data,
        createAt : Timestamp.now(), // lấy thời gian khi người dùng tạo
    })
}