import React from "react";
import { Button } from "reactstrap";
import FloatingDiv from "./Const/FloatingDiv";
import "../styles.css";
import { motion } from "framer-motion/dist/framer-motion";
import Typical from "react-typical";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import {BsFacebook,BsGithub,BsGoogle} from "react-icons/bs";

const Home = () => {
  const traChk = useSelector((state) => state.translate.value);
  
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="row position-relative ">
      <div className="col-12 col-md-6 mt-5 d-flex position-relative">
        <div
          className="test "
          style={{
            width: "21rem",
            height: "11rem",
            position: "absolute",
            radius: "50%",
            filter: "blur(72px)",
            background: "#C1F5FF",
            left: "-15%",
            top: "0%"
          }}
        ></div>

        <div className="mx-5">
          <h3 className="fw-bold ">{traChk? 'Salut! je suis':'Hi! I am'}</h3>
          <h2 className="fw-bold text-warning fs-1">Karem Mkacher</h2>
          <p>
            <Typical
              loop={Infinity}
              steps={[
                "I am",
                1000,
                "Web Desginer",
                1000,
                "MERN-Stack",
                1000,
                "Web Developer",
                1000
              ]}
            />
          </p>
          <br></br>
          <motion.div whileInView={{ x: 50 }} transition={{ duration: 1 }}>
            <Link to="contact" spy={true} smooth={true}>
              <Button className="mt-2 rounded-pill " color="warning">
               {traChk?'Engagez moi': 'Hire Me'}
              </Button>
            </Link>
          </motion.div>
          <div className="col-12 d-flex mt-5 mb-5 ms-md-5">
            <a
              target="_blank"
              and
              rel="noopener noreferrer"
              className="btn btn-social-icon btn-google btn-lg text-warning "
              href="mailto: karemmkach@gmail.com"
            >
              <BsGoogle className='mt-1'/>
            </a>
            <a
              target="_blank"
              and
              rel="noopener noreferrer"
              className="btn btn-social-icon btn-github btn-lg mx-4 text-warning"
              href="https://github.com/Karemmk"
            >
             <BsGithub className='mt-1'/>
            </a>
            <a
              target="_blank"
              and
              rel="noopener noreferrer"
              className="btn btn-social-icon btn-facebook btn-lg text-warning"
              href="https://www.facebook.com/karem.mkacher"
            >
              <BsFacebook className='mt-1'/>
            </a>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 d-flex position-relative">
        <img
          className="position-absolute "
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929087/Home/Vector1_a5c86s.png"
          alt="vector1"
          width="90%"
        />
        <img
          className="position-absolute ms-3 "
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929087/Home/Vector2_oryeho.png"
          alt="vector2"
          width="85%"
        />
        <img
          width="47%"
          className="position-absolute offset-2 rounded-pill"
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929089/Home/boy_wfhuom.png"
          alt="boy"
        />

        <div className="offset-7 mt-md-5 ">
          <FloatingDiv
            image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929086/Home/crown_gespiz.png"
            text1={traChk? "Développeur":"Web"}
            text2={traChk?"Web" :"Developer"}
            condition={false}
          />
        </div>
        <motion.div
          initial={{ left: "-10%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          className="position-absolute d-flex ms-5 translate-middle-x "
        >
          <img
            src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929088/Home/glassesimoji_fnhmkw.png"
            alt="emoji"
            width="60%"
          />
        </motion.div>
        <div className="floatingdiv">
          <FloatingDiv
            image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929087/Home/thumbup_w7imio.png"
            text1={traChk? "Création de sites web":"Web Design"}
            text2={traChk? "Accorder":"Award"}
            condition={false}
          />
        </div>
        <div
          className="test "
          style={{
            width: "21rem",
            height: "11rem",
            position: "absolute",
            radius: "50%",
            filter: "blur(72px)",
            background: "#C1F5FF",
            left: "-15%",
            top: "40%"
          }}
        ></div>
        <div
          className="test "
          style={{
            width: "21rem",
            height: "11rem",
            position: "absolute",
            radius: "50%",
            filter: "blur(72px)",
            background: "rgb(238 210 255)",
            top: "0%",
            left: "50%"
          }}
        ></div>
      </div>
    </div>
  );
};
export default Home;
