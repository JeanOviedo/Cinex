export const BUSCAR_PELICULAS = "BUSCAR_PELICULAS";
export const AGREGAR_A_FAVORITOS = "AGREGAR_A_FAVORITOS";
export const TOTAL_PELICULAS = "TOTAL_PELICULAS";
export const ELIMINAR_FAVORITA = "ELIMINAR_FAVORITA";

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

const pelifav = (id) => {
  return {
    type: AGREGAR_A_FAVORITOS,
    payload: id,
  };
};

const pelifavelimina = (id) => {
  return {
    type: ELIMINAR_FAVORITA,
    payload: id,
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

export const ElAddFavoritos = (id) => {
  return {
    type: AGREGAR_A_FAVORITOS,
    payload: id,
  };
};

export const ElEliminaFavoritos = (id) => {
  return {
    type: ELIMINAR_FAVORITA,
    payload: id,
  };
};
