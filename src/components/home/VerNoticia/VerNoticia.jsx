
import React, { useEffect, useState } from 'react';
import './VerNoticia.css';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Header from '../header/Header';

function VerNoticia() {
    const history = useHistory();

    const [noticia, setNoticia] = useState({});

    const noticia_local = JSON.parse(localStorage.getItem('noticia'));

    useEffect(() => {
        if (noticia_local) {
            setNoticia(noticia_local);
        } else {
            Swal.fire({
                title: 'Error no hay noticia para ver',
                icon: 'error'
            });
            atras();
        }
    }, [])

    function atras() {
        localStorage.removeItem('noticia');
        history.push('/');
    }

    return (
        <div>
            <Header titulo='EL HERALDO'></Header>
            <div className="jumbotron">
                <img className="card-img-top" src={noticia.imagen} alt="Card image cap" />
                <h1 className="display-4">{noticia.nombre}</h1>
                <p className="lead">{noticia.resumen}</p>
                <hr className="my-4" />
                <p>{noticia.descripcion}</p>
            </div>
        </div>
    );
}
export default VerNoticia;


