import React, {useState} from 'react';
import styles from './Login.module.css';
import {Link} from "react-router-dom";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({email:'', password: ''})
  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginFormData)
  }

  return (
    <div className={styles.loginContainer}>
      <h1>Sign in to your account</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
      <p>Don’t have an account? <Link className={styles.registrationLink} to='registration'>Create one now</Link></p>
    </div>
  );
};

export default Login;
