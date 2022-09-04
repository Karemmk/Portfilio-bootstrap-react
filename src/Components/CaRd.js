import React from "react";
import { Button } from "reactstrap";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-scroll";

const CaRd = ({ image, title, text }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div
      className="border border-warning border-1 rounded text-center  p-3"
      style={{
        background: darkMode ? "#6c757d" : "none"
      }}
    >
      <div>
        <img top className="CardImage mb-2" src={image} alt="" />

        <div className="">
          <div className="fs-4 ">{title}</div>
          <div className="txt">{text}</div>
          <Link to="about" A spy={true} smooth={true}>
            <Button className="bg-info b-none">learn more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaRd;
