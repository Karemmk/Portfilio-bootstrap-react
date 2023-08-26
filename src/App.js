import React from "react";
import "./styles.css";
import NavBar from "./Components/NavBarCompoment/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import About from "./Components/AboutCompoment/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { useSelector } from "react-redux";

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
