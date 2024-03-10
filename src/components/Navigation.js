import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"><button className="btn-one">Game</button></Link>
      </li>
      <li>
        <Link to="/input"><button className="btn-one">Input</button></Link>
      </li>
      <li>
        <Link to="/gallery"><button className="btn-one">Gallery</button></Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
