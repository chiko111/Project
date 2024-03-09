import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import Navigation from "./components/Navigation";
import RouteChangeListener from "./components/RouteChangeListener";
import TreeBuilder from "./components/TreeBuilder/TreeBuilder";
import TicTac from "./components/TicTac/TicTac";
import Gallery from "./components/Gallery/Gallery";
import "./Game.css";
import "./components/TreeBuilder/TreeBuilder.css";

const App = () => (
  <Provider store={store}>
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
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
