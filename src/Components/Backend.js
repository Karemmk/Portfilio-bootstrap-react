import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function BackEnd({traChk}) {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="text-center"
      >
        <img
          className="col-12 col-md-4 p-3 mt-2 rounded-pill"
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/nodejs_eklwxk.png"
          alt="nodejs"
        />
        <img
          className="col-12 col-md-4 mt-2 p-2  rounded-pill"
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929663/About/expressjs_lzi30s.png"
          alt="express"
        />
        <img
          className="col-12 col-md-4 p-3 mt-2 rounded-pill"
          src="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929681/About/mogodb_ube6v1.png"
          alt="mongodb"
        />
      </motion.div>
      <div className="d-none d-md-block d-lg-block d-xl-block text-center m-md-5 mb-md-2 fs-3 p-md-5">
       {traChk?
       "Je suis un développeur beckend junior, je me suis concentré sur le développement côté serveur en utilisant NodeJS, Express et MongoDB. J'ai utilisé NodeJS, les modules Node et le framework Express pour développer des applications côté serveur basées sur NodeJS et j'ai utilisé MongoDB comme base de données."
       :
       " I'm junior beckend developer ,I did concentrated on the server-side  development using NodeJS, Express and MongoDB. I used NodeJS,Node modules and Express framework for developing server-side applications based upon NodeJS and I used MongoDB like database ."}
      </div>
    </div>
  );
}
