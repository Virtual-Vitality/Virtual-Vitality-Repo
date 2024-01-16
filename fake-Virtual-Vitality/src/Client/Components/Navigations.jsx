import { useState} from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Example_function from "./Workouts-page";
import Example_function2 from "./SingleWorkout-page";
import Example_function3 from "./Registration-page";
import Example_function4 from "./Nutrition-page";
import Example_function5 from "./Login-Page";
import Example_function6 from "./Home-page";
import Example_function7 from "./Exercise-page";
import Example_function8 from "./Coaches-page";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [//This is images and titles
    {title: "Dashboard", src: "home1", path:('/')},
    {title: "Coaches", src: "messages2", path:('/coaches')},
    {title: "Nutrition", src: "user1", path:('/Nutrtition'), gap:true},
    {title: "Register", src: "calendar2", path:('/Registration')},
    {title: "Login", src: "search", path:('/Login-page')},
    {title: "Single-Workouts", src: "analytics", path:('/Single-Workouts-page')},
    {title: "Workout List", src: "folder1", path:('/Workouts-page'), gap : true},
    {title: "Exercise Page", src: "setting", path:('/Exercise-page')},
  ];
//STYLING below
  return (
    <div className=" flex">
      <div
        className={` ${
          open ? " h-auto w-72 " : "w-20 "
        } bg-slate-500 h-screen p-3  pt-8 relative duration-300`}
      >
        <img
          src="./src/Assets/mastercontrol.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/Assets/icons8-dumbbell-50.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to = {Menu.path}>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 
              } `}
            >
              <img src={`./src/Assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
              </Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex p-10">
       
       <Routes>
        <Route path="/"element={<Example_function6/>} />
        <Route path="/coaches"element={<Example_function8/>} />
        <Route path="/Nutrition"element={<Example_function4/>} />
        <Route path="/Registration"element={<Example_function3/>} />
        <Route path="/Login-page"element={<Example_function5/>} />
        <Route path="/Single-Workouts-page"element={<Example_function2/>} />
        <Route path="/Workouts-page"element={<Example_function/>} />
        <Route path="/Exercise-page"element={<Example_function7/>} />
      </Routes> 
      </div>
    </div>
  );

  //ROUTES go here 
};
export default Nav;