import React from "react";
import Template from "../../../layouts/Template/Index";
import QrReader from "../../../components/QrReader";

function Index() {
  return (
    <Template>
      <div className="container-sm">
        <QrReader />
      </div>
    </Template>
  );
}

export default Index;
