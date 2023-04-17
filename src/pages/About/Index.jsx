
import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import About from "../../components/About";

import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
     <About/>
      <Footer />
    </div>
  )
}

export default Index