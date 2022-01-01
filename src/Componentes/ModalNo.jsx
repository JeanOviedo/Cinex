import React, { Component } from "react";

import Happy from "../../src/load.png";

export class ModalNo extends Component {
  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.show == true) {
      return (
        <div className="modal">
          <center>
            <h2>Uuuups! La peli ya está en Favoritos</h2>
            <img src={Happy} alt="Happy" className="jeanoviedo2" />{" "}
            {/* <button
              className="boton"
              // onClick={() => this.setState({ show: false })}
              onClick={() => this.props.ElCierra(false)}
              //onClick={() => this.props.ElCierraModal(false)}
            >
              Cerrar
            </button> */}
            <p>Intenta con otra pelicula</p>
          </center>
        </div>
      );
    } else {
      return null;
    }
  }
}
