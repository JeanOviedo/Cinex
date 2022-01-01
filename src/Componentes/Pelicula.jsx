import React, { Component } from "react";

import { connect } from "react-redux";
import { ElMuestraPelicula } from "../Redux/Actions.jsx";
import Sad from "../../src/load.png";

export class Pelicula extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.ElMuestraPelicula(movieId);
    console.log(this.props.ElMuestraPelicula(movieId));
  }

  render() {
    //let idp = this.props.pelicula.find(
    // (pelicula) => pelicula.imdbID === this.props.match.params.id
    //);

    return (
      <div className="res2">
        {this.props.pelicula.Title == undefined &&
        this.props.pelicula.Year == undefined ? (
          <center>
            <h3>Cargando datos...</h3>
          </center>
        ) : (
          ""
        )}
        {this.props.pelicula.Title != "" ? (
          <div key={Math.random(5)}>
            <div>
              <center>
                {" "}
                <h2>{`${this.props.pelicula.Title}`}</h2>
              </center>
              <h3>Año :</h3>
              <h4>{`${this.props.pelicula.Year}`}</h4>
              <h3>Duración:</h3>
              <h4>{` ${this.props.pelicula.Runtime}`}</h4>
              <h3>Elenco: </h3>
              <h4>{`${this.props.pelicula.Actors}`}</h4>
              <h3>Director:</h3>
              <h4>{`${this.props.pelicula.Director}`}</h4>
              {this.props.pelicula.Poster === "N/A" ? (
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png"
                    className="card-image-big"
                    alt="..."
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={this.props.pelicula.Poster}
                    className="card-image-big"
                    alt="..."
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <center>
            <img src={Sad} alt="Sad" className="jeanoviedo" />{" "}
            <h4>No hay información sobre esta pelicula</h4>
          </center>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    pelicula: state.detalles,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ElMuestraPelicula: (id) => dispatch(ElMuestraPelicula(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Pelicula);
