import "../assets/sideBar.css";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function SideBar() {
  const [image1, setImage1] = useState(
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [name, setName] = useState('Damián Martínez')

  return (
    <>
      <div className="SideBar">
        <div
          className="img-sideBar"
          style={{ backgroundImage: "url(" + image1 + ")" }}
        ></div>
        <div>
          <h6 className="text-white">{name}</h6>
        </div>
        <div>
          <ul>
            <li>
              <Nav.Link to="/Inversion" as={NavLink}>
                <i className="d-inline d-md-none bi bi-currency-dollar"></i>
                <span className="d-none d-md-inline"> Inversión</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link to="/Retiro" as={NavLink}>
                <i className="d-inline d-md-none bi bi-download"></i>
                <span className="d-none d-md-inline"> Retiros</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link to="/Objetivos" as={NavLink}>
                <i className="d-inline d-md-none bi bi-bullseye"></i>
                <span className="d-none d-md-inline"> Objetivos</span>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link to="/Soporte" as={NavLink}>
                <i className="d-inline d-md-none bi bi-chat-dots"></i>
                <span className="d-none d-md-inline"> Soporte</span>
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
