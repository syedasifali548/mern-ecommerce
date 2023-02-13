import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../redux/apiCalls'
import { toast } from 'react-toastify';


const Register = () => {
     const [username,setUsername] = useState("")
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const dispatch = useDispatch();
     const navigate = useNavigate()
     const {isFetching,isError,isSuccess,isLoading,user} = useSelector((state)=>state.user)

     const handleClick=(e)=>{
      e.preventDefault();
      register(dispatch,{username,email,password})
      navigate('/login')
      toast.success('Account Created Successfully! ', {
        position: toast.POSITION.TOP_RIGHT })
     }
   
  return (
    <Container>
       <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
          <Input placeholder="username" 
          onChange={(e)=>setUsername(e.target.value)}
          />
          <Input placeholder="email" 
          onChange={(e)=>setEmail(e.target.value)}
          
          />
          <Input placeholder="password" 
          onChange={(e)=>setPassword(e.target.value)}

          type='password'
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
          onClick={handleClick}
          >CREATE</Button>
        </Form>
       </Wrapper>

    </Container>
  )
}

const Container = styled.div`
     width: 100vw;
     height: 100vh;
     background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.div`
        font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
export default Register