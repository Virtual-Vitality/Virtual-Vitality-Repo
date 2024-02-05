import DatePicker from "react-datepicker";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from "react-icons/fa"
import e from "cors";
import axios from "axios";

const Scheduler = () => {

    const [coaches, setCoaches] = useState([]);
    const [selectedDate, setselectedDate] = useState(null);
    const [selectedCoach, setSelectedCoach] = useState("")
    const [user, setUser] = useState("");
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    /* Create /me route request to pull userId from auth-token
    when loaded onto page if true assign coachId to options list,
    then use handleSubmit to input userID + CoachId into appointments endpoint  */
    useEffect(() => {
      const getUser = async () => {
        try {
          const { data: result } = await axios.get("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(result);
        } catch (error) {
          console.error(error.message);
        }
      };
      getUser();
    }, [token]);
//Api/coach get request to pull all coahes ID 
    useEffect(() => {
      async function getCoaches() {
        try {
          const { data: foundCoaches } = await axios.get("/api/coaches");
          setCoaches(foundCoaches);
        } catch (error) {
          console.error(error);
        }
      }
      getCoaches();
    }, []);

    //handleSubmit starts here|Attach coach ID to drop downs with Names
    const dropdownHandleCoach = (coach)=>{
      setSelectedCoach(coach)
    
    } 
    //appointments
    const makeApt = async(event)=>{
      event.preventDefault();
      try {
        const result = await axios.post("/api/appointments", {
           
            date : selectedDate ,
            coachId : selectedCoach.id ,
            userId : user.id
          
        })
      } catch (error) {
        console.log("error",error)
      }
    }
  
    return (
      <div className="flex items-center justify-center">
        <form>
        <div className= " flex items-center justify-center  bg-slate-700 rounded-md p-5 flex-col border-zinc-950 border-3 "> 
        <label className=" bg-black text-cyan-50">
          <h1>Scheduling Page</h1>
        
        <DatePicker 
         className="bg-slate-500 rounded-md p-2"
        selected ={selectedDate} 
        onChange={date => setselectedDate(date)}
        dateFormat = "MM/dd/yyyy"
        minDate={new Date()}
        filterDate={date => date.getDay() != 6 && date.getDay() != 0}
        isClearable
       />
        </label>
        
        <DropdownButton id="dropdown-basic-button" title={selectedCoach? selectedCoach.name : "Pick your coach"}>
          {coaches.map((coach)=>{ 
            return(<Dropdown.Item onClick= {()=>dropdownHandleCoach(coach)} >{coach.name}</Dropdown.Item>)
           })}
        </DropdownButton>

        <button 
      onClick={makeApt}
        className=" rounded-md  bg-black text-cyan-50 p-2">Make Appointment</button>
      </div>
      </form>
      </div>
      )
}
 export default Scheduler