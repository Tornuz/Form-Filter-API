import React from "react";
import "./SignIn.css"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

function handleClick() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const pass = document.getElementById("pass").value
  if(!name){
    alert("Please Enter the Full name")
    return
  } else if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    alert("Please Enter the correct Email address")
    return
  }else if(!pass.toLowerCase().match(/^[A-Za-z]\w{6,14}$/)) {
    alert("The Password must be between [7-14] characters")
    return
  }


  navigate('/Home', {state: {
    name
  }});
}
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input id="name" type="text" placeholder="Full Name" />
          <input id="email" type="email" placeholder="Email Address" />
          <input id="pass" type="password" placeholder="Password"/>
          <button onClick={handleClick}>lOGiN</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
