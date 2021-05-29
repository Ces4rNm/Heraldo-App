
import React, { useEffect, useState } from 'react';
import './AdminNoticia.css';
import Tabla from './Tabla/Tabla';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Header from '../home/header/Header';

function AdminNoticia() {
    const history = useHistory();

    const [Noticias, setNoticias] = useState([]);

    const session = JSON.parse(localStorage.getItem('session'));

    useEffect(() => {
        function fetchDataCustomer() {
            if (session) {
                axios.get('http://localhost:8000/api/noticia_usuario/' + session._id).then((response) => {
                    var respuesta = response.data;
                    if (respuesta.codigo == 0) {
                        setNoticias(respuesta.data);
                        console.log(Noticias);
                    } else {
                        Swal.fire({
                            title: respuesta.mensaje,
                            icon: 'error'
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    Swal.fire({
                        title: 'Error validando usuario',
                        text: error.message,
                        icon: 'error'
                    });
                });
            } else {
                history.push('/');
            }
        }

        fetchDataCustomer();

    }, [])

    function crear_noticia() {
        history.push('/crear_noticia');
    }

    const cerrar_session = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="container-fluid">
            <Header titulo='EL HERALDO'></Header>
            <div className="row">
                <div className="align-items-center col-sm-12 d-flex justify-content-between py-3">
                    <button onClick={crear_noticia} className="btn btn-success btn-lg m-0">Crear Notica</button>
                    <h3 className="m-0">{session.nombre}</h3>
                    <button onClick={cerrar_session} className="btn btn-danger btn-lg m-0">Cerrar sesion</button>
                </div>
                <div className="div col-sm-12">
                    {
                        Noticias.length > 0 ?
                            <Tabla array={Noticias} />
                            :
                            <div className="alert alert-inf">
                                Sin noticias.
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default AdminNoticia;


