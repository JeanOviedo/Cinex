import "./App.css";
import React from "react";

import { Route } from "react-router-dom";

import Nav from "./Componentes/Nav";
import Favoritos from "./Componentes/Favoritos";
import Pelicula from "./Componentes/Pelicula";
import Contacto from "./Componentes/Contacto";
import Search from "./Componentes/Search";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
    
      <Route exact path="/" ><Search/></Route>
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/pelicula/:id" component={Pelicula} /> 
      <Footer /> 
      </React.Fragment>
  );
}

export default App;
