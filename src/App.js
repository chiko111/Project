import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./components/store";
import Navigation from "./components/Navigation";
import RouteChangeListener from "./components/RouteChangeListener";
import TreeBuilder from "./components/TreeBuilder/TreeBuilder";
import TicTac from "./components/TicTac/TicTac";
import TODO from "./components/Table/TODO";
import ReduxTODO from "./components/ReduxTODO/ReduxTODO";
import MainGallery from "./components/Gallery/AlbumGallery";

import "./Game.css";
import "./components/TreeBuilder/TreeBuilder.css";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RouteChangeListener />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <TicTac />
          </Route>
          <Route path="/input">
            <TreeBuilder />
          </Route>
          <MainGallery />
          <Route exact path="/table">
            <TODO />
          </Route>
          <Route exact path="/reduxtodo">
            <ReduxTODO />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
