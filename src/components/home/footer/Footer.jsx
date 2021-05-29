import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer>

      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-12 well">
            <div className="col-md-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">El Heraldo</h3>
                </div>
                <div className="panel-body">
                  <p className="texto">El Heraldo es un periódico colombiano con sede en Barranquilla, fundado el 28 de
                  octubre de 1933 por Alberto Pumarejo, Juan B. Fernández Ortega y Luis Eduardo Manotas Llinás. Es en la
                  actualidad el diario de mayor circulación en la Región Caribe colombiana y quinto más leído a nivel
                  nacional.</p>
                  <p className="text-center"><a href="https://elheraldo.co">Ir a la página principal</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Contacto</h3>
                </div>
                <div className="panel-body">
                  <p className="texto">Dirección sede Bogotá: Calle 88 # 13 A - 07</p>
                  <p className="texto">Teléfono: (1)2185733</p>
                  <p className="texto">correo electrónico: ElHeraldo@gmail.com </p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>

  );
}

export default Footer;