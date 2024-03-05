export const FETCH_API = {
  // GET API not condition
     fetchApiV1GET : async (type, action,token) => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_URL_SEVER}/api/v1/${type}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${JSON.parse(token).access_Token}`,
              },
            }
          );
          const data = await response.json();
          if(data === null){
            action([])
          }else{
            action(data);
          }
        } catch (err) {
          console.log(err);
        }
      },
      // GET API has condition
       fetchAPIV1GET_Authoriez: async (type,action,token)=>{
        try{
          const response = await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1/${type}`,
          {
            method: "GET",
            headers:{ Authorization: `Bearer ${JSON.parse(token).access_Token}`,}
          })
          const data = await response.json();
          action(data);
        }catch(err){
          console.log(err)
        }
       }
    }
