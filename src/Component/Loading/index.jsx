import { Spin } from 'antd'
import React from 'react'
import { AuthContext } from '../../Context/AuthProvider'

export const Loading = () => {
    const {loading,setLoading} = React.useContext(AuthContext)
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[loading,setLoading])
  return (
   loading ? (
    <div className='w-full bg-black fixed top-0 left-0 z-50'>
        <Spin/>
   </div>
   ):''
  )
}
