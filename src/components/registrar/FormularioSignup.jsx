
import React, { useRef } from 'react';
import './FormularioSignup.css';

import axios from 'axios';
import Swal from 'sweetalert2';

import Header from '../home/header/Header';

import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

export default function FormularioSignup(props) {

    const history = useHistory();

    const refNombre = useRef(null);
    const refDireccion = useRef(null);
    const refTelefono = useRef(null);
    const refCorreo = useRef(null);
    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const registrar = () => {
        const body = {
            "nombre": refNombre.current.value,
            "direccion": refDireccion.current.value,
            "telefono": refTelefono.current.value,
            "usuario": refUsuario.current.value,
            "password": refClave.current.value,
            "correo": refCorreo.current.value
        }
        axios.post('http://localhost:8000/api/crear_usuario', body).then((response) => {
            var respuesta = response.data;
            if (respuesta.codigo == 0) {
                Swal.fire({
                    title: respuesta.mensaje,
                    icon: 'success'
                });
                history.push('/login');
            } else {
                Swal.fire({
                    title: respuesta.mensaje,
                    icon: 'error'
                });
            }
        }).catch((error) => {
            console.log(error);
            Swal.fire({
                title: 'Error registrando usuario',
                text: error.message,
                icon: 'error'
            });
        });
    }

    return (
        <section className="registrar container-fluid">
            <Header titulo='EL HERALDO'></Header>
            <div className="row">
                <div className="col-md-6 well col-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>💻 Ingresar Datos</h3>
                        </div>
                        <br></br>
                        <div className="card-body">
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">
                                    Nombre Completo
                                    </span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Nombre(s) apellido(s)"
                                    aria-describedby="basic-addon1"
                                    ref={refNombre}
                                />
                            </div>
                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon2">
                                    Dirección - usuario
                                    </span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Calle # - A"
                                    aria-describedby="basic-addon2"
                                    ref={refDireccion}
                                />
                            </div>
                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">
                                    teléfono - usuario
                                    </span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="#######"
                                    aria-describedby="basic-addon3"
                                    ref={refTelefono}
                                />
                            </div>

                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1">
                                    Correo electrónico
                                    </span>
                                <input type="email"
                                    className="form-control"
                                    placeholder="correo@example.com"
                                    aria-describedby="basic-addon1"
                                    ref={refCorreo}
                                />
                            </div>
                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon5">
                                    Usuario
                                    </span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="@usuario"
                                    aria-describedby="basic-addon5"
                                    ref={refUsuario}
                                />
                            </div>
                            <br></br>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon6">
                                    🔐
                                    </span>
                                <input type="password"
                                    className="form-control"
                                    placeholder="contraseña"
                                    aria-describedby="basic-addon6"
                                    ref={refClave}
                                />
                            </div>
                            <br></br>

                            <button onClick={registrar}
                                className="btn btn-danger btn-lg btn-block"> Registrar</button>
                            <div className="card-footer">

                            </div>


                        </div>
                        <nav className="loginup">
                            <p>   ¿Ya tienes una cuenta heraldo?
                            <Link to="/login">Iniciar sesion</Link>
                            </p>
                        </nav>
                    </div>

                </div>
            </div>

        </section>
    )

}
