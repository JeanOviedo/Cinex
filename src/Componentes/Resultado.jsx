import React from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

export default function Resultado() {
  return (
    <div className="fav">
      {this.props.pelicula.map((pelicula) => {
        return (
          <div>
            <h2> {pelicula.Title}</h2>
            <button className="boton">Favorita</button>
          </div>
        );
      })}
      <ul>{/* Aqui deberias poner tu lista de peliculas! */}</ul>
    </div>
  );
}
