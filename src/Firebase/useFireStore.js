import {collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from './config'

const useFireStore = (collect,condition) => {
  const [documents,setDocument] = React.useState([])
  React.useEffect(()=>{
    let collectionRef = query(collection(db,collect),orderBy("createAt")) // Tạo một truy vấn (query) với sắp xếp theo một trường cụ thể
    
    //condition :{
        // fieldName: ,
    //     operator : ,
    //     compareValue: ,

    // }

    

    
    if(condition){
        if(!condition.compareValue){
            return
        }
        collectionRef = query(
            collection(db,collect),
            where(condition.fieldName,condition.operator,condition.compareValue),
            orderBy("createAt")
        )
        // where tại condition nếu có condition
    }

    const unScribe = onSnapshot(collectionRef,(snapshot)=>{
        const document = snapshot.docs.map((doc)=>(
            {
                ...doc.data(),
                id:doc.id
            }
        ))
        setDocument(document)
    })
    return unScribe
  },[collect,condition])
  return documents
}

export default useFireStore