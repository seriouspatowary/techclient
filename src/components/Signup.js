import React, { useState } from 'react';
import { authenticateSignup } from '../service/api';


const signupInitial = {
  name:"",
  email:"",
  password:"",
  
}


const Signup = () => {

    const [credentials,setCredentials] = useState(signupInitial);



    const handleChange = (e)=>{
      
      setCredentials({...credentials, [e.target.name]:e.target.value})
    }


   
    const handleSignup = async() => {

      let response = await authenticateSignup(credentials);

      if(!response) return;

     
   
  }

 

  return (
   <>
    <div className='container mt-100 my-100 mx-100'>
        <div className="mb-3">
         
           <input type="text" className="form-control" id="name" name='name'onChange={handleChange} placeholder="Enter name"/>
         </div>
         <div className="mb-3">
         
           <input type="email" className="form-control" id="email" name='email' onChange={handleChange} placeholder="Enter Email"/>
         </div>
         <div className="mb-3">
         
           <input type="text" className="form-control" id="password" name='password' onChange={handleChange} placeholder="Enter Password"/>
         </div>
         <button type="button" className ="btn btn-primary" onClick={()=>handleSignup()}>Signup</button>
        
    </div>
   
   </>
  )
}

export default Signup;
