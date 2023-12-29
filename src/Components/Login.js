import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/RegLog.css';

const Login = () => {
    
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();

    const storedUserData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        }

        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
          const userExists = storedUserData.some(
              (user) => user.email === formData.email && user.password === formData.password
          );
  
          if (userExists) {
              alert('Login Successful');
              navigate('/home');
          } else {
              alert('Invalid credentials. Please try again.');
          }
      }
    };

    return (
        <div className='reg-container'>
            <div className='wrapper'>
                <div className='form-box'>
                    <form onSubmit={handleSubmit}>
                        <h2><center>Login Page</center></h2>
                        
                        <div className='input-box'>
                            <input type='email' required
                                name='email'
                                placeholder='Email'
                                onChange={handleChange} />
                                {errors.email && <span>{errors.email}</span>}
                        </div>

                        <div className='input-box'>
                            <input type='password' required
                                name='password'
                                placeholder='Password'
                                onChange={handleChange} />
                                {errors.password && <span>{errors.password}</span>}
                        </div>

                        <button type='submit' className='btn-sub'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
