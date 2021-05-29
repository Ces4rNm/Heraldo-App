import React from 'react';
import './Tabla.css';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function Tabla(props) {
  const history = useHistory();

  const session = JSON.parse(localStorage.getItem('session'));
  console.log("props", props);

  function actualizar_noticia(item) {
    if (item) {
      localStorage.setItem('noticia', JSON.stringify(item));
      history.push('/actualizar_noticia');
    }
  }

  function borrar_noticia(item) {
    if (item) {
      Swal.fire({
        title: "Estas seguro de borrar esta noticia?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si borrar noticia!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:8000/api/eliminar_noticia/'+item._id).then((response) => {
            var respuesta = response.data;
            if (respuesta.codigo == 0) {
              Swal.fire({
                title: respuesta.mensaje,
                icon: 'success'
              });
              history.go(0);
            } else {
              Swal.fire({
                title: respuesta.mensaje,
                icon: 'error'
              });
            }
          }).catch((error) => {
            console.log(error);
            Swal.fire({
              title: 'Error borrando noticia',
              text: error.message,
              icon: 'error'
            });
          });
        }
      });

    }
  }

  return (
    <table className="table table-striped table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Nombre del periodista</th>
          <th scope="col">Visible</th>
          <th scope="col">Fecha de creacion</th>
          <th scope="col">Categoria</th>
          <th scope="col">Hora de la noticia</th>
          <th scope="col">Imagen</th>
          <th scope="col">Resumen</th>
        </tr>
      </thead>
      <tbody>
        {
          props.array.map((item, i) => (
            <tr key={i} >
              <th scope="row">{i + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>{session.nombre}</td>
              <td>{item.visible}</td>
              <td>{item.fecha}</td>
              <td>{item.categoria}</td>
              <td>{item.hora}</td>
              <td>
                <img src={item.imagen} class="img-fluid" alt="" />
              </td>
              <td>{item.resumen}</td>
              <td role="button">
                <tr>
                  <button onClick={() => actualizar_noticia(item)} className="btn btn-primary btn-lg"><i class="fa fa-pencil"></i></button>
                </tr>
                <tr>
                  <button onClick={() => borrar_noticia(item)} className="btn btn-danger btn-lg"><i class="fa fa-trash-o"></i></button>
                </tr>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>

  )
}