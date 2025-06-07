import React from 'react'

const Loginform = () => {
    return (
        <div>
            <form >
  {/* <!-- Email input --> */}
  
  <center>
    <br/><br/><br/><br/>
     <div style={{ width:"400px", boxShadow:"1px 1px 4px 1px blue" ,borderTop:"1px solid blue", backgroundColor:"beige"}}>
          <h1 style={{textShadow:"1px 1px 3px black", color:"crimson"}} >Login From</h1><br/>
      <div class="form-outline mb-4"   >
    <input type="email" id="form2Example1" className="form-control" style={{width:"250px", border:"2px solid pink" }} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control"  style={{width:"250px", border:"2px solid pink" }}  />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>
     </div>
  </center>
   </form>
 </div>

    )
}

export default Loginform
