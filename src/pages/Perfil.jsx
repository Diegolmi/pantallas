import React, { useState } from "react";
import "../assets/perfil.css";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";

export default function Perfil() {
  const [image1, setImage1] = useState(
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [nombre, setNombre] = useState("Damián");
  const [apellido, setApellido] = useState("Martínez");
  const [celular, setCelular] = useState("");
  const [dni, setDni] = useState(44555999);
  const [email, setEmail] = useState("damianm@gmail.com");
  const [domicilio, setDomicilio] = useState("25 de mayo 777");
  const [piso, setPiso] = useState("11");
  const [depto, setDepto] = useState("");
  const [codPostal, setCodPostal] = useState(4000);
  const [billetera, setbilletera] = useState('3KB123B12B3KJ21KB3B1211BKJ21');
  const [editar, setEditar] = useState(true);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setEditar(true);
  };

  return (
    <>
      <div className="container perfil d-block d-md-flex">
        <div className="col-12 col-md-4 mb-5">
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>
                {nombre} {apellido}
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
            </Card.Body>
          </Card>
          <Button className="mt-3 btn-editar">
              Contactar a soporte
            </Button>
        </div>
        <div className="col-12 col-md-8 text-left pb-5 pb-xl-4">
          <h3>Tus Datos</h3>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-name">Nombre</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={nombre || ""}
                  placeholder="..."
                  type="text"
                  disabled={editar}
                  aria-describedby="form-name"
                />
              </InputGroup>
              <InputGroup className="ml-2 mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-email">Apellido</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={apellido || ""}
                  placeholder="..."
                  type="text"
                  disabled={editar}
                  aria-describedby="form-email"
                />
              </InputGroup>
            </div>
            <div className="d-flex">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-dni">D.N.I</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={dni || ""}
                  placeholder="..."
                  type="number"
                  disabled={editar}
                  aria-describedby="form-dni"
                />
              </InputGroup>
              <InputGroup className="ml-2 mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-celular">Celular</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={celular || ""}
                  placeholder="..."
                  type="text"
                  disabled={editar}
                  aria-describedby="form-celular"
                />
              </InputGroup>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={email || ""}
                placeholder="..."
                type="email"
                disabled={editar}
                aria-describedby="form-email"
              />
            </InputGroup>
            <div className="d-flex">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-domicilio">
                    Domicilio
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={domicilio || ""}
                  placeholder="..."
                  type="text"
                  disabled={editar}
                  aria-describedby="form-domicilio"
                />
              </InputGroup>
              <InputGroup className="ml-2 mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-codPostal">
                    Cod. Postal
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={codPostal || ""}
                  placeholder="..."
                  type="number"
                  disabled={editar}
                  aria-describedby="form-codPostal"
                />
              </InputGroup>
            </div>
            <div className="d-flex">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-piso">Piso</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={piso || ""}
                  placeholder="..."
                  type="number"
                  disabled={editar}
                  aria-describedby="form-piso"
                />
              </InputGroup>
              <InputGroup className="ml-2 mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="form-depto">Depto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={depto || ""}
                  type="text"
                  placeholder="..."
                  disabled={editar}
                  aria-describedby="form-depto"
                />
              </InputGroup>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">
                  Billetera USDT
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                defaultValue={ billetera || '' }
                disabled={editar}
                placeholder="Todavía no guardaste una billetera"
                aria-describedby="form-email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">
                  Nueva contraseña
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                placeholder="**************"
                disabled={editar}
                aria-describedby="form-email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="form-email">
                  Repetir contraseña
                </InputGroup.Text>
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
            {!editar && (
              <Button className="btn-guardar" type="submit">
                Guardar
              </Button>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}
