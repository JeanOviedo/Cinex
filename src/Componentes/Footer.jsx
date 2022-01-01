import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import Git from "../../src/git.png";
import Li from "../../src/linked.png";
import Insta from "../../src/insta.png";
import Web from "../../src/web.png";
export default function Footer() {
  return (
    <div className="footer">
      <h2>Proyecto Cinex</h2>
      <p>Realizado por{" "}
      <a href="https://www.jeanoviedo.com" target="_blank">
        Jean Oviedo
      </a>
      , es una app simple de películas y series utilizando JavaScript, CSS,
      React, Redux con la API de OMDBAPI.<br></br></p>
      <br />
      <br />
      <a href="https://github.com/JeanOviedo" target="_blank">
        <img src={Git} className="ico" alt="..." />
      </a>
      <a href="https://www.linkedin.com/in/jean-oviedo/" target="_blank">
        <img src={Li} className="ico" alt="..." />
      </a>
      <a href="https://www.instagram.com/jeanoviedolopez/" target="_blank">
      
        <img src={Insta} className="ico" alt="..." />
      </a>
      <a href="https://www.jeanoviedo.com" target="_blank">
        <img src={Web} className="ico" alt="..." />
      </a>
    </div>
  );
}
