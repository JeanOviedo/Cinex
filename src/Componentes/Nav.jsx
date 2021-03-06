import React from "react";
import Logo from "../logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="navbar">
      <div>
        <img id="logo" src={Logo} className="logo" alt="" />{" "}
      </div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Buscar</Link>
          </li>
          <li>
            {" "}
            <Link to="../favoritos">Favoritas</Link>
          </li>
          <li>
            {" "}
            <Link to="../contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
