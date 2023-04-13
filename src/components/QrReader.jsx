import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function QrR() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);

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

  return (
    <div>
      <button onClick={handleScanButtonClick}>Escanear QR</button>
      {scanning && (
        <QrReader
          delay={300}
          constraints={{
            video: { facingMode: 'environment' }, // Opciones de video para solicitar la cámara trasera
            audio: false, // Opción de audio configurada en false para desactivar la solicitud de audio
          }}          onError={handleScanError}
          onScan={handleScan}
          style={{ width: "50%", height: "auto" }} // Modificar estilo para ocupar el ancho completo
        />
      )}
       {result && result.text}
      {error && console.log(error)}
      
      </div>
  );
}


export default QrR;