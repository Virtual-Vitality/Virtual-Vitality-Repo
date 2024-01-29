import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from "react-icons/fa"

const Scheduler = () => {
    const [selectedDate, setselectedDate] = useState(null)
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