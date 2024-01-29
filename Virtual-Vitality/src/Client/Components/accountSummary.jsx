//create route and attach it to navbar at bottom/add new route to array and widget.
import ListGroup from 'react-bootstrap/ListGroup';

function summaryFunc() {
    /*Create 2 get requests one to /auth/login to pull user's info and display it in lists format within a label,
    also api/appoitments to populate apt info with coach name too */

  return (
    <ListGroup>
      <ListGroup.Item>Username Info</ListGroup.Item>
      <ListGroup.Item>Password Info</ListGroup.Item>
      <ListGroup.Item>Email Info</ListGroup.Item>
      <ListGroup.Item>Name info</ListGroup.Item>
      <ListGroup.Item>Appointment Info</ListGroup.Item>
    </ListGroup>
  );
}

export default summaryFunc;