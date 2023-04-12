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
    setScanning(true);
  };

  return (
    <div>
      <button onClick={handleScanButtonClick}>Escanear QR</button>
      {scanning && (
        <QrReader
          delay={300}
          onError={handleScanError}
          onScan={handleScan}
          style={{ width: "20%" }}
        />
      )}
      {result && console.log(result)}
      {error && console.log(error)}
    </div>
  );
}

export default QrR;
