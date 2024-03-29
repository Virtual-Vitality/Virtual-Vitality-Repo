
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    }



    return(

      <div className='flex items-center justify-center'>
      <Form onSubmit={handleSubmit} className=' bg-slate-500 rounded-md p-2 border-zinc-950 border-3'>
      <Form.Group className="mb-3" controlId="formGroupUserName">
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

