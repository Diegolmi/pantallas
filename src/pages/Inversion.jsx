import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/inversion.css";

export default function Inversion() {
  const [inversion, setInversion] = useState(150);
  const [widthRosa, setWidthRosa] = useState(40)
  const [tipo, setTipo] = useState('usdt')

  return (
    <>
      <div className="inversion pt-5 text-dark">
        <div className="pt-5">
          <div className="col-12 col-lg-5 tu-inversion">
            <h1>Tu inversión U$D {inversion}</h1>
          </div>
          <div className="div-porcentaje">
            <div className="barra-blanca"><div className="barra-rosa" style={{ width: widthRosa + '%' }}><span>{widthRosa}%</span></div></div>
            <p>300%</p>
          </div>
          <div className="d-block d-lg-flex">
            <div className="col-12 col-lg-8 left">
                <div className="billetera-tipo">
                    <h4>Billetera de {tipo}</h4>
                    <p>1JJH231JKH2312HJ3H3K21J33BBJKJK</p>
                </div>
                <div className="btn-inversion">
                    <Button>ADJUNTA PAGO</Button>
                    <Button>INVERTÍ</Button>
                </div>
            </div>
            <div className="col-12 col-lg-4 px-5 py-5">
                <div className="dinero-acumulado px-3">
                    <h5>Dinero acumulado de tu Equipo</h5>
                    <h2 className="my-4">USD 25589</h2>
                    <h2>Rango 1</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
