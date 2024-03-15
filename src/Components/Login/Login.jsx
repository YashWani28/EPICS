import React, { useState } from 'react';
import './Login.css';
import google from './google.jpg'
const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className='loginparent'>
    <div className='left-section'>
      
    </div>
    
      <div className="right-section">
        <h1>Create your Free Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="labels">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your Full Name here"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="labels">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email here"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="labels">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your Password here"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="create-account">
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <a href="#">Log in</a>
          </p>
        </form>
        <div className="or">- OR -</div>
        <button className="google-btn"><img src={google}/>Sign up with Google</button>
      </div>
    </div>
  
  );
};

export default Login;
