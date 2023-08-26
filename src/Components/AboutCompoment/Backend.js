import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {useSelector} from "react-redux";

export default function BackEnd({traChk}) {
  const darkMode = useSelector((state) => state.darkMode.value);
  
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="mt-3 d-block d-md-flex text-center justify-content-center mx-5"
      >
        <div 
         style={{
        width:"250px", 
        background: darkMode ? "#495057" : "#e9ecef" }}
        className="d-flex fs-1 pb-2 rounded-pill mt-md-5">
        <FaNodeJs 
        style={{width :"60px"}}
        className="mt-2 text-danger"/>
        <div >Nodejs</div>
        </div>
        
        <div 
         style={{
        width:"250px", 
        background: darkMode ? "#495057" : "#e9ecef"}}
        className="d-flex fs-1 pb-2 rounded-pill mx-md-4 mt-5">
        <SiExpress 
        style={{width :"60px"}}
        className="mt-2 text-info"/>
        <div>Express</div>
        </div>
        
        <div 
         style={{
        width:"250px",         
        background: darkMode ? "#495057" : "#e9ecef" }}
        className="d-flex fs-1 pb-2 rounded-pill mx-md-4 mt-5">
        <DiMongodb 
         style={{width :"60px"}}
        className="mt-2 text-primary"/>
        <div>MongoDB</div>
        </div>
        
      </motion.div>
      <div className="d-none d-md-block d-lg-block d-xl-block text-center m-md-5 mb-md-2 fs-3 p-md-5">
       {traChk?
       "En tant que développeur beck-end, je me suis concentré sur le développement côté serveur en utilisant NodeJS, Express et MongoDB. J'ai utilisé NodeJS, les modules Node et le framework Express pour développer des applications côté serveur basées sur NodeJS et j'ai utilisé MongoDB comme base de données."
       :
       " As beckend developer ,I did concentrated on the server-side  development using NodeJS, Express and MongoDB. I used NodeJS,Node modules and Express framework for developing server-side applications based upon NodeJS and I used MongoDB like database ."}
      </div>
    </div>
  );
}
