import React, {useEffect, useState} from 'react';
import styles from './Login.module.css';
import {Link, useLoaderData} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const loader = ({request}) => {
  return new URL(request.url).searchParams.get('message')
}

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

  const message = useLoaderData()

  useEffect(() => {
    if (message) toast.error(message)
  }, [])

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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
