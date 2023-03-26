import Navbar from "../../layouts/Navbar/Index";
import Footer from "../../layouts/Footer/Index";
import CreateEventForm from "../../components/CreateEventForm";
import "./Index.css";

function Index() {
  return (
    <div>
      <Navbar />
      <CreateEventForm/>
      <Footer />
    </div>
  )
}

export default Index