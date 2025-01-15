import React from "react";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { service } from "../data/NoticeData.js";
import '../css/Service.css'

const Service = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="service">
        <h2>이용약관</h2>
        <hr />
        <div className="serviceFirst">
          <h3>{service[0].title}</h3>
          <div className="serviceTxtBox">{service[0].description}</div>
        </div>
        <div className="serviceTwo">
          <h3>{service[1].title}</h3>
          <div className="serviceTxtBox">{service[1].description}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
