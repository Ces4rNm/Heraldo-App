import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/home/header/Header';
import Navbar from './components/home/navbar/Navbar';
import Noticia from './components/home/noticias/Noticia';
import Footer from './components/home/footer/Footer';

import axios from 'axios';
import Swal from 'sweetalert2';

function Home() {

  const session = JSON.parse(localStorage.getItem('session'));

  const [Noticias_home, setNoticias_home] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios.get('http://localhost:8000/api/noticias').then((response) => {
        var respuesta = response.data;
        if (respuesta.codigo == 0) {
          setNoticias_home(respuesta.data);
          console.log(Noticias_home);
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

    fetchData();

  }, [])

  return (
    <div className="home">
      <nav className="login-signup">
        <Link to={(session)?'/administrar_noticia':'/login'}>{(session)?'Admin: '+session.nombre:'Iniciar sesión'}</Link>
        <a> | </a>
        <Link to={(session)?'/login':'/registrar'}>{(session)?'Salir':'Registrarse'}</Link>
      </nav>
      <Header titulo='EL HERALDO'></Header>
      <Navbar></Navbar>
      <Noticia array={Noticias_home}></Noticia>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Home;