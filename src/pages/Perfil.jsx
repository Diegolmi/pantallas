import React, { useState } from "react";
import "../assets/perfil.css";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";

export default function Perfil() {
  const [image1, setImage1] = useState(
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [name, setName] = useState("Damián Martínez");
  const [email, setEmail] = useState("damianm@gmail.com");
  const [editar, setEditar] = useState(true)

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setEditar(true)
  }

  return (
    <>
      <div className="container perfil d-block d-md-flex">
        <div className="col-12 col-md-4 mb-5">
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-8 text-left pb-5">
          <h3>Tus Datos</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-name">Nombre</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={name || "Todavía no cargaste tu nombre"}
                type="text"
                disabled={editar}
                aria-describedby="form-name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={email || "Todavía no cargaste tu email"}
                type="email"
                disabled={editar}
                aria-describedby="form-email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">Contraseña</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                placeholder="**************"
                disabled={editar}
                aria-describedby="form-email"
              />
            </InputGroup>
            <Button className="btn-editar" onClick={() => setEditar(false)}>
              Editar
            </Button>
            { !editar && <Button className="btn-guardar" type="submit">Guardar</Button> }
          </Form>
        </div>
      </div>
    </>
  );
}
