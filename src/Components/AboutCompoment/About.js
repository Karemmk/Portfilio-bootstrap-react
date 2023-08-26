import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import Certificats from "./Certificats";
import Me from "./Me";
import Userinter from "./Userinter";
import BackEnd from "./Backend";
import { useSelector } from "react-redux";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode.value);
  const traChk = useSelector((state) => state.translate.value);

  return (
    <div className="About p-3 mt-5 pb-5 pt-5 position-relative" id="about">
      <div
        className="test "
        style={{
          width: "21rem",
          height: "11rem",
          position: "absolute",
          radius: "50%",
          filter: "blur(72px)",
          background: "rgb(238 210 255)",
          left: "15%",
          top: "70%"
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
          top: "15%",
          left: "40%"
        }}
      ></div>
      <h1 className="text-center fs-1 mt-5 mb-5">
        {traChk ? "À Propos" : "About"}
      </h1>

      <Tabs
        style={{
          background: darkMode ? " #6c757d" : ""
        }}
      >
        <TabList>
          <Tab>
            <p>{traChk ? "Moi" : "Me"}</p>
          </Tab>
          <Tab>
            <p>Certifs</p>
          </Tab>
          <Tab>
            <p>Front-End</p>
          </Tab>
          <Tab>
            <p>Back-End</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content ">
            <Me traChk={traChk} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Certificats traChk={traChk} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Userinter traChk={traChk}/>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="panel-content">
            <BackEnd traChk={traChk}/>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
