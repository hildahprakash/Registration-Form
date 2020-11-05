import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";


import "./Login.css";





const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const loginUser = (email, password) => {
      axios.post("https://devgroceryapi.spericorn.com/api/auth/login", {email,password
         
        })
          .then(response => {
            if (response.status === 200) {
              alert("User Successfully Loggedin")
              localStorage.userData = JSON.stringify(response.data);
              setIsLoggedin(true);
                
             
            } else {
                console.log('ppppppp',response)
              }
          })
          .catch(error => {
            console.log(error);
          });
  
  }
  const validateUser = (e, props, username, password) => {
    e.preventDefault();
    if(isEmailValid(username) && isPasswordValid(password)) {
      loginUser(username, password);
    }
    else {
      window.alert('username must be a valid email and password length should be greater than 4');
    }
  
  };

const isEmailValid = email => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailVal = pattern.test(email);
    return emailVal;  
  };
  
  const isPasswordValid = password => {
      //Password, must have at least 8 characters and a special symbol.
      let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return password.length >= 8 && format.test(password)

    
  }

  

    return (
      <div>
      {isLoggedIn && <Redirect to= "/home" />}
      <div className="login-page">
        <div className="form">
          <h1>Login</h1>
          <form className="login-form">
            <input type="text" placeholder="Enter your email" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick= {(e) => {validateUser(e, props, username, password)}}>login</button>
            <p className="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
      </div> 
    );
  
}
export default Login;
