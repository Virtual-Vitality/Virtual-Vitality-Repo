import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from "react-icons/fa"

const Scheduler = () => {
    //useState to track handle submit of coach into post request
    const [selectedDate, setselectedDate] = useState(null)
    return (
      
      <div className= " flex items-center justify-center  bg-slate-700 rounded-md p-3"> 
        <form>
        <h1 className=' bg-black text-cyan-50'>Schedule Your Appointment</h1>
        <br />
        <br />
      <DatePicker 
       className="bg-slate-500 rounded-md p-2"
      selected ={selectedDate} 
      onChange={date => setselectedDate(date)}
      dateFormat = "MM/dd/yyyy"
      minDate={new Date()}
      filterDate={date => date.getDay() != 6 && date.getDay() != 0}
      isClearable
      showTimeSelect
      />
      {console.log(selectedDate)}
      <br />
      <br />
      <DropdownButton id="dropdown-basic-button" title="Choose Your Coach">
      <Dropdown.Item href="#/action-1">Jamari</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Jaylen</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Sebastian</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Peng</Dropdown.Item>
    </DropdownButton>
      <br />
      <br />
      <button className=' bg-black text-white p-2 rounded-md'>Submit</button>
      </form>
      
      </div>
      
      )
}
 export default Scheduler