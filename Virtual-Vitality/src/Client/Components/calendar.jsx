import DatePicker from "react-datepicker";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown';

const Scheduler = () => {
  const Jamari = 5
    const [selectedDate, setselectedDate] = useState(null)
    const [selectedCoach, setselectedCoach] = useState("")
    const handleSubmit = async(e) =>{
    try {
      //get/coach requests
      //me route to find current user 
      //.map coaches into dropdown menu
      // const result = await axios.post(`/auth/appointments`,{
      //   "date": selectedDate,
      //   "coachId":selectedCoach,
      //   "userId": selecteduserId
      // });
  
} catch (error) {
  console.log(error)
}
    }
    //console.log(result)
    
    return (
      <>
      <div className= " ps-0 justify-center flex bg-slate-700 rounded-md p-2"> 
      <Form 
      //onSubmit={handleSubmit}
      className= " align-self">
        <h1 className=" underline bg-slate-700 text-cyan-50">Schedule your Appointment here</h1>
        <br/>
        <br/>
        <br/>
        <br/>
      <label className=" align-middle bg-black text-cyan-50">
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
      <br/>
      <br/>
      <br/>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose your Coach
      </Dropdown.Toggle>
        
       {/* onChange={(event)=>{
          setUserNameLoginInput(event.target.value)} */}
      <Dropdown.Menu>
        <Dropdown.Item >Sebastian</Dropdown.Item>
        <Dropdown.Item >Jamari</Dropdown.Item>
        <Dropdown.Item >Peng</Dropdown.Item>
        <Dropdown.Item >Jaylen</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <br/>
    <br/>
    <br/>
    <br/>
      <button className=" bg-black text-cyan-50 rounded-md p-1">Click me to submit form</button>
      </Form>
      </div>
      </>
      )
}
 export default Scheduler