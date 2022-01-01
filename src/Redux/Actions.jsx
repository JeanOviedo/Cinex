export const BUSCAR_PELICULAS = "BUSCAR_PELICULAS";
export const AGREGAR_A_FAVORITOS = "AGREGAR_A_FAVORITOS";
export const TOTAL_PELICULAS = "TOTAL_PELICULAS";
export const ELIMINAR_FAVORITA = "ELIMINAR_FAVORITA";
export const VERIFICA_FAVORITO = "VERIFICA_FAVORITO";
export const BOTON_FAVORITO = "BOTON_FAVORITO";
export const DETALLE_DE_PELICULA = "DETALLE_DE_PELICULA";
export const CLOSE = "CLOSE";
const apiKey = "150a106";

const peliencontrada = (infodelaspeliculas) => {
  return {
    type: BUSCAR_PELICULAS,
    payload: infodelaspeliculas,
  };
};

const pelitotal = (infodelaspeliculas) => {
  return {
    type: TOTAL_PELICULAS,
    payload: infodelaspeliculas,
  };
};

export const ElBuscaPeliculas = (titulo, type, year, page) => {
  return (dispatch) => {
    return fetch(
      `https://www.omdbapi.com/?apiKey=${apiKey}&s=${titulo}&type=${type}&y=${year}&page=${page}`
    )
      .then((respuesta) => respuesta.json())

      .then((respuestajson) => {
        console.log(titulo, type, year, page);

        console.log("dddddjean", respuestajson.totalResults);
        dispatch(peliencontrada(respuestajson.Search));
        dispatch(pelitotal(respuestajson.totalResults));
        // dispatch(peliencontrada(respuestajson.totalResults));
      })
      .catch((err) => {
        //throw new Error(error);
        console.log(err);
      });
  };
};

export function ElMuestraPelicula(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DETALLE_DE_PELICULA", payload: json });
      });
  };
}

export const ElAddFavoritos = (id) => {
  return {
    type: AGREGAR_A_FAVORITOS,
    payload: id,
  };
};

export const DetalledePelicula = (imdbID) => {
  return {
    type: DETALLE_DE_PELICULA,
    payload: imdbID,
  };
};

export const ElCierra = (modal) => {
  return {
    type: CLOSE,
    payload: modal,
  };
};

export const ElVerificaFavoritos = (imdbID) => {
  return {
    type: VERIFICA_FAVORITO,
    payload: imdbID,
  };
};

export const ElEliminaFavoritos = (id) => {
  return {
    type: ELIMINAR_FAVORITA,
    payload: id,
  };
};
