import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function Skills() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const dIm = [
    {
      id: 1,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669318227/Skills/instagramClone_wtwuuh.gif",
      adress: "https://github.com/Karemmk/insta-clone",
      alternativetext: "IntagramClone Front with TailwindCSS"
    },
    {
      id: 2,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669313755/Skills/e-commerce_wmrl8o.gif",
      adress: "https://github.com/Karemmk/e-commerce",
      alternativetext: "E-Commerce-Context Bootstrap"
    },
    {
      id: 3,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669311401/Skills/resturant-react_dofxje.gif",
      adress: "https://github.com/Karemmk/coursera-full-stack-react",
      alternativetext: "Mern stack Resturant Redux-Bootstrap"
    },
    {
      id: 4,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669297271/Skills/MK-MEDIA_d3tceu.gif",
      adress: "https://github.com/Karemmk/mk-Media-clone",
      alternativetext: "Mern stack Mk social Media MaterialUI-Redux/toolkit"
    },
    {
      id: 5,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669291869/Skills/NetflixClone_u6agyc.gif",
      adress: "https://github.com/Karemmk/NetflixClone",
      alternativetext: "NetflixClone front with TailwindCSS"
    },
    {
      id: 6,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/c_scale,h_725,w_954/v1662544912/Skills/chatApp_rslms0.png",
      adress: "https://github.com/Karemmk/chatApp",
      alternativetext: "ChatApp TailwindCSS-Firebase-GoogleAuth"
    },
    {
      id: 7,
      url:
        "https://res.cloudinary.com/dyx1jeydm/image/upload/v1669547662/Skills/portfolio_ye9ajd.gif",
      adress: "https://github.com/Karemmk/Portfilio-bootstrap-react",
      alternativetext: "Portfolio Bootstrap-Redux/toolkit"
    }
  ];
  const [imUrl, setImUrl] = useState("");
  const dark = useSelector((state) => state.darkMode.value);
  const traChk = useSelector((state) => state.translate.value);
  const [images, setImages] = useState(dIm);

  
  useEffect(() => {
    fetch(
        "https://karemmk.github.io/portfolio2api/portfolio2api.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.skills[0].images);
      });
  }, [images]);

  return (
    <div
      className="swiper-container text-center mt-5 mb-5 pb-5 pt-5 position-relative p-md-4"
      id="skills"
    >
      <Modal size="xl" centered isOpen={modal} toggle={toggle} {...imUrl}>
        <ModalBody
          style={{ background: dark ? "#212529" : "" }}
          toggle={toggle}
        >
          <img className="flex col-12" src={imUrl} alt="" />
        </ModalBody>
      </Modal>

      <div className="fs-2 mt-5 pt-5">
        {traChk ? "Mes Projets" : "My Projects"}
      </div>
      <div className="fs-3 text-warning mb-5 ">React Apps</div>
      <div
        className="test "
        style={{
          width: "21rem",
          height: "11rem",
          position: "absolute",
          radius: "50%",
          filter: "blur(72px)",
          background: "rgb(238 210 255)",
          top: "50%",
          left: "10%"
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
          background: "#C1F5FF",
          top: "0%",
          left: "50%"
        }}
      ></div>

      <>
        <Swiper
          className="mb-5 pb-4"
          centeredSlides={true}
          navigation
          pagination
          loop={true}
          spaceBetween={40}
          slidesPerView={1.5}
          breakpoints={{
            640: {
              slidesPerView: 2.5
            },
            768: {
              slidesPerView: 2.75
            },
            1080: {
              slidesPerView: 3.25
            },
            1280: {
              slidesPerView: 3.75
            }
          }}
        >
          {images.map((photo, index) => (
            <SwiperSlide key={photo.index}>
              <img
                className="rounded-8 border border-warning cursor-pointer"
                src={photo.url}
                alt={photo.alternativetext}
                onClick={() => {
                  toggle();
                  setImUrl(photo.url);
                }}
              />

              <a
                href={photo.adress}
                target="_blank"
                and
                rel="noopener noreferrer"
              >
                <p className="mt-3">{photo.alternativetext}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
