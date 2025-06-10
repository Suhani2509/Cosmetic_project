import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginform = () => {

    
    const userInputEmail = useRef()
    const userInputPassword = useRef()
    const [userdata,setuserdata] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8888/loginuser").then((res)=>{
            setuserdata(res.data)
            console.log(res.data)
        }).catch((err)=>{
             console.log("Error handle",err)
        })
    },[])

    const Loginsubmit = (event)=>{
      event.preventDefault()
      
      const useremail = userInputEmail.current.value
      const userpass = userInputPassword.current.value

      // console.log("User email : ",useremail)
      // console.log("Password : ",userpass)

      const currentuser = userdata.find((val)=> val.email === useremail && val.password === userpass)

      if(currentuser){
        alert("Welcome to our cosmetic store 😊")
        sessionStorage.setItem("islogin","true")
        navigate("/home")

      }else{
        alert("Sorry!! Invalid credentials 😭")
      }

    }



    return (
        <div>
            <form onSubmit={(event)=>Loginsubmit(event)} >
  {/* <!-- Email input --> */}
  
  <center>
    <br/><br/><br/><br/>
     <div style={{ width:"400px", boxShadow:"1px 1px 4px 1px blue" ,borderTop:"1px solid blue", backgroundColor:"beige"}}>
          <h1 style={{textShadow:"1px 1px 3px black", color:"crimson"}} >Login From</h1><br/>
      <div class="form-outline mb-4"   >
    <input ref={userInputEmail} type="email" id="form2Example1" className="form-control" style={{width:"250px", border:"2px solid pink" }} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input ref={userInputPassword} type="password" id="form2Example2" className="form-control"  style={{width:"250px", border:"2px solid pink" }}  />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

    <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>
     </div>
  </center>
   </form>
 </div>

    )
}

export default Loginform
