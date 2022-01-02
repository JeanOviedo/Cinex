import "./App.css";
import React from "react";

import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>

        <Route exact path="/favoritos">
          <Favoritos />
        </Route>

        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route path="/pelicula/:id" component={Pelicula} />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;
