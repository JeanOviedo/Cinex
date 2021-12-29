import React from "react";
import { connect } from "react-redux";
import { ElBuscaPeliculas } from "../Redux/Actions.jsx";

export const Paginacion = ({ page, total_pages, titulo, dispatch }) => {
  const nextPage = () => {
    if (page < total_pages) {
      const nextPage = page + 1;
      ElBuscaPeliculas(titulo, nextPage)(dispatch);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      ElBuscaPeliculas(titulo, prevPage)(dispatch);
    }
  };

  return (
    <React.Fragment>
      {this.state.page >= 1 &&
      this.state.page != undefined &&
      this.state.title != undefined &&
      this.props.pelicula != undefined &&
      title != "" ? (
        <div className="paginador">
          {" "}
          <div>
            {" "}
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
          {this.state.page >= 2 ? (
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    page: parseInt(state.page),
    total_pages: state.total_pages,
    title: state.title,
  };
};

export default React.memo(connect(mapStateToProps)(Paginacion));
