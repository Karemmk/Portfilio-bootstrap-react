import React from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const Footer = () => {
  const traChk = useSelector((state) => state.translate.value);

  return (
    <div className="footer row  text-center pt-5 ">
      <div className="col-12 offset-md-1 col-sm-2  mt-5 pt-5">
        <h5 className="mt-5 mt-sm-0 pt-5 pt-sm-0 ">
          {traChk ? "LIENS" : "LINKS"}
        </h5>
        <ul className="list-unstyled">
          <li>
            <Link to="navbar" spy={true} smooth={true}>
              <a href="/">{traChk ? "Accueil" : "Home"}</a>
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true}>
              <a href="/">{traChk ? "Services" : "Services"}</a>
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true}>
              <a href="/">{traChk ? "Compétences" : "Skills"}</a>
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              <a href="/">{traChk ? "À propos" : "About"}</a>
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>
              <a href="contact">{traChk ? "Contactez" : "Contact"}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-5 pt-sm-5  mt-sm-5">
        <h5>{traChk ? "Mon Adresse" : "My Address"}</h5>
        <address>
          Rue BenAchour,Chebba
          <br />
          Mahdia
          <br />
          Tunisia
          <br />
          <a href="tel:+21697892244" className="fs-5 ">
            <BsFillTelephoneFill />: +21697892244
          </a>
          <br />
          <a href="mailto: karem-mkacher@outlook.com" className="">
            <GrMail className="fs-4" />: karem-mkacher@outlook.com
          </a>
        </address>
      </div>
      <div className="col-12 col-sm-4 align-self-center  mt-sm-5 pt-sm-5">
        <div className="text-center  ">
          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            className="btn btn-social-icon btn-gmail m-2 bg-white text-warning"
            href="mailto: karemmkach@gmail.com"
          >
            <BsGoogle className="mt-1" />
          </a>
          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            className="btn btn-social-icon btn-facebook m-2 bg-white text-warning"
            href="https://www.facebook.com/karem.mkacher"
          >
            <BsFacebook className="mt-1" />
          </a>

          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            className="btn btn-social-icon btn-github m-2 bg-white text-warning"
            href="https://github.com/Karemmk"
          >
            <BsGithub className="mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
