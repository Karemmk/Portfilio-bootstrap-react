import React from "react";
import {Link} from "react-scroll";

export const Footer = () => {
  return (
   
       <div className="footer row  text-center pt-5 " >
                     
                <div className="col-12 offset-1 col-sm-2  mt-5 pt-5">
                    <h5 className="mt-5 mt-sm-0 pt-5 pt-sm-0 ">Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="navbar" spy={true} smooth={true}><a href="/">Home</a></Link></li>
                        <li><Link to="about" spy={true} smooth={true}><a href="/">About</a></Link></li>
                        <li><Link to="services" spy={true} smooth={true}><a href="/">Services</a></Link></li>
                        <li><Link to="skills" spy={true} smooth={true}><a href="/">Skills</a></Link></li>
                        <li><Link to="contact" spy={true} smooth={true}><a href="contact" >Contact</a></Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-5 pt-sm-5  mt-sm-5">
                    <h5>My Address</h5>
                    <address>
		              Rue BenAchour,Chebba<br />
		              Mahdia<br />
		              Tunisia<br />
		              <i className="fa fa-phone fa-lg"></i>: +21697892244<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="contact" >
                       karemmkach@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center  mt-sm-5 pt-sm-5">
                    <div className="text-center  ">
                        <a className="btn btn-social-icon btn-google m-2 " href="http://google.com/+"><i className="fa fa-google-plus bg-white text-warning"></i></a>
                        <a className="btn btn-social-icon btn-facebook m-2 bg-white text-warning" href="https://www.facebook.com/karem.mkacher"><i className="fa fa-facebook"></i></a>
                       
                        <a className="btn btn-social-icon btn-github m-2" href="https://github.com/Karemmk"><i className="fa fa-github bg-white text-warning "></i></a>
                    </div>
                </div>
           
        </div>
  
  );
};
