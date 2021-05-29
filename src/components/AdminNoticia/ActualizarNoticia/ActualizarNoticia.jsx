
import React, { useEffect, useState } from 'react';
import './ActualizarNoticia.css';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

function ActualizarNoticia() {

    const history = useHistory();

    const [nombre, setnombre] = useState(null)
    const [descripcion, setdescripcion] = useState(null);
    const [visible, setvisible] = useState(null);
    const [fecha, setfecha] = useState(null);
    const [categoria, setcategoria] = useState(null);
    const [hora, setHora] = useState(null);
    const [imagen, setimagen] = useState(null);
    const [resumen, setresumen] = useState(null);


    useEffect(() => {

        async function fetchDataCustomer() {

            const noticia = JSON.parse(localStorage.getItem('noticia'));

            if (noticia) {
                setnombre(noticia.nombre);
                setdescripcion(noticia.descripcion);
                setvisible(noticia.visible);
                setfecha(noticia.fecha);
                setcategoria(noticia.categoria);
                setHora(noticia.hora);
                setimagen(noticia.imagen);
                setresumen(noticia.resumen);

            } else {
                Swal.fire({
                    title: 'Error no hay noticia para actualizar',
                    icon: 'error'
                });
                atras();
            }
        }
        fetchDataCustomer();

    }, [])

    const actualizar_noticia = () => {

        const session = JSON.parse(localStorage.getItem('session'));

        if (session) {
            const body = {
                "nombre": nombre,
                "descripcion": descripcion,
                "visible": visible,
                "fecha": fecha,
                "categoria": categoria,
                "hora": hora,
                "imagen": imagen,
                "resumen": resumen
            }
            const id_noticia = JSON.parse(localStorage.getItem('noticia'))._id;
            axios.put('http://localhost:8000/api/editar_noticia/' + id_noticia, body).then((response) => {
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
                    title: 'Error actualizando noticia',
                    text: error.message,
                    icon: 'error'
                });
            });
        }
    }

    function atras(params) {
        localStorage.removeItem('noticia');
        history.push('/administrar_noticia');
    }
    return (
        <div className="">

            <h1>Actualizar Noticia</h1>
            <div className="content form-group">
                <div className="form-control">
                    <label>Nombre</label>
                    <input name="nombre" required type="text" value={nombre} onChange={(event) => setnombre(event.target.value)} />
                </div>
                <div className="form-control-static">
                    <label>Descripción</label>
                    <textarea name="descripcion" required type="email" value={descripcion} onChange={(event) => setdescripcion(event.target.value)} width="100%" rows="5"></textarea>
                </div>
                <div className="form-control">
                    <label>Visible</label>
                    <select name="visible" required type="number" value={visible} onChange={(event) => setvisible(event.target.value)} >
                        <option value="1">Visible</option>
                        <option value="2">No visible</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Fecha de creación</label>
                    <input name="fecha" required type="date" value={fecha} onChange={(event) => setfecha(event.target.value)} />
                </div>
                <div className="form-control">
                    <label>Categoria</label>
                    <select name="categoria" required type="number" value={categoria} onChange={(event) => setcategoria(event.target.value)}  >
                        <option value="1">Judicial</option>
                        <option value="2">Deportes</option>
                        <option value="3">Clasificados</option>
                        <option value="4">Politica</option>
                        <option value="5">Entretenimiento</option>
                        <option value="6">El munod</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>hora de la noticia </label>
                    <input name="hora" required type="time" value={hora} onChange={(event) => setHora(event.target.value)} />
                </div>
                <div className="form-control-static">
                    <img src={imagen} class="img-fluid" />
                </div>
                <div className="form-control">
                    <label>Imagen</label>
                    <input name="imagen" required type="text" value={imagen} onChange={(event) => setimagen(event.target.value)} />
                </div>
                <div className="form-control">
                    <label>Resumen</label>
                    <input name="resumen" required type="text" value={resumen} onChange={(event) => setresumen(event.target.value)} />
                </div>
            </div>
            <div className="_navBtn">
                <button onClick={atras} className="btn btn-primary btn-lg">Atras</button>
                <button onClick={actualizar_noticia} className="btn btn-success btn-lg">Actualizar Noticia</button>
            </div>
        </div>

    );
}
export default ActualizarNoticia;


