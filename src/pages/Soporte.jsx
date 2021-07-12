import "../assets/soporte.css";
import React from 'react';
import { Nav } from 'react-bootstrap'

export default function Soporte() {
  return (
    <>
        <div className="soporte pt-5 pb-3">
            <div className="col-12 col-lg-8 titulo-soporte">
                <h2>SOPORTE</h2>
            </div>
            <div className="col-12 col-lg-8 info-soporte">
                <h2>¿Que podes hacer con el soporte?</h2>
                <ul>
                    <li>* Cambiar tu email</li>
                    <li>* Cambiar tu billetera</li>
                    <li>* Cambiar tu contraseña</li>
                    <li>* Pedir soporte para retiro</li>
                </ul>
                <p>Contactate con el soporte haciendo click <Nav.Link>AQUÍ</Nav.Link> o llamando al 381-4589875 los días Lunes, Miércoles y Viernes de 8 a 12</p>
            </div>
        </div>
    </>
  );
}
