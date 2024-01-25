import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Scheduler = () => {
    const [selectedDate, setselectedDate] = useState(null)
    return (
        <DatePicker 
        selected ={selectedDate} 
        onChange={date => setselectedDate(date)}
        dateFormat = "MM/dd/yyyy"
        minDate={new Date()}
        filterDate={date => date.getDay() != 6 && date.getDay() != 0}
        isClearable
        scrollableMonthYearDropdown
        />
      )
}
 export default Scheduler