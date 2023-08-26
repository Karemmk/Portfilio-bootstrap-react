import React from "react";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useSelector, useDispatch } from "react-redux";
import { nezla } from "../../Redux/darkSlice";

const Toggle = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(nezla());
  };

  return (
    <div
     style={{cursor:"pointer"}}
     className="d-flex justify-content-between border border-3 border-warning rounded-pill position-relative" onClick={handleClick}>
      <Moon className="w-100 h-100 text-warning p-1"/>
      <Sun className="w-100 h-100 text-warning p-1"/>
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="position-absolute bg-warning w-50 h-100 border-waring rounded-circle"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
