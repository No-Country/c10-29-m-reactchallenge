import Template from "../../../layouts/Template/Index";
import CreateAndEditForm from "../components/CreateAndEditForm";
import {useParams} from "react-router-dom";
import "./Index.css";

function Index({ match}) {
  // const id  = "f603c770-ee5e-4611-8a13-91c4f7c60612"; 
  const { id } = useParams();
  console.log("id", id)
  return (

    <Template>
      {/* <CreateEventForm/> */}
      <CreateAndEditForm  match={id} />
    </Template>
  )
}

export default Index