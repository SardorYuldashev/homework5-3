import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  // let token = localStorage.getItem("token");
  // if(token) navigate("/")

  async function handleLogin (e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    
    let { token } = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: {
        "Content-Type" : "application/json"
      }
    }).then((res) => res.json()).catch((err) => {
      alert("Something went wrong. Try again...")
      console.log(err);
    })

    localStorage.setItem("token", token)
    navigate("/")
  }

  handleLogin()

  return (
    <div>
      <form className='login-form' onSubmit={ handleLogin } >
        <input className='login-input' type="email" name="email" id="email" placeholder='example@mail.ru' />
        <input className='login-input' type="password" name="password" id="password" placeholder='Password' />
        <button  className='login-btn'>Login</button>
      </form>

    </div>
  )
}

export default Login
