import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Navigation, Pagination, Controller, Thumbs, } from "swiper";
import "swiper/swiper-bundle.css";
import { motion} from "framer-motion/dist/framer-motion";


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
export default function Certificats(){
 const images = [
 {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/Full-Stack-1_e3j2ks.png",
      alternativeText: "Photo Three",
       download:"https://drive.google.com/file/d/1ghtpcOEu61just9ouIh-KjkCYLj0zpLM/view?usp=drivesdk",
       adress:'https://coursera.org/verify/specialization/LE55T8U53PME'
    },
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929692/About/Bootstrap-1_y0adb1.png",
      alternativeText: "Photo One",
       download:"https://drive.google.com/file/d/1gbiszFysa119CNUQfeuCJOAjuIAKRbDF/view?usp=drivesdk",
       adress: 'https://coursera.org/verify/SZBR4SFBGV4Q'
      
    },
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929697/About/Font-End-react-1_cszqvy.png",
      alternativeText: "Photo Two",
      download:"https://drive.google.com/file/d/1gcrrkUJfTRpD9AZpLmMAAVSO13AYoEgr/view?usp=drivesdk",
      adress: 'https://coursera.org/verify/FHUQJTBWD83H'
    },
    {
      url: "https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929679/About/Back-End-1_lh9mcm.png",
      alternativeText: "Photo Three",
       download:"https://drive.google.com/file/d/1gSQcZ3eGFwadqqotu5dZwL23TFusR-GE/view?usp=drivesdk",
       adress:'https://coursera.org/verify/ELER7QPLTMXF'
    }
  ];
  return(
  
  <div className="text-center mt-md-4 ">
       <Swiper 
       centeredSlides={true}
        navigation
        pagination
        loop={true}
        slidesPerView={1}
        breakpoints= {{

        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1080: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 1,
        },
    }}
        
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {images.map((photo, index) => (
          <SwiperSlide key={index} >
          <div className="row justify-content-center">
            
           <div className="col-12 col-md-8 mt-3 " >
            <img
              style={{height:"80%",}}
              className="rounded-8"
              src={photo.url}
              alt={photo.alternativeText}
              />
            </div>  
            <div 
            whileInView={{scale:1,duration: 3}}
           initial={{scale:0}}
            className="col-12 col-md-2 mt-4 ms-2 align-self-center ">
            <a href={photo.download} target="_blank" and rel="noopener noreferrer" download><motion.button
            whileInView={{scale:1,duration: 3}}
           initial={{scale:1.5}}
             type="button" className="btn btn-warning rounded-pill p-1 mt-2 " >Download Certificate</motion.button></a>
            <div className="mt-3 text-center">Verify:<br/><a href={photo.adress} target="_blank" and rel="noopener noreferrer">Link</a></div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </div> 
  )
}