//create route and attach it to navbar at bottom/add new route to array and widget.
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router';

function AccountSummary( ) {
    /*Create 2 get requests one to /auth/login to pull user's info and display it in lists format within a label,
    also api/appoitments to populate apt info with coach name too */
    const navigate = useNavigate();

    const [token, setToken] = useState(
      window.localStorage.getItem("token")
    )

    const logOutHandler = () => {
      localStorage.removeItem("token");
      setToken(null);
      navigate("/");
    }

  return (
    <ListGroup>
      <ListGroup.Item>Username Info</ListGroup.Item>
      <ListGroup.Item>Password Info</ListGroup.Item>
      <ListGroup.Item>Email Info</ListGroup.Item>
      <ListGroup.Item>Name info</ListGroup.Item>
      <ListGroup.Item>Appointment Info</ListGroup.Item>
      <Button variant="danger" onClick={logOutHandler}>Logout</Button>{' '}
    </ListGroup>
  );
}

export default AccountSummary;