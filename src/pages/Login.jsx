import React from 'react'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from '../context/authContext.js';
//import axios from 'axios';

const Login = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:"",
  })
  const [err,setError] = useState(null);
  const navigate = useNavigate();
  
  //console.log(useContext(AuthContext)); 
  const {login} = useContext(AuthContext); 

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
    await login(inputs);
    navigate("/");
    console.log("login success");
    }
    catch(err){
      setError(err.response.data);

    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='Enter username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='Enter password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit} >Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account?<Link to ="/register">Register!</Link></span>
      </form>
    </div>
  )
}

export default Login