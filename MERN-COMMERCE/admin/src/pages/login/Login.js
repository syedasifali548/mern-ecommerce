import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../redux/apiCalls'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsEyeFill} from 'react-icons/bs'
import {BsEyeSlashFill} from 'react-icons/bs'

import './login.css'


const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
 const [showPassword,setShowPassword] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory()
  // const {isFetching,isError,isSuccess,isLoading} = useSelector((state)=>state.user)
  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password})
    history.push('/')
    toast.success('Logged In Successfully! ', {
      position: toast.POSITION.TOP_RIGHT })
    }
    // Show and hide password
  const eyes = <BsEyeFill/>
  const handleTogle=()=>{
   setShowPassword(showPassword ? false : true)
  }
  return (
    <div className='main_Container'>
    <div className="loginContainer">
        <h2>LOGIN</h2>
     <input type="text" name="username" 
     placeholder='Username'
     onChange={(e)=>setUsername(e.target.value)}
     />
     <input type={showPassword ? "text" :"password"}   name="password"
      placeholder='Password'
     onChange={(e)=>setPassword(e.target.value)}

      />
        <span onClick={handleTogle} className="ShowHidePassword">{eyes}</span>
 
     <button
     onClick={handleClick}
     >LOGIN</button>
    </div>

    </div>
  )
}

export default Login