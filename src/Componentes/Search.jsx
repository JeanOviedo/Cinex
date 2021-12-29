import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ElBuscaPeliculas, ElAddFavoritos } from "../Redux/Actions.jsx";
let VariableOk = "";
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      type: "",
      page: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeyear(event) {
    this.setState({ year: event.target.value });
  }
  handleChangetype(event) {
    this.setState({ type: event.target.value });
  }
  handleChangepage(event) {
    this.setState({ page: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.ElBuscaPeliculas(
      this.state.title,
      this.state.type,
      this.state.year
    );
    this.state.page = 1;
    this.state.page = parseInt(this.state.page);
    VariableOk = "SI";
  }

  componentDidMount() {
    let myArray = [
      "Civil War",
      "Avengers",
      "Terminator",
      "Harry Potter",
      "Comic",
      "Dragon ball",
      "Fast",
      "Back to the Future",
      "Shrek",
      "Super",
      "hitman",
      "007",
    ];
    let randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    this.props.ElBuscaPeliculas(randomItem, "movie", "", "1");
    console.log(randomItem);
    VariableOk = "NO";
  }

  handleSubmitSgte(event) {
    event.preventDefault();
    this.props.ElBuscaPeliculas(
      this.state.title,
      this.state.type,
      this.state.year,
      this.state.page + 1
    );

    this.state.page += 1;
  }

  handleSubmitAtras(event) {
    event.preventDefault();
    this.props.ElBuscaPeliculas(
      this.state.title,
      this.state.type,
      this.state.year,
      this.state.page - 1
    );
    this.state.page -= 1;
  }

  render() {
    const { title } = this.state;
    const { year } = this.state.year;
    const { page } = this.state.page;

    return (
      <div className="res">
        {""}

        <center>
          <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="imp">
              <input
                type="text"
                id="title"
                autoComplete="off"
                minLength="3"
                value={title}
                onChange={(e) => this.handleChange(e)}
                placeholder="Escriba el nombre"
              />
            </div>
            <div className="imp">
              <select
                name="type"
                id="type"
                onChange={(e) => this.handleChangetype(e)}
              >
                <option value=""> Todas </option>
                <option value="movie"> Pelicula </option>
                <option value="series"> Serie </option>
                <option value="episode"> Episodio </option>
              </select>
            </div>
            <div className="imp">
              <input
                type="number"
                id="year"
                autoComplete="off"
                minLength="4"
                maxLength="4"
                placeholder=" Año"
                value={year}
                onChange={(e) => this.handleChangeyear(e)}
              />
            </div>
            <button type="submit" className="botonsearch">
              BUSCAR
            </button>
          </form>
        </center>
        <div>
          <div className="container">
            {this.props.totales != "" &&
            this.state.page != undefined &&
            this.state.title != undefined &&
            this.props.pelicula != undefined &&
            VariableOk == "SI" ? (
              <h3>Se han encontrado {this.props.totales} resultados</h3>
            ) : (
              ""
            )}
            <ul>
              {this.props.pelicula ? (
                this.props.pelicula.map((pelicula) => {
                  return (
                    /* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */

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
                            onClick={() => this.props.ElAddFavoritos(pelicula)}
                          >
                            Favorita
                          </button>{" "}
                          <button className="boton">Detalles</button>
                        </center>
                      </div>
                    </div>
                  );
                })
              ) : title === "" ? (
                <center>
                  <h2>Sin resultados, el campo nombre esta vacío</h2>
                </center>
              ) : (
                <center>
                  <h2>
                    Sin resultados, presione buscar si está realizando otra
                    busqueda
                  </h2>
                </center>
              )}
            </ul>
          </div>
        </div>

        {/* INICIO PAGINACION */}
        {}
        {this.state.page >= 1 &&
        this.state.page != undefined &&
        this.state.title != undefined &&
        this.props.pelicula != undefined &&
        this.props.totales > 10 &&
        title != "" ? (
          <div className="paginador">
            {" "}
            <div>
              <form className="form" onSubmit={(e) => this.handleSubmitSgte(e)}>
                <input
                  type="hidden"
                  id="title"
                  autoComplete="off"
                  minLength="3"
                  value={title}
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  type="hidden"
                  id="year"
                  autoComplete="off"
                  minLength="4"
                  maxLength="4"
                  placeholder=" Año"
                  value={year}
                  onChange={(e) => this.handleChangeyear(e)}
                />
                <input
                  type="hidden"
                  id="page"
                  value={page}
                  onChange={(e) => this.handleChangepage(e)}
                />
                <button className="botonsgt">Siguientes </button>
              </form>
            </div>
            {this.state.page >= 2 && this.props.totales > 10 ? (
              <div>
                <form
                  className="form"
                  onSubmit={(e) => this.handleSubmitAtras(e)}
                >
                  <input
                    type="hidden"
                    id="title"
                    autoComplete="off"
                    minLength="3"
                    value={title}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <input
                    type="hidden"
                    id="year"
                    autoComplete="off"
                    minLength="4"
                    maxLength="4"
                    placeholder=" Año"
                    value={year}
                    onChange={(e) => this.handleChangeyear(e)}
                  />
                  <input
                    type="hidden"
                    id="page"
                    value={page}
                    onChange={(e) => this.handleChangepage(e)}
                  />
                  <button className="botonsgt">Anteriores</button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        {/* FIN DE PAGINACIO */}
      </div>
    );
  }
}

function mapStateToProps({ todas, cantidaddepelis }) {
  return {
    pelicula: todas,
    totales: cantidaddepelis,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ElBuscaPeliculas: (titulo, type, year, page) =>
      dispatch(ElBuscaPeliculas(titulo, type, year, page)),

    ElAddFavoritos: (pelicula) => dispatch(ElAddFavoritos(pelicula)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
