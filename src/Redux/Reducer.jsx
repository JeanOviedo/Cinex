import {
  BUSCAR_PELICULAS,
  AGREGAR_A_FAVORITOS,
  TOTAL_PELICULAS,
  VERIFICA_FAVORITO,
  ELIMINAR_FAVORITA,
  DETALLE_DE_PELICULA,
  CLOSE,
} from "./Actions";

const initialState = {
  todas: [],
  cantidaddepelis: "",
  todasfavoritas: [],
  detalles: {},
  esfavoritas: false,
  modal: false,
  boton: false,
  modalno: false,
  botono: false,
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_PELICULAS:
      return { ...state, todas: action.payload };

    case TOTAL_PELICULAS:
      return { ...state, cantidaddepelis: action.payload };

    case DETALLE_DE_PELICULA:
      return {
        ...state,
        detalles: action.payload,
      };
    case ELIMINAR_FAVORITA:
      return {
        ...state,
        todasfavoritas: state.todasfavoritas.filter(
          (pelicula) => pelicula.imdbID !== action.payload
        ),
      };

    case AGREGAR_A_FAVORITOS:
      let pelicularequerida = state.todasfavoritas.find(
        (pelicula) => pelicula.imdbID === action.payload.imdbID
      );
      if (pelicularequerida)
        return {
          ...state,
          modalno: true,
          botono: true,
          modal: false,
          boton: false,
        };
      else
        return {
          ...state,
          todasfavoritas: [...state.todasfavoritas, action.payload],

          modal: true,
          boton: true,
          modalno: false,
          botono: false,
        };

    //boton: "Agregado",

    // todasfavoritas: [
    //   ...state.todasfavoritas.slice(0, action.payload.imdbID),
    //   { Fav: true, Detalles, Id: action.payload.imdbID },
    //   ...state.todasfavoritas.slice(action.payload.imdbID),
    // ],

    // return {
    //   ...state,
    //   todasfavoritas: [...state.todasfavoritas, action.payload],

    // };

    case CLOSE:
      return { ...state, modal: action.payload, boton: action.payload, modalno: action.payload, botono: action.payload};

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
