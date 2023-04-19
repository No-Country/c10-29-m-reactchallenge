import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QR from "../../../components/QR";
import Template from "../../../layouts/Template/Index";
import "./Index.css"

function Index() {
  const { id } = useParams();
  // const [purchase, setPurchases] = useState([]);

  // useEffect(() => {
  //   purchasesService.getPurchaseById(id).then((response) => {
  //     setPurchases(response);
  //   }
  //   )
  // }, [])

  // console.log(purchase);
  
  return (
    <Template>
      <div className="qr-descarga">
        <h3 className="qr-sub">¡Realizaste tu compra con exito!</h3>
        <h1 className="qr-titulo">Felicidades</h1>
        <div className="qr-container-purchase">
          <QR qrCodeUrl={id} />
        </div>
        <p className="qr-p">Descarga tu QR y presentalo el dia del evento</p>
      </div>
    </Template>
  );
}

export default Index;
