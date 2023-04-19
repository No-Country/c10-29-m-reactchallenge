import React from "react";
import Template from "../../../layouts/Template/Index";
import QrReader from "../../../components/QrReader";

function Index() {
  return (
    <Template>
      <div className="container-sm qr-reader-container">
        <QrReader />
      </div>
    </Template>
  );
}

export default Index;
