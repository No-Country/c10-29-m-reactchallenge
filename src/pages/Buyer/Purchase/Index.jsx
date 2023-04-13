import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QR from "../../../components/QR";
import Template from "../../../layouts/Template/Index";

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
      <div className="container-sm">
        <h3>Felicidades</h3>
        <h3>¡Realizaste tu compra con exito!</h3>
        <div className="qr-container-purchase">
          <QR qrCodeUrl={id} />
        </div>
        <p>Descarga tu QR y presnetalo el dia del evento</p>
      </div>
    </Template>
  );
}

export default Index;
