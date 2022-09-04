import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Navigation, Pagination, Controller, Thumbs, } from "swiper";
import "swiper/swiper-bundle.css";




SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function Skills() {
  const images = [
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929214/Skills/react-web_kfxcuz.png",
      alternativeText: "Photo One",
      adress: "https://github.com/Karemmk/coursera-full-stack-react/tree/main/coursera-full-stack-react"
    },
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929217/Skills/p-filio_e12jqw.png",
      alternativeText: "Photo Two",
      adress:"https://github.com/Karemmk/Portfilio-bootstrap-react"
    },
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929211/Skills/e-commerce_k3jaqn.png",
      alternativeText: "Photo Three",
      adress:"https://github.com/Karemmk/e-commerce"
    }
  ];
  

  return (
    <div className="swiper-container text-center mt-5 mb-5 pb-5 pt-5 position-relative p-md-4" id="skills">
   
      <div className="fs-2 mt-5 pt-5">Mes Project</div>
      <div className="fs-3 text-warning mb-5 ">Portfolio</div>
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
            left: "10%",
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
            left: "50%",
          }}
        ></div>
      <Swiper className="mb-5 pb-4"
       centeredSlides={true}
        navigation
        pagination
        loop={true}
        spaceBetween={40}
        slidesPerView={1.5}
          breakpoints= {{

        640: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.75,
        },
        1080: {
            slidesPerView: 3.25,
        },
        1280: {
            slidesPerView: 3.75,
        },
    }}
        
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {images.map((photo, index) => (
          <SwiperSlide key={index}>
           <a href={photo.adress} target="_blank" and rel="noopener noreferrer"> <img
             
              className="rounded-8 border border-warning"
              src={photo.url}
              alt={photo.alternativeText}
             
            /></a>
          </SwiperSlide>
        ))}
      </Swiper>
                
     
    </div>
  );
}
