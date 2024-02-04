
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Example_function3 = () => {
  const navigate = useNavigate();
  //Registration Form Staete Management
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [userNameInput, setuserNameInput] = useState("");
  const [nameInput, setnameInput] = useState("");
  //Payment Modal Open/Close/State Management
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///me route auth/token input
  const [user, setUser] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  //Payment Modal Axios Input State Management
   
  /*
  {   Create Pop-up windowm after registration          
    cardHolderName 
    cardNumber     
    expiration     
    cvv            
    zipCode  
    } Reference    
    {user           
    userId
    }   
  */

 //Reg Forms starts HERE
  const RegistrationSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`/auth/Register`, {
        name: nameInput,
        email: emailInput,
        userName: userNameInput,
        password: passwordInput,
      });
      window.localStorage.setItem("token", result.data.token)
      console.log(result.data); //navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  //Reg Form Ends HERE
  //Auth/id get route here

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: result } = await axios.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //console.log(result.id)
        setUser(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUser();
  }, [token]);
  console.log(user.id)
  //end of /me route to get user.id
  //Start of /payment route to store payment



  //Visual Components of page start Here
  return (
    <div className='flex items-center justify-center p-5'>
    {/* Reg Form Visual */}
    <Form onSubmit={()=>{
       RegistrationSubmit();
       handleShow();
    }} className=" bg-slate-500 rounded-md p-5 border-zinc-950 border-3">
      <h1>Registration Form</h1>
      <br/>
      <Row>
      
        <Col>
          <Form.Control
            placeholder="Full Name"
            onChange={(event) => {
              setnameInput(event.target.value);
            }}
          />
        </Col>
        
        <Col>
          <Form.Control
            placeholder="Username"
            onChange={(event) => {
              setuserNameInput(event.target.value);
            }}
          />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <Form.Control
            placeholder="Email"
            onChange={(event) => {
              setemailInput(event.target.value);
            }}
          />
        </Col>
       
        <Col>
          <Form.Control
            placeholder="Password"
            onChange={(event) => {
              setpasswordInput(event.target.value);
            }}
          />
        </Col>
      </Row>
      <br/>
      <Button 

      onClick={(event)=>{
        RegistrationSubmit(event);
        handleShow();
        }}>Submit</Button>
    </Form>
    {/* Visual Reg form Ends */}
    {/* Put modal Function(payment function) */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* Modal start */}
          <Modal.Header closeButton>
          <Modal.Title>Payment Page</Modal.Title>
          </Modal.Header>
         <Modal.Body>
         <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="CardHolder Name" />
        </Form.Group>
      <Row>
        <Col>
          <Form.Control placeholder="CardNumber" />
        </Col>
        <Col>
          <Form.Control placeholder="Zip-code" />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <Form.Control placeholder="Exp" />
        </Col>
  
        <Col>
          <Form.Control placeholder="Cvv" />
        </Col>
      </Row>
      <br/>

    </Form>
          
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Confirm Payment
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
      </div>
  );
};
export default Example_function3;

