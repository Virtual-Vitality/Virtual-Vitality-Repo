
import React,{ useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
//import { useAuth } from './AuthContext';

const Login = () => {
  return (
    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;

