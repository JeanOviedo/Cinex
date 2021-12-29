import {
  BUSCAR_PELICULAS,
  AGREGAR_A_FAVORITOS,
  TOTAL_PELICULAS,
} from "./Actions";

const initialState = {
  todas: [],
  cantidaddepelis: "",
  todasfavoritas: [],
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_PELICULAS:
      return { ...state, todas: action.payload };

    case TOTAL_PELICULAS:
      return { ...state, cantidaddepelis: action.payload };

    case AGREGAR_A_FAVORITOS:
      let pelicularequerida = state.todasfavoritas.find(
        (pelicula) => pelicula.imdbID === action.payload.imdbID
      );
      if (pelicularequerida) return state;
      else
        return {
          ...state,
          todasfavoritas: [...state.todasfavoritas, action.payload],
        };
    default:
      return state;
  }
}
