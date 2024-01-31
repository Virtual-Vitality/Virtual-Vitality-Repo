import Container from "react-bootstrap/Container";
import React,{ useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm  = () => {
  const navigate = useNavigate();
  const [userNameLoginInput, setUserNameLoginInput] = useState(``);
  const [passwordLoginInput, setpasswordLoginInput] = useState(``);

  
  const handleSubmit = async(e)=>{
    e.preventDefault();
try {
     const result = await axios.post(`/auth/login`,{
        "userName":userNameLoginInput,
        "password":passwordLoginInput
      });
      window.localStorage.setItem("token", result.data.token)
      console.log(`logged in`, result)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    }



    return(

      <div className='flex'>
      <Form onSubmit={handleSubmit} className=' align-middle bg-slate-500 rounded-md p-2 align-self-center'>
        <h1 className=" underline bg-slate-500">Login Form</h1>
        <br/>
      <Form.Group className="mb-3 align-self-center" controlId="formGroupUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control 
        type="str" 
        placeholder="Enter userName"
        onChange={(event)=>{
          setUserNameLoginInput(event.target.value)}
        }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password"
         placeholder="Password" 
         onChange={(event)=>{
          setpasswordLoginInput(event.target.value)}
        }
         />
      </Form.Group>
      <Button type= "submit">Log In</Button>
    </Form>
    </div>
)};

export default LoginForm;

