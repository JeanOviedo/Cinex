import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ElEliminaFavoritos } from "../Redux/Actions.jsx";
import Sad from "../../src/load.png";
export class Favoritos extends Component {
  render() {
    return (
      <div className="res">
        {
          <center>
            <h2>Mis Peliculas Favoritas</h2>
          </center>
        }
        <ul>
          {this.props.pelicula != "" ? (
            this.props.pelicula.map((pelicula) => {
              return (
                <div className="card" key={Math.random(5)}>
                  <div>
                    <center>
                      <h3> {pelicula.Title}</h3>
                      {pelicula.Poster === "N/A" ? (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png"
                          className="card-image"
                          alt="..."
                        />
                      ) : (
                        <img
                          src={pelicula.Poster}
                          className="card-image"
                          alt="..."
                        />
                      )}
                      <button
                        className="boton"
                        onClick={() =>
                          this.props.ElEliminaFavoritos(pelicula.imdbID)
                        }
                      >
                        Eliminar
                      </button>{" "}
                      <Link to={`/pelicula/${pelicula.imdbID}`}>
                        <button className="boton">Detalles</button>
                      </Link>
                    </center>
                  </div>
                </div>
              );
            })
          ) : (
            <center> 
              <img src={Sad} alt="Sad" className="jeanoviedo" /> <h4>No tienes Peliculas Favoritas</h4>
            
            </center>
          )}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ todasfavoritas }) {
  return {
    pelicula: todasfavoritas,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ElEliminaFavoritos: (id) => dispatch(ElEliminaFavoritos(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
