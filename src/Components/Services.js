import React from "react";
import { Button } from "reactstrap";
import CaRd from "./CaRd";
import { motion } from "framer-motion/dist/framer-motion";
import { useSelector } from "react-redux";

const Services = () => {
  const traChk = useSelector((state) => state.translate.value);

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
        <h2 className="mt-5">{traChk ? "Mon Génial" : "My Awesome"}</h2>
        <h3 className="text-warning">Services</h3>
        <span className="p-4">
          {traChk
            ? "Ce sont mes services pour le front-end et le back-end avec reactjs pour une application à page unique."
            : " This my services for front-end and back-end with reactjs for single page app ."}
        </span>
        <motion.div
          whileInView={{ y: 50, scale: 1.5, duration: 3 }}
          className="mt-2"
          initial={{ y: -10 }}
        >
          <a
            href={
              traChk
              ? "https://drive.google.com/file/d/1Kbt1ydPTKZvxkK-RwyWb0Wfc-71Pe8cJ/view?usp=drivesdk"
              : "https://drive.google.com/file/d/1KblqhiwcE2EdtbpgrQaUIvCAYA7z2O0Z/view?usp=drivesdk"  
            }
            target="_blank"
            and
            rel="noopener noreferrer"
            download
          >
            <Button className="rounded-pill" color="warning">
              {traChk ? "Mon CV" : " My Resume"}
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
              title={traChk ? "Motif" : "Design"}
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
              title={traChk ? "Développeur" : "Developer"}
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
              text="Bootstrap,Reactstrap,Material UI,Font-awesome,Bootstrap-social,Framer-Motion,Typical..."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Services;
