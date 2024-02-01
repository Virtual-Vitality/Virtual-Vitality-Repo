import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from "react-icons/fa"
import e from "cors";
import axios from "axios";

const Scheduler = () => {
    const [selectedDate, setselectedDate] = useState(null);
    const [selectedCoachId, setselectedCoachId] = useState("")
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
          console.log(result)
          setUser(result);
        } catch (error) {
          console.error(error.message);
        }
      };
      getUser();
    }, [token]);
    // //handleSubmit starts here 
    // const handleSubmit = async(e) =>{
    //   e.preventDefault
    //   try {
    //     const getTokenId = await axios.get("/")
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    return (
      <>
      <div className= " flex items-center justify-center  bg-slate-700 rounded-md p-2"> 
      <label className=" bg-black text-cyan-50">
        <p>This is the calendar</p>
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
      </div>
      </>
      )
}
 export default Scheduler