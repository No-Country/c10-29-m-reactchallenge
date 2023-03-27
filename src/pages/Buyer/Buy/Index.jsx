import Navbar from "../../../layouts/Navbar/Index";
import Footer from "../../../layouts/Footer/Index";
import QRDownload from "../../../components/QR";
import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
        <QRDownload data="https://www.ejemplo.com" />
      <Footer />
    </div>
  )
}

export default Index