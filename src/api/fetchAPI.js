export const FETCH_API = {
      // GET API has condition
       fetchAPIV1GET_Authoriez: async (type,action)=>{
        try{
          const response = await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/${type}`,
          {
            method: "GET",
            credentials: 'include'
          })
          const data = await response.json();
          if(data===null){return action([])}
          else{ return action([...data])}
        }catch(err){
          console.log(err)
        }
       },
       fetchOpbjectAPI_Authoriez:async (type,action)=>{
        try{
          const response = await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/${type}`,
          {
            method: "GET",
            credentials: 'include'
          })
          const data = await response.json();
          if(data===null){return}
          else{ return action(data)}
        }catch(err){
          console.log(err)
        }
       }
    }
