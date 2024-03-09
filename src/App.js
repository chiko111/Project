import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import TreeBuilder from "./components/TreeBuilder/TreeBuilder";
import TicTac from "./components/TicTac/TicTac";
import Gallery from "./components/Gallery/Gallery";
import "./Game.css";
import "./components/TreeBuilder/TreeBuilder.css";

const RouteChangeListener = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle route changes
    console.log(`Route changed to ${location.pathname}`);
  }, [location]);

  return null; // This component doesn't render anything
};

export default function App() {
  return (
    <Router>
      <RouteChangeListener />
      <nav>
        <ul>
          <li>
            <Link to="/">Game</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          exact
          path="/">
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
  );
}
