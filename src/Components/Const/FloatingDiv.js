import React from "react";
import {motion} from "framer-motion/dist/framer-motion";
import { useSelector, useDispatch } from 'react-redux';

  const transition = { duration: 2, type: "spring" };
const FloatingDiv = ({ image, text1, text2,condition }) => {
  const darkMode = useSelector ((state)=> state.darkMode.value);
    return (
      <motion.div
       initial={{ left: condition? "" :"70%",
       }}
          whileInView={{ 
            left: condition?  "" : "57%" ,
            width: condition? "10rem" : "",
            }}           
          transition={condition? "" : `${transition}`}
       className="d-flex p-1 justify-content-around rounded-pill  align-items-center position-absolute "
        style={{
        background: darkMode ? "#495057" : "#e9ecef",}}
        >
        <img width="60" src={image} alt="" />
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </motion.div>
    );
  }
export default FloatingDiv;
