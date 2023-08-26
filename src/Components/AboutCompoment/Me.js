import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function Me({ traChk }) {
  return (
    <div
      className="justify-content-around align-items-center text-center  ms-1 row "
      style={{ overflow: "hidden" }}
    >
      <motion.img
        whileInView={{ scale: 1, duration: 3 }}
        initial={{ scale: 0 }}
        className="bg-info border rounded-circle col-12 col-md-5 p-0 mt-2 "
        src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/karem_y5l32v.png"
        alt="karem"
      />
      <motion.span
        whileInView={{ scale: 1, duration: 3 }}
        initial={{ scale: 0 }}
        className="karem col-12 col-md-5 fs-4 p-0"
      >
        {traChk
          ? "Bonjour, je m'appelle Karem Mkacher et je suis développeur Web Full-Stuck. Cela fait plus 3 ans, je travaille en tant que développeur Web, j'ai développé de nombreux sites Web et j'ai également fourni mes services aux étudiants en préparant leurs projets dès que possible en tant que pigiste, j'ai fait partie d'un très bon projet de conception Web."
          : " Hi There, I'm Karem Mkacher and I am Full-Stuck Web Developer. It's been more than 3 years, I'm working as web developer,I have developed many websites and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design project."}
      </motion.span>
    </div>
  );
}
