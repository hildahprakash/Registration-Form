import React, { Component, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


import "./Register.css";


const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [confirmpwd, setConfirmpwd] =useState('');
  const [phone, setPhone] =useState('');
  const [isRegistered,setIsRegisterd] = useState(false);

  const registerUser = (email,username, password,phone) => {
    axios.post("https://devgroceryapi.spericorn.com/api/auth/register", {email,username,password,phone
       
      })
        .then(response => {
          if (response.status === 200) {
            alert(" User Successfully Registered")
           setIsRegisterd(true);
           
          } else {
              console.log('ppppppp',response)
  
  
           
          }
        })
        .catch(error => {
          console.log(error);
        });
  
  }
  const validateUser = (e, email, username, password,confirmpwd,phone) => {
    e.preventDefault();
    if (!checkUsername(username)) {
      alert("Username cannot be empty")
      return;
    }
    else if (!isEmailValid(email)) {
      alert("Email is not valid")
      return;
    }
    else if (!isPasswordValid(password)) {
      alert('Password, must have at least 8 characters and a special symbol.')
      return;
    }
    else if (!checkPassword(password,confirmpwd)) {
    alert('Password and confirm password should match.')
    return;
    }
    else if (!checkPhone(phone)) {
      alert('Phone Number cannot be empty')
      return;
    }
    else {
      console.log('iiiiiiiiii')
      registerUser(email, username, password,phone);
}
    
};

  const checkPassword = (password,confirmpwd) => {
    return password.length>0 && confirmpwd.length>0 && password === confirmpwd
  }
  const checkPhone = (phone) => {
    return phone.length >0
  }
  const checkUsername = (username) => {
    return username.length >0
  }
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
      {isRegistered && <Redirect to= "/" />}
      

      <div className="login-page">
        <div className="form">
          <h1>Register</h1>
          <form className="login-form">
          <input type="text" placeholder="Enter your Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="Enter your confirm password" value={confirmpwd} onChange={e => setConfirmpwd(e.target.value)}/>
            <input type="text" placeholder="Enter your Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
            <button onClick= {(e) => {validateUser(e,email, username, password,confirmpwd,phone)}}>Register</button>
            <p className="message">
              Already registered? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div> 
      </div>
    );
  
}
export default Register;
