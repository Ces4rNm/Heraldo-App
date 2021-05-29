
import React, { useRef } from 'react';
import './FormularioLogin.css';

import Header from '../home/header/Header';

import axios from 'axios';
import Swal from 'sweetalert2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";



export default function FormularioLogin(props) {
    localStorage.clear();

    const history = useHistory();

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const login = () => {
        const body = {
            "usuario": refUsuario.current.value,
            "password": refClave.current.value
        }
        axios.post('http://localhost:8000/api/login', body).then((response) => {
            var respuesta = response.data;
            if (respuesta.codigo == 0) {
                localStorage.setItem('session', JSON.stringify(respuesta.data));
                history.push('/administrar_noticia');
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
    }




    return (
        <section className="login container-fluid">
            <Header titulo='EL HERALDO'></Header>
            <div className="row">
                <div className="col-md-6 well col-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>💻 Iniciar</h3>
                        </div>
                        <br></br>
                        <div className="card-body">
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">
                                    📧
                                    </span>
                                <input type="email"
                                    className="form-control"
                                    placeholder="correo"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon2">
                                    🔐
                                    </span>
                                <input type="password"
                                    className="form-control"
                                    placeholder="contraseña"
                                    aria-describedby="basic-addon2"
                                    ref={refClave}
                                />
                            </div>
                            <br></br>
                            <button onClick={login}
                                className="btn btn-danger btn-lg btn-block"> Acceder</button>
                            <div className="card-footer">

                            </div>


                        </div>
                        <div>
                            <nav className="loginup">
                                <p>   ¿Eres nuevo en El heraldo?
                                <Link to="/registrar">Registrarse aquí</Link>
                                </p>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )

}


