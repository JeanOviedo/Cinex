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
      Realizado por Jean Oviedo, es una app simple de películas y series utilizando JavaScript, CSS, React, Redux con la API de OMDDBAPI.<br></br>
     <br/><br/>
          <img src={Git} className="ico" alt="..." />
          <img src={Li} className="ico" alt="..." />
          <img src={Insta} className="ico" alt="..." />
          <img src={Web} className="ico" alt="..." />
    </div>
  );
}
