import React from "react";
import FloatingDiv from "./FloatingDiv";

export default function Userinter() {
  return (
    <div className="row">
      <div className="col-12 col-md-3 d-none d-md-block d-lg-block d-xl-block text-center mt-5 fs-3 pl-5">
        1-HTML5
        <br />
        2-CSS3,SCSS
        <br />
        3-jQuery
        <br />
        4-just
        <br />
        5-Reactjs,ReactNative
        <br />
        6-JavaScript
        <br />
        7-Windows,Lunix,Mac
      </div>
      <div className="col-12 col-md-3 offset-1 row  mt-md-3">
        <div className="col-12  mt-3 mt-md-3 mb-5 mb-md-4 ">
          <FloatingDiv
            image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929669/About/boots_qqorxj.png"
            text1="Bootstrap "
            condition={true}
          />
        </div>
        <div className="col-12 mt-5 mt-md-3 mb-5 pb-2 pb-md-0">
          <FloatingDiv
            image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929694/About/rectb_qfwx0v.png"
            text1="Reactstrap "
            condition={true}
          />
        </div>
        <div className="col-12 mt-5 mt-md-3 mt-md-3">
          <FloatingDiv
            image="https://res.cloudinary.com/dyx1jeydm/image/upload/v1661929693/About/Mui_ygoslx.png"
            text1="Matiral ui "
            condition={true}
          />
        </div>
      </div>
      <div className="col-12 col-md-5 p-0 d-none d-md-block d-lg-block d-xl-block text-center mt-5 fs-3 mb-md-3">
        Front End/UI Developer with overall 2 years of extensive experience in
        the Manufacturing domain, with experience in the software development
        lifecycle (SDLC) in developing and designing user experiences of
        Internet/Intranet applications using HTML5, HTML, XHTML XML CSS, CSS3,
        PHP, JavaScript, jQuery MeetingW3C standards. Excellent analytical and
        logical programming skills.
      </div>
    </div>
  );
}
