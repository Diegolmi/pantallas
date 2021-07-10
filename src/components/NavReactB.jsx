import React, { useState } from "react";
import "../assets/nav.css";
import { NavLink } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

export default function NavReactB() {
  const [user, setUser] = useState(true)

  return (
    <>
      <Navbar
        className="nav-react-b"
        fixed="top"
        collapseOnSelect
        bg="white"
        expand="lg"
      >
        <Navbar.Toggle
          className="ml-auto btn-menu"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/Inicio" as={NavLink} href="#">
              Inicio
            </Nav.Link>
            <Nav.Link to="/Perfil" as={NavLink} href="#">
              Perfil
            </Nav.Link>
            <Nav.Link to="/Idioma" as={NavLink} href="#">
              Idioma
            </Nav.Link>
            { user && 
              <Button className="btn-cerrar-sesión mr-lg-2 mb-2">Iniciar Sesión</Button>
            }
            { user && 
              <Button className="btn-cerrar-sesión">Registrarte</Button>
            }
            { !user && 
              <Button className="btn-cerrar-sesión">Cerrar Sesión</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
