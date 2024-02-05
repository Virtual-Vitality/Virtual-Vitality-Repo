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
  const [appointments, setAppointments] = useState("")

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: result } = await axios.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(result);
        const {data: response} = await axios.get(`/api/users/${result.id}`);
        setAppointments(response.appointments)
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
    <div className="flex items-center justify-center">
      <label className=" bg-slate-400 p-4">
    <ListGroup>
      <ListGroup.Item>Name: {user.name}</ListGroup.Item>
      <br/>
      <ListGroup.Item>Username: {user.userName}</ListGroup.Item>
      <br/>
      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      <ListGroup>
        Appointments:
        {appointments.length > 0 && appointments.map((appointment) => {
          const date = appointment.date.slice(0,10);
          const split = date.split("-");
          const final = `${split[1]}-${split[2]}-${split[0]}`;      
          return <ListGroup.Item key={appointment.id}>Date: {final} Coach: {appointment.coach.name}</ListGroup.Item>
        })}
      </ListGroup>
      <Button variant="danger" onClick={logOutHandler}>
        Logout
      </Button>{" "}
      
    </ListGroup>
    </label>
    </div>
  );
}

export default AccountSummary;
