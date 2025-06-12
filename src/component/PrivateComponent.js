import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateComponent = ({children}) => {


    const navigate = useNavigate()
    const isAuthenticated = sessionStorage.getItem("islogin","true")
     

    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/")
        }

    },[])


    

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateComponent
