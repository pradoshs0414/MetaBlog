import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children,authentication = true}) {

    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const [loader,setLoader] = useState()

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
    },[authStatus,authentication,navigate])

  return (
    <React.Fragment>
        {children}
    </React.Fragment>
  )
}

export default AuthLayout