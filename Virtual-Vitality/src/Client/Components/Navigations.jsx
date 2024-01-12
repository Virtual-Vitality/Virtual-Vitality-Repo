import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [//This is images and titles
    {title: "Dashboard", src: "home1"},
    {title: "Inbox", src: "messages2"},
    {title: "Accounts", src: "user1", gap:true},
    {title: "Schedule", src: "calendar2"},
    {title: "Search", src: "search"},
    {title: "Analytics", src: "analytics"},
    {title: "Files", src: "folder1", gap : true},
    {title: "Settings", src: "setting"},
  ];
//STYLING below
  return (
    <div className="flex">
      <div
        className={` ${
          open ? " h-max w-72 " : "w-20 "
        } bg-slate-500 h-screen p-5  pt-8 relative duration-300`}
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
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/Assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
  //ROUTES go here 
};
export default Nav;