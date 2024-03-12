import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const loginInitial = {
    name:"",
    email:"",
    password:"",
    
  }

const Login = () => {

    const [credentials,setCredentials] = useState(loginInitial)
    const navigate = useNavigate();

   
    const handleChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }
  
    const handleLogin = async()=>{
        let response = await axios.post("http://localhost:5000/login",credentials)

        if(response.status === 201){
            navigate("/")
        }

        console.log(response);
    
    }


  return (
    <>
    <div className='container mt-100 my-100 mx-100'>
         <div className="mb-3">
         
           <input type="email" className="form-control" id="email" name='email' onChange={handleChange} placeholder="Enter Email"/>
         </div>
         <div className="mb-3">
         
           <input type="text" className="form-control" id="password" name='password' onChange={handleChange} placeholder="Enter Password"/>
         </div>
         <button type="button" className ="btn btn-primary" onClick={()=>handleLogin()}>Login</button>
        
    </div>
   
   </>
  )
}

export default Login
