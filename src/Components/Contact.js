
import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import { useSelector} from 'react-redux';

export const Contact=()=>{
const darkMode = useSelector ((state)=> state.darkMode.value);
const form = useRef();
const [done, setDone] = useState(false);
const [err,seterr] = useState(false);

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_28p2y33', 'template_a00lnzr', form.current, 'g-65z4a7AfkvWjq-n')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
          seterr(true);
      });
  };
return (
<div className="row mt-5 pt-5 pb-5" id="contact">
<div className="col-12 col-md-6 text-center mt-5 position-relative">
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
            left: "0%",
          }}
        ></div>

  <div className="fs-3 fst-italic mt-5">Get In Touch</div>
  <div className="text-warning fs-2 mt-2">Contact Me</div>
 </div>
 <div className="col-12 col-md-6 mt-3 position-relative">
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
            left: "0%",
          }}
        ></div>
 <form
 
  className="p-2 ms-2 mt-4 text-center" ref={form} onSubmit={sendEmail}>
 
 <input type="text" name="user_name" className="col-12 border-warning rounded mt-4"  placeholder="Name"
 style={{
      background: darkMode? " #495057" : "none",
       color: darkMode ? "#ced4da" : ""
      }} />
          <input type="email" name="user_email" className="col-12 border-warning rounded mt-4 " placeholder="Email"
          style={{
      background: darkMode? " #495057" : "none",
       color: darkMode ? "#ced4da" : ""
      }} />
          <input type="textarea" name="message" className="col-12 border-warning rounded mt-4 pb-4" placeholder="Message"
          style={{
      background: darkMode? " #495057" : "none",
       color: darkMode ? "#ced4da" : ""
      }} />
           <button type="send" value="submit" className="btn btn-warning rounded-pill   mt-5">Send</button>
           <br/>
  <div className="mt-4  text-success">{done && "Thanks for Contacting me"} </div>
   <div className=" text-danger"> {err && "Email didn't send ,Please try again"}</div>
 </form>
  
     
 </div>
 </div>
 )
 }