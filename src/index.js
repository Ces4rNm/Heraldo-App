import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import FormularioLogin from './components/login/FormularioLogin';
import FormularioSignup from './components/registrar/FormularioSignup';
import AdminNoticia from './components/AdminNoticia/AdminNoticia';
import CrearNoticia from './components/AdminNoticia/CrearNoticia/CrearNoticia';
import ActualizarNoticia from './components/AdminNoticia/ActualizarNoticia/ActualizarNoticia';
import VerNoticia from './components/home/VerNoticia/VerNoticia';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={FormularioLogin} />
          <Route path="/registrar" component={FormularioSignup} />
          <Route path="/administrar_noticia" component={AdminNoticia} />
          <Route path="/crear_noticia" component={CrearNoticia} />
          <Route path="/actualizar_noticia" component={ActualizarNoticia} />
          <Route path="/ver_noticia" component={VerNoticia} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
