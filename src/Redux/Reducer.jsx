import {
  BUSCAR_PELICULAS,
  AGREGAR_A_FAVORITOS,
  TOTAL_PELICULAS,
  VERIFICA_FAVORITO,
  ELIMINAR_FAVORITA,
  DETALLE_DE_PELICULA,
} from "./Actions";

const initialState = {
  todas: [],
  cantidaddepelis: "",
  todasfavoritas: [],
  esfavoritas: false,
  boton: "Favorito",
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_PELICULAS:
      return { ...state, todas: action.payload };

    case TOTAL_PELICULAS:
      return { ...state, cantidaddepelis: action.payload };

    case DETALLE_DE_PELICULA:
      return { ...state, cantidaddepelis: action.payload };

    case ELIMINAR_FAVORITA:
      return {
        ...state,
        todasfavoritas: state.todasfavoritas.filter(
          (pelicula) => pelicula.imdbID !== action.payload
        ),
      };

    case AGREGAR_A_FAVORITOS:
      let Detalles = action.payload;
      let pelicularequerida = state.todasfavoritas.find(
        (pelicula) => pelicula.imdbID === action.payload.imdbID
      );
      if (pelicularequerida) return state;
      else
        return {
          ...state,
          todasfavoritas: [...state.todasfavoritas, action.payload],
          //boton: "Agregado",

          // todasfavoritas: [
          //   ...state.todasfavoritas.slice(0, action.payload.imdbID),
          //   { Fav: true, Detalles, Id: action.payload.imdbID },
          //   ...state.todasfavoritas.slice(action.payload.imdbID),
          // ],
        };
    // return {
    //   ...state,
    //   todasfavoritas: [...state.todasfavoritas, action.payload],

    // };

    case VERIFICA_FAVORITO:
      let pelicularequerida2 = state.todasfavoritas.find(
        (pelicula) => pelicula.imdbID === action.payload
      );

      if (pelicularequerida2) return { esfavorita: true };
      else return { esfavorita: false };

    default:
      return state;
  }
}
