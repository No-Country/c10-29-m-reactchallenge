import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import purchasesService from "../services/purchases";
import { ToastContainer } from "react-toastify";
import {
  toastError,
  toastSuccess,
  toastWarning,
} from "../utils/messages/message";
import "./QrReader.css";

function QrR() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);
  const purchaseAllowed = () => toastSuccess("Entrada habilitada");
  const purchaseNotAllowed = () => toastWarning("Entrada no habilitada");
  const purchaseNotFound = () => toastError("Entrada no encontrada");

  const getPurchaseById = async (id) => {
    const response = await purchasesService.getPurchaseById(id);

    return response;
  };
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setScanning(false);
    }
  };

  const handleScanError = (error) => {
    setError(error);
    setScanning(false);
  };

  const handleScanButtonClick = () => {
    setScanning(!scanning);
    setResult("");
  };

  const handleQR = async (id) => {
    console.log(id);
    const purchase = await getPurchaseById(id);
    console.log(purchase);

    if (!purchase.length) {
      purchaseNotFound();
      return;
    } else if (purchase.length) {
      if (purchase[0].available === true) {
        purchaseAllowed();
        purchasesService.updatePurchaseByAvailable(
          purchase[0],
          purchase[0].uid
        );
        return;
      } else {
        purchaseNotAllowed();
        return;
      }
    }
  };

  return (
    <div className="qr-reader">
      <button onClick={handleScanButtonClick}>Escanear QR</button>
      {scanning && (
        <QrReader
          delay={300}
          constraints={{
            video: { facingMode: "environment" }, // Opciones de video para solicitar la cámara trasera
            audio: false, // Opción de audio configurada en false para desactivar la solicitud de audio
          }}
          onError={handleScanError}
          onScan={handleScan}
          style={{ width: "50%", height: "auto" }} // Modificar estilo para ocupar el ancho completo
        />
      )}

      {result && (
        <div>
          <button onClick={() => handleQR(result.text)}>Analizar QR</button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default QrR;
