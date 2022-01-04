import React, { Component } from "react";
import { connect } from "react-redux";
import { ElCierra } from "../Redux/Actions.jsx";
import Happy from "../../src/ok.png";

export class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.show == true) {
      return (
        <div className="modal">
          <center>
            <h2>La peli se guardo en favoritos</h2>
            <img src={Happy} alt="Happy" className="jeanoviedo" />{" "}
            {/* <button
              className="boton"
              // onClick={() => this.setState({ show: false })}
              onClick={() => this.props.ElCierra(false)}
              //onClick={() => this.props.ElCierraModal(false)}
            > 
              Cerrar
            </button>*/}
          </center>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps({ modal }) {
  return {
    modal: modal,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ElCierra: (modal) => dispatch(ElCierra(modal)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
