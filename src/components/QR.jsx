import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

const QRDownload = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    html2canvas(qrCodeRef.current,
        {
            backgroundColor: "white",
            scale: 1,
            width: 1000,
            height: 1000,
            x: -300,
            y: -300,
            windowWidth: 500,
            windowHeight: 500,
          }
        ).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = 'qrcode.png';
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
      <div style={{ textAlign: 'center' }}>
        <input type="text" placeholder="Enter URL" onChange={handleInputChange} />
        <br />
        <br />
        <div style={{ display: 'inline-block' }} ref={qrCodeRef}>
          <QRCode value={qrCodeUrl} size={256} />
        </div>
      </div>
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <button onClick={downloadQRCode}>Download QR Code</button>
      </div>
    </div>
  );
};

export default QRDownload;
