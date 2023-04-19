import Template from "../../../layouts/Template/Index";
import CreateAndEditForm from "../components/CreateAndEditForm";
import { useParams } from "react-router-dom";
import "./Index.css";

function Index({ match }) {
  // const id  = "f603c770-ee5e-4611-8a13-91c4f7c60612";
  const { id } = useParams();

  return (
    <Template>
      <div className="titles">
        <h2 className="sell-title">Carga los datos de tu evento</h2>
        <p className="sell-subtitle">¡Preparemos todo para romperla!</p>
      </div>
      {/* <CreateEventForm/> */}
      <CreateAndEditForm match={id} />
    </Template>
  );
}

export default Index;
