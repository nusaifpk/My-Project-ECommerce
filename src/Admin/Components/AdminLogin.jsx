import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../Styles/AdminLogin.css'


const AdminLogin = () => {

    const navigate=useNavigate();
    const user=useRef();
    const pass=useRef();
    const handleLogin=()=>{
      
      const username=user.current.value;
      const password=pass.current.value;
      if(username ==="admin" && password  === "admin"){
        navigate('/admin')
      }
      else{
        toast.error("Username or password is incorrect")
      }
    }
  
  return (
    <div>
      <div className='main__div'>
        <div className='form__div'>  
          <h1><center>ADMIN LOGIN</center></h1>
          <input  type='text'
                  className='input__text'
                  placeholder='username' 
                  ref={user} /><br/><br/>
          
          <input  type='password'
                  className='input__pass'
                  placeholder='password' 
                  ref={pass} /><br/>
          
          <Button  className='mt-3'  variant="success" style={{width:"20rem"}} onClick={handleLogin}>Login</Button>
      
        </div>
      </div>
     </div>
  )
}

export default AdminLogin