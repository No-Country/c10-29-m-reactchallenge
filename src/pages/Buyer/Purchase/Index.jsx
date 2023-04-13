import React from "react";
import { useParams, Link } from "react-router-dom";
import QR from "../../../components/QR";
import Template from "../../../layouts/Template/Index";
import "./Index.css"

function Index() {
  const { id } = useParams();

  return (
    <Template>
      <div className="qr-descarga">
        <h1 className="qr-titulo">Felicidades</h1>
        <h3 className="qr-sub">¡ Realizaste tu compra con exito !</h3>
        <div className="qr-container-purchase">
          <QR qrCodeUrl={id} />
        </div>
        <p className="qr-p">Descarga tu QR y presnetalo el dia del evento</p>
      </div>
    </Template>
  );
}

export default Index;
