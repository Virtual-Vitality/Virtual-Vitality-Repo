import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const Example_function3 = () => {
  const navigate = useNavigate();
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [userNameInput, setuserNameInput] = useState("");
  const [nameInput, setnameInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`/auth/Register`, {
        name: nameInput,
        email: emailInput,
        userName: userNameInput,
        password: passwordInput,
      });
      window.localStorage.setItem("token", result.data.token)
      console.log(result.data);navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className=" bg-slate-500 rounded-md p-2">
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
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};
export default Example_function3;
