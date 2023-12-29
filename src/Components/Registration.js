import { useState } from 'react'
import '../Styles/RegLog.css'
import logo from '../Assets/xplorshoes.png'
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    
    
    const initialValue = {username: "", email: "", password: "", confirmpassword: ""} 
    
    const [formData,setFormData] = useState(initialValue); // State to manage form data
    const [errors,setErrors] = useState({})                // State to manage validation errors
   
    const navigate = useNavigate();                  

    

    const handleChange = (e) => {                       // Event handler for form input changes
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }
    const handleSubmit = (e) => {                       // Event handler for form submission
        e.preventDefault()
        
        const validationErrors = {}                     // Object to store validation errors
        
       
        if(!formData.username.trim()){                  // Validation checks for each form field
            validationErrors.username = "Username is required"
        }
        
        if(!formData.email.trim()){
            validationErrors.email= "Email is required"
        }else if(/\S+@\S\.\S+/.test(formData.email)){
            validationErrors.email= "Enter valid email...!"
        }
        
        if(!formData.password.trim()){
            validationErrors.password= "Password is required"
        }else if(formData.password.length < 6){
            validationErrors.password= "Password must be 6 characters"
        }

        if(formData.confirmpassword !== formData.password){
            validationErrors.confirmpassword = "password does not match...!"
        }

        setErrors(validationErrors);    // Set validation errors in state

        // If there is no errors, proceed with registration 
        if (Object.keys(validationErrors).length === 0) { 
            
             // Create a new user object
            const newUser = { username: formData.username, email: formData.email, password: formData.password };
            
             // Retrieve existing users from localStorage or create an empty array
            const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
           
            // Add new user to existing users
            const updatedUsers = [...existingUsers, newUser];

            // Store updated users array in localStorage
            localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

            alert('Registered Successfully');
            navigate('/login');
        }
    }

  return (
    <div className='reg-container'>
        <div className='wrapper'>
            <div className='form-box'>
                <center><img src={logo} className='img-logo' alt='logo' /></center>
                    <form onSubmit={handleSubmit}>
                        <h2><center>Registration Page</center></h2>
                        
                        <div className='input-box'>
                            <input type='text' required 
                                    name='username'
                                    placeholder='Username' 
                                    onChange={handleChange} />
                                    {errors.username}<span>{errors.username}</span>
                        </div>

                        <div className='input-box'>
                            <input type='email' required
                                    name='email' 
                                    placeholder='Email' 
                                    onChange={handleChange} />
                                    {errors.email} <span>{errors.email}</span>
                        </div>

                        <div className='input-box'>
                            <input type='password' required 
                                    name='password'
                                    placeholder='Password' 
                                    onChange={handleChange} />
                                    {errors.password} <span>{errors.password}</span>
                        </div>
                        
                        <div className='input-box'>
                            <input type='password' required 
                                    name='confirmpassword'
                                    placeholder='Confirm Password' 
                                    onChange={handleChange} />
                                    {errors.confirmpassword} <span>{errors.confirmpassword}</span>
                        </div>

                        <button type='submit' className='btn-sub'>Register</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Registration