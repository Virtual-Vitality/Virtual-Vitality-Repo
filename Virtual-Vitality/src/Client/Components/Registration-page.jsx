import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';


const Example_function3= () =>{
  const navigate = useNavigate();
  const [emailInput,setemailInput] = useState('');
  const [passwordInput,setpasswordInput] = useState('');
  const [addressInput,setaddressInput] = useState('');
  const [address2Input,setaddress2Input] = useState('');
  const [cityInput,setcityInput] = useState('');
  const [stateInput,setstateInput] = useState('');
  const [zipInput,setzipInput] = useState('');
  const [accountnumInput,setaccountnumInput] = useState('');
  const [cvvInput,setcvvInput] = useState('');
  const [expInput,setexpInput] = useState('');

  const handleSubmit = async(event) =>{
    e.prevent.default();
    try{
      /*const result = axios.post(`/Register route`) */
    }catch{

    }
    return(
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Account Number</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>exp date</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>




      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}}
export default Example_function3