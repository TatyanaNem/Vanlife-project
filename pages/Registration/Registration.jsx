import React, {useEffect} from 'react';
import {Form, Link, redirect, useLoaderData, useNavigation} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import styles from "../Login/Login.module.css";
import {register} from "../../common/API/api";

export const loader = ({request}) => {
  return new URL(request.url).searchParams.get('message')
}

export const action = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const pathname = new URL(request.url).searchParams.get('redirectTo') || '/'
  try {
    const data = await register(email, password)
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
    return redirect(pathname)
  } catch (e) {
    toast.error(e.message)
  }
}

const Registration = () => {
  const navigation = useNavigation()
  const message = useLoaderData()

  useEffect(() => {
    if (message) toast.error(message)
  }, [])

  return (
    <div className={styles.loginContainer}>
      <h1>Create your account</h1>
      <Form className={styles.loginForm} method='post' replace>
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
        <button disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting' ? 'In process...' : 'Register me'}
        </button>
      </Form>
      <p>Already have an account? <Link className={styles.registrationLink} to='../login'>Log in now</Link></p>
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

export default Registration;
