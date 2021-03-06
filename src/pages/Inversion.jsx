import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../assets/inversion.css";

export default function Inversion() {
  const [inversion, setInversion] = useState(150);
  const [widthRosa, setWidthRosa] = useState(40);
  const [tipo, setTipo] = useState("usdt");
  const [billetera, setBilletera] = useState("1JJH231JKH2312HJ3H3K21J33BBJKJK");
  const [acumulado, setAcumulado] = useState(23000);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="inversion pt-5 text-dark">
        <div className="pt-5">
          <div className="col-12 col-lg-5 tu-inversion">
            <h1>Tu inversión U$D {inversion}</h1>
          </div>
          <div className="div-porcentaje">
            <div className="barra-blanca">
              <div className="barra-rosa" style={{ width: widthRosa + "%" }}>
                <span>{widthRosa}%</span>
              </div>
            </div>
            <p>300%</p>
          </div>
          <div className="d-block d-lg-flex">
            <div className="col-12 col-lg-8 left">
              <div className="billetera-tipo">
                <h4>Billetera de {tipo}</h4>
                <p>{billetera}</p>
              </div>
              <div className="btn-inversion">
                <Button onClick={handleShow}>ADJUNTA PAGO</Button>
                <Button>INVERTÍ</Button>
              </div>
            </div>
            <div className="col-12 col-lg-4 px-5 pt-4">
              <div className="dinero-acumulado px-3">
                <h5>Dinero acumulado de tu Equipo</h5>
                <h2 className="my-4">USD {acumulado}</h2>
                <h2>Rango 1</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adjuntar comprobante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.File
                id="exampleFormControlFile1"
              />
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
