import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from "axios";
import './Login.css';
import Navbar from "../../HomePage/Navbar/Navbar";

function Login() {
  const errRef = useRef();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [setSuccess] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);


  const PWD_REGEX = useMemo(
    () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
    []
  );

  const MAIL_REGEX = useMemo(
    () => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    []
  );
  useEffect(() => {
    // // Fetch CSRF token and include it in Axios request headers
    // const csrfToken = document.cookie.split('; ')
    //   .find(cookie => cookie.startsWith('csrftoken='))
    //   .split('=')[1];

    // axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    emailRef.current.focus();
  }, []);

 
  useEffect(() => {
    setValidEmail(MAIL_REGEX.test(email));
  }, [email , MAIL_REGEX]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password, PWD_REGEX]);

  useEffect(() => {
    setErrMsg("");
  }, [password , email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = USER_REGEX.test(username);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //     console.log("why")
    //   setErrMsg("Invalid Entry");
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:8000/book/api/login/",
        JSON.stringify({ email, password}),
        {
          headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        }
      );
      console.log(response.data);
      const token = response.data.token;
  
      // Store the token in local storage
      localStorage.setItem("jwtToken", token);
  
      setSuccess(true);
      // Clear state and controlled inputs
      setPassword("");
      setEmail("");
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("email Taken");
      } else {
        setErrMsg("login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
    <Navbar />
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
        
          />

          <label htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
        
          />
          <button
            // disabled={!validName || !validPwd || !validMatch} type='submit'
          >
            LogIn
          </button>
        </form>
        <p>
          Don`t have account?
          <br />
          <span className="line">
            {/* Put router link here */}
            {/* <a href="#">Sign In</a> */}
          </span>
        </p>
      </section>
    </>
  );
}


export default Login;