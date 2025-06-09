import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const About = () => {

    const [about,setabout] = useState()
    
    useEffect(()=>{
        axios.get()

    },[])


    return (
        <div>
            <Navbar/>

           <center>
             <div>
                <h3 style={{marginTop:"20px", fontWeight:"300"}}>THE BEAUTY BLOSSOM STORE</h3>
            </div>

           </center>

        </div>
    )
}

export default About
