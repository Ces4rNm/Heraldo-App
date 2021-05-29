
import React, { useRef } from 'react';
import './CrearNoticia.css';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

function CrearNoticia() {

    const history = useHistory();

    const nombre = useRef(null);
    const descripcion = useRef(null);
    const visible = useRef(null);
    const fecha = useRef(null);
    const categoria = useRef(null);
    const hora = useRef(null);
    const imagen = useRef(null);
    const resumen = useRef(null);

    const crear_noticia = () => {

        const session = JSON.parse(localStorage.getItem('session'));

        if (session) {

            const body = {
                "id_usuario": session._id,
                "nombre": nombre.current.value,
                "descripcion": descripcion.current.value,
                "visible": visible.current.value,
                "fecha": fecha.current.value,
                "categoria": categoria.current.value,
                "hora": hora.current.value,
                "imagen": imagen.current.value,
                "resumen": resumen.current.value
            }
            axios.post('http://localhost:8000/api/crear_noticia', body).then((response) => {
                var respuesta = response.data;
                if (respuesta.codigo == 0) {
                    Swal.fire({
                        title: respuesta.mensaje,
                        icon: 'success'
                    });
                    atras();
                } else {
                    Swal.fire({
                        title: respuesta.mensaje,
                        icon: 'error'
                    });
                }
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    title: 'Error creando noticia',
                    text: error.message,
                    icon: 'error'
                });
            });
        }
    }

    function atras(params) {
        history.push('/administrar_noticia');
    }

    return (
        <div className="">

            <h1>Crear Noticia</h1>
            <div className="content form-group">
                <div className="form-control">
                    <label>Nombre</label>
                    <input name="nombre" required type="text" ref={nombre} />
                </div>
                <div className="form-control-static">
                    <label>Descripción</label>
                    <textarea name="descripcion" required type="email" ref={descripcion} width="100%" rows="5"></textarea>
                </div>
                <div className="form-control">
                    <label>Visible</label>
                    <select name="visible" required type="number" ref={visible} >
                        <option value="1" select>Visible</option>
                        <option value="2">No visible</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Fecha de creación</label>
                    <input name="fecha" required type="date" ref={fecha} />
                </div>
                <div className="form-control">
                    <label>Categoria</label>
                    <select name="categoria" required type="number" ref={categoria}  >
                        <option value="1" select>Judicial</option>
                        <option value="2">Deportes</option>
                        <option value="3">Clasificados</option>
                        <option value="4">Politica</option>
                        <option value="5">Entretenimiento</option>
                        <option value="6">El mundo</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>hora de la noticia </label>
                    <input name="hora" required type="time" ref={hora} />
                </div>
                <div className="form-control">
                    <label>Imagen</label>
                    <input name="imagen" required type="text" ref={imagen} />
                </div>
                <div className="form-control">
                    <label>Resumen</label>
                    <input name="resumen" required type="text" ref={resumen} />
                </div>
            </div>
            <div className="_navBtn">
                <button onClick={atras} className="btn btn-primary btn-lg">Atras</button>
                <button onClick={crear_noticia} className="btn btn-success btn-lg">Crear Noticia</button>
            </div>
        </div>

    );
}
export default CrearNoticia;


