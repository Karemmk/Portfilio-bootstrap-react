import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";

export const Contact = (data) => {
  const traChk = useSelector((state) => state.translate.value);
  const darkMode = useSelector((state) => state.darkMode.value);
  const form = useRef();
  const [done, setDone] = useState(false);
  const [err, seterr] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      message: ""
    }
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_28p2y33",
        "template_a00lnzr",
        form.current,
        "g-65z4a7AfkvWjq-n"
      )
      .then(
        (result) => {
          setDone(true);
          seterr(false);
          reset();
          setTimeout(() => setDone(false), 5000);
        },
        (error) => {
          seterr(true);
          setDone(false);
        }
      );
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
            left: "0%"
          }}
        ></div>

        <div className="fs-3 fst-italic mt-5">
          {traChk ? "Entrer En Contact" : "Get In Touch"}
        </div>
        <div className="text-warning fs-2 mt-2">
          {traChk ? "Contactez Moi" : "Contact Me"}
        </div>
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
            left: "0%"
          }}
        ></div>
        <form
          className="p-2 ms-2 mt-4 text-center"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <input
            type="text"
            {...register("user_name", { required: "This is required" })}
            className="col-12 border-warning rounded mt-4"
            placeholder={traChk ? "Nom" : "Name"}
            style={{
              background: darkMode ? " #495057" : "none",
              color: darkMode ? "#ced4da" : ""
            }}
          />
          <p className="text-danger text-start ">
            {traChk && errors.user_name?.message
              ? "Ceci est nécessaire"
              : errors.user_name?.message}
          </p>
          <input
            type="email"
            {...register("user_email", { required: "This is required" })}
            className="col-12 border-warning rounded mt-4 pt-0 "
            placeholder="Email"
            style={{
              background: darkMode ? " #495057" : "none",
              color: darkMode ? "#ced4da" : ""
            }}
          />
          <p className="text-danger text-start ">
            {traChk && errors.user_email?.message
              ? "Ceci est nécessaire"
              : errors.user_email?.message}
          </p>

          <input
            type="textarea"
            {...register("message", { required: "This is required" })}
            className="col-12 border-warning rounded mt-4 pb-4"
            placeholder="Message"
            style={{
              background: darkMode ? " #495057" : "none",
              color: darkMode ? "#ced4da" : ""
            }}
          />
          <p className="text-danger text-start ">{traChk && errors.message?.message? "Ceci est nécessaire" : errors.message?.message }</p>

          <button
            type="send"
            value="submit"
            className="btn btn-warning rounded-pill   mt-5"
          >
            {traChk ? "Envoyer" : "Send"}
          </button>
          <br />
          <div className="mt-4  text-success">
            {done &&
              (traChk
                ? "Merci de m'avoir contacté"
                : "Thanks for Contacting me")}{" "}
          </div>
          <div className=" text-danger">
            {" "}
            {err &&
              (traChk
                ? "Email n'a pas été envoyé, veuillez réessayer "
                : "Email didn't send ,Please try again")}
          </div>
        </form>
      </div>
    </div>
  );
};
