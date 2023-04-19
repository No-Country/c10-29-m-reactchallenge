import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllSalesByUserId } from "../../../redux/features/sales/salesSlice";
import Template from "../../../layouts/Template/Index";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import salesService from "../../../services/sales";
import { deleteEvent } from "../../../redux/features/events/eventsSlice";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../../../utils/messages/message";
import { HiPencilAlt } from "react-icons/hi";
import eventsService from "../../../services/events";
import { Animated } from "react-animated-css";
import "./Index.css";

function Index() {
  const [search, setSearch] = useState("");

  const [events, setEvents] = useState([]);

  const user = useSelector((store) => store.auth?.user);
  const event = useSelector((store) => store.events || []);

  console.log("event", event, "events", events);
  const dispatch = useDispatch();
  const salesDeleted = () => toastSuccess("Evento eliminado con éxito!");
  const salesError = () =>
    toastError("Ha ocurrido un error, inténtelo de nuevo más tarde");
  useEffect(() => {
    eventsService.getAllEvents().then((res) => {
      setEvents(res);
    });
  }, []);

  const handleOnClick = async (sale) => {
    try {
      await salesService.deleteSale(sale.uid);
      dispatch(deleteEvent(sale.uid));
      salesDeleted();
      eventsService.getAllEvents().then((res) => {
        setEvents(res);
      });
    } catch (error) {
      console.error(error);
      salesError();
    }
  };
  const filteredEvent = events.filter((sale) => {
    return sale.title.toLowerCase().includes(search.trim().toLowerCase());
  });

  return (
    <Template>
      <div className="container-sm">
        <div className="row">
          <div className="col-12">
            <h1>Eventos</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar evento"
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Evento</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Usuario</th>
                  {/* se podria cambiar por mail pero hay q buscar el mail enn la bd de usuarios y relacionarlos */}
                  <th scope="col">E. Disponibles</th>
                  <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEvent?.map((sale) => (
                  <tr key={sale.uid}>
                    <td>{sale.title}</td>

                    <td>
                      {new Date(sale.time).toLocaleString("es-ES", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                      hs
                    </td>
                    <td>{sale.place}</td>
                    <td>{sale.price}</td>
                    <td>{sale.user_id}</td>
                    <td>{sale.ability}</td>
                    <td className="buttons-events">
                      <Link to={`/sell/${sale.uid}`}>
                        <HiPencilAlt />
                      </Link>
                    </td>
                    <td className="buttons-events">
                      <Link>
                        <BsFillTrash3Fill
                          onClick={() => {
                            handleOnClick(sale);
                          }}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Template>
  );
}

export default Index;
