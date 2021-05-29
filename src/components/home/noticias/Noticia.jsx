import React from 'react';
import './Noticia.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function Noticia(props) {
  const history = useHistory();

  function ver_mas(item) {
    if (item) {
      localStorage.setItem('noticia', JSON.stringify(item));
      history.push('/ver_noticia');
    }
  }


  return (
    <div className="card-columns py-5">
      {
        props.array.map((item, i) => (
          <div className="card bg-light">
            <img className="card-img-top" src={item.imagen} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.resumen}.</p>
              <button onClick={() => ver_mas(item)} className="btn btn-danger btn-lg">Ver mas</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Noticia;