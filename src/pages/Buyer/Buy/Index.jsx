import Template from "../../../layouts/Template/Index";
import QRDownload from "../../../components/QR";
import "./Index.css";

function Index() {
  return (
    <Template>
      <QRDownload data="https://www.ejemplo.com" />
    </Template>
  );
}

export default Index;
