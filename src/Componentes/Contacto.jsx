import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import Imagenc from "../../src/img-opacity50.png";
export default function Contacto() {
  return (
    <div className="fav">
      <h2>Contacto</h2>
      <div>
        <div>
          {" "}
          <p>Muchas gracias por pasar por acá</p>
        </div>
        <div>
          <img src={Imagenc} className="jeanoviedo" alt="..." />
        </div>
      </div>

      <ul></ul>
    </div>
  );
}
