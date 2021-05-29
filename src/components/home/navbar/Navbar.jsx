import React from 'react';
import './Navbar.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="sticky-top">
      <ul className="nav justify-content-center bg-warning">
        <li className="nav-item"><Link className="nav-link active" to="/">Inicio</Link></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/judicial">Judiciales</a></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/deportes">Deportes</a></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/loca">Clasificados</a></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/politica">Politica</a></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/entretenimiento">Entretenimiento</a></li>
        <li className="nav-item"><a className="nav-link" target="_blank" href="https://www.elheraldo.co/internacional">El Mundo</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;