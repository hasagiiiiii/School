import React from 'react'
import { AuthContext } from '../../Context/AuthProvider'

export const Loading = () => {
    const {loading,setLoading} = React.useContext(AuthContext)
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[loading,setLoading])

  return (
   loading ? (
    <div className='w-full h-screen fixed top-0 left-0 z-[9999] bg-[hsl(38,62%,72%)] '>
        <div className='w-16 h-16 border-[8px] border-solid border-black border-l-white rounded-[50%] animate-spin fixed top-1/2 left-1/2 z-50'></div>
   </div>
   ):''
  )
}
