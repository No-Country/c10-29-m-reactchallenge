import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import Login from "../../components/Login";
import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  )
}

export default Index