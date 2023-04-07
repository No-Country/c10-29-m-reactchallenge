import React from "react";
import { useParams, Link } from "react-router-dom";
import QR from "../../../components/QR";
import Template from "../../../layouts/Template/Index";

function Index() {
  const { id } = useParams();

  return (
    <Template>
      <QR qrCodeUrl={id} />
      <Link to="/purchases/">Mis Compras</Link>
    </Template>
  );
}

export default Index;
