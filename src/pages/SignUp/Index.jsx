import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import CreateAccount from "../../components/CreateAccount";
import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
      <CreateAccount />
      <Footer />
    </div>
  )
}

export default Index