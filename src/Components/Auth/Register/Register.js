import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from "axios";
import './Register.css';
function Register() {
  const errRef = useRef();
  const userRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const USER_REGEX = useMemo(
    () => /^[A-Za-z][A-Za-z0-9-_]{3,23}$/,
    []
  );

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
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username, USER_REGEX]);

  useEffect(() => {
    setValidEmail(MAIL_REGEX.test(email));
  }, [email , MAIL_REGEX]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === confirm_password);
  }, [password, confirm_password, PWD_REGEX]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, confirm_password]);

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
        "http://localhost:8000/book/api/registration/",
        JSON.stringify({ username, email, password, confirm_password }),
        {
          headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        }
      );
      
      console.log(response.data);
      setSuccess(true);
      // Clear state and controlled inputs
      setUsername("");
      setPassword("");
      setconfirm_password("");
      setEmail("");
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />

          <label htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />


          <p
            id="uidnote"
            className={
              userFocus && username && !validName ? "instructions" : "offscreen"
            }
          >
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

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
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />

          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
             8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number, and a special character.
            <br />
            Allowed special characters: ! @ # $ %
          </p>

          <label htmlFor="confirm_password">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_password"
            onChange={(e) => setconfirm_password(e.target.value)}
            value={confirm_password}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />

          <p
            id="confirmnote"
            className={
              matchFocus && !validMatch ? "instructions" : "offscreen"
            }
          >
            Must match the first password input field.
          </p>

          <button
            // disabled={!validName || !validPwd || !validMatch} type='submit'
          >
            Sign Up
          </button>
        </form>
        <p>
          Already registered?
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


export default Register;