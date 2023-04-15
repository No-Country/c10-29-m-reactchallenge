import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import "./QR.css";

const QRDownload = ({qrCodeUrl}) => {
  // const [qrCodeUrl, setQrCodeUrl] = useState("");
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    // Obtener referencia al elemento HTML que deseas capturar
    // const qrCodeRef = document.getElementById("qrCode");

    // Crear un canvas temporal para dibujar la imagen
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");

    // Escribir texto en el canvas
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "red"; 
    ctx.textAlign = "center";
    ctx.fillText("Mi texto aquí", - (canvas.width / 2), -(canvas.height / 2));

    // Dibujar la imagen del elemento HTML en el canvas
    html2canvas(qrCodeRef.current, {
      canvas: canvas,
      // backgroundColor: "white",
      scale: 1,
      width: 1000,
      height: 1000,
      x: -300,
      y: -300,
      windowWidth: 500,
      windowHeight: 500,
    }).then((captura) => {
      // Crear enlace de descarga
      const dataUrl = captura.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "qrcode.png";

      // Hacer clic en el enlace para descargar la imagen
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const handleInputChange = (event) => {
    setQrCodeUrl(event.target.value);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }} ref={qrCodeRef}>
          <QRCode value={qrCodeUrl} size={256} />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={downloadQRCode} className="qr-button">Descargar codigo QR</button>
      </div>
    </div>
  );
};

export default QRDownload;
