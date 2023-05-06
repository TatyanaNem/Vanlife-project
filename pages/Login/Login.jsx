import React, {useEffect, useState} from 'react';
import styles from './Login.module.css';
import {Form, Link, useLoaderData, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {loginUser} from "../../common/API/api";

export const loader = ({request}) => {
  return new URL(request.url).searchParams.get('message')
}

export const action = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  try {
    const data = await loginUser({email, password})
    console.log(data)
  } catch (e) {
    toast.error(e.message)
  }
}

const Login = () => {
  const [status, setStatus] = useState('idle')
  const message = useLoaderData()

  useEffect(() => {
    if (message) toast.error(message)
  }, [])

  return (
    <div className={styles.loginContainer}>
      <h1>Sign in to your account</h1>
      <Form className={styles.loginForm} method='post'>
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
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
