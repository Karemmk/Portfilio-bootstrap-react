import React from "react";
import "./styles.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import { useSelector } from "react-redux";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import { Footer } from "./Components/Footer";
import About from "./Components/About";
import { Contact } from "./Components/Contact";

export default function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      style={{
        background: darkMode ? "#212529" : "",
        color: darkMode ? "#ced4da" : "",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <NavBar />
      <Home />
      <Services />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
