//create route and attach it to navbar at bottom/add new route to array and widget.
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router";

function AccountSummary() {
  /*Create 2 get requests one to /auth/login to pull user's info and display it in lists format within a label,
    also api/appoitments to populate apt info with coach name too */
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: result } = await axios.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result)
        setUser(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUser();
  }, [token]);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <ListGroup>
      <ListGroup.Item>Name: {user.name}</ListGroup.Item>
      <ListGroup.Item>Username: {user.userName}</ListGroup.Item>
      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      <ListGroup.Item>Appointments: {user.appointments}</ListGroup.Item>
      <Button variant="danger" onClick={logOutHandler}>
        Logout
      </Button>{" "}
    </ListGroup>
  );
}

export default AccountSummary;
