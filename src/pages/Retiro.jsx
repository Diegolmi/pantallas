import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../assets/retiro.css";

export default function Inversion() {
  const [tipo, setTipo] = useState("usdt");
  const [disponible, setDisponible] = useState(3200);
  const [importe, setImporte] = useState(2800);
  const [billetera, setBilletera] = useState("1JJH231JKH2312HJ3H3K21J33BBJKJK");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="retiro pt-5 text-dark">
        <div className="pt-5">
          <div className="col-12 col-lg-6 m-auto dinero-disponible px-3">
            <h2>Dinero disponible</h2>
            <h3 className="my-4">USD {disponible}</h3>
            <h2>Importe de retiro</h2>
            <h3 className="mt-4">USD {importe}</h3>
          </div>
          <div className="col-12 mt-4">
            <div className="col-12 col-md-7 py-1 m-auto billetera-retiro">
              <h4>Billetera de {tipo} para retiro</h4>
              <p>{billetera}</p>
            </div>
            <div className="btn-retiro">
              <Button onClick={handleShow}>TOKEN</Button>
              <Button>ENVIAR SOLICITUD</Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Retiro con token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ingresar Token" />              
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
