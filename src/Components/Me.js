import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function Me() {
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
        className="col-12 col-md-5 fs-4 p-0"
      >
        Hi There, I'm Karem Mkacher and i am Full-Stuck Web Developer. It's been
        2 years, I'm working as web developer,i have developed many websites and
        also provided my services to college students by getting their projects
        ready ASAP as a freelancer I have been part of some very good web design
        project.
      </motion.span>
    </div>
  );
}
