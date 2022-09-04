import React from "react";
import { Button } from "reactstrap";
import CaRd from "./CaRd";
import { motion } from "framer-motion/dist/framer-motion";

const Services = () => {
  return (
    <div className="row mt-5 pt-5" id="services">
      <div className="col-12 col-md-5 text-center mt-5 pt-5 position-relative">
        <div
          className="test "
          style={{
            width: "21rem",
            height: "11rem",
            position: "absolute",
            radius: "50%",
            filter: "blur(72px)",
            background: "rgb(238 210 255)",
            top: "10%",
            left: "5%"
          }}
        ></div>
        <h2 className="mt-5">My Awesome</h2>
        <h3 className="text-warning">Services</h3>
        <span className="p-4">
          This my services for front-end and back-end with reactjs for single
          page app .
        </span>
        <motion.div
          whileInView={{ y: 90, scale: 1.5, duration: 3 }}
          className="mt-2"
        >
          <a
            href="https://drive.google.com/file/d/1dTNOy-RYOnKa5Tq0kxtlR1gfceq-_UtT/view?usp=drivesdk"
            target="_blank"
            and
            rel="noopener noreferrer"
            download
          >
            <Button className="rounded-pill" color="warning">
              Dowload CV
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="col-12 col-md-7 mt-5 position-relative ">
        <div
          className="test "
          style={{
            width: "21rem",
            height: "11rem",
            position: "absolute",
            radius: "50%",
            filter: "blur(72px)",
            background: "#C1F5FF",
            left: "10%",
            top: "40%"
          }}
        ></div>
        <div className="row mt-5 p-2">
          <motion.div
            whileInView={{ scale: 1, duration: 3 }}
            initial={{ scale: 0 }}
            className="offset-6 col-6 mt-2"
          >
            <CaRd
              image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929150/Services/heartemoji_ojpxfv.png"
              title="Design"
              text="Photoshop,Picart,Adobe,Adobe XD,Sigma,CSS,SCSS..."
            />
          </motion.div>
          <motion.div
            whileInView={{ x: 25, duration: 3 }}
            initial={{ x: -50 }}
            className="col-6 mt-2 "
          >
            <CaRd
              image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929150/Services/glasses_jdlqql.png"
              title="Developer"
              text="html,css,javascript,react,react-native,Nodejs,MongoDB..."
            />
          </motion.div>
          <motion.div
            whileInView={{ y: -60, duration: 3 }}
            className="offset-6 col-6  mt-2 postion-asolute"
          >
            <CaRd
              image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929150/Services/humble_sgbrpk.png"
              title="UI/UX"
              text="Bootstrap,Reactstrap,Material UI,font-awesome..."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Services;
