import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllPurchases } from "../../../redux/features/purchases/purchasesSlice";
import Template from "../../../layouts/Template/Index";
// import QRDownload from "../../../components/QR";
import "./Index.css";

function Index() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchGetAllPurchases());
  }, []); // Agregar purchases y dispatch como dependencias

  const user = useSelector((store) => store.auth?.user);
  const purchases = useSelector((store) => store.purchases.purchases || []); // Inicializar como una lista vacía
  const dispatch = useDispatch();
  console.log("purchases", purchases);

  const filteredEvent = purchases.filter((purch) => {
    return purch.title.toLowerCase().includes(search.trim().toLowerCase());
  });

  return (
    <Template>
      {/* <QRDownload data="https://www.ejemplo.com" /> */}
      <div className="container-sm">
        <div className="row">
          <div className="col-12">
            <h1>Entradas vendidas</h1>
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
                  <th scope="col">Fecha / Hora</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Capacidad</th>
                  <th scope="col">Disponible</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvent.map((purchase) => {
                  // Verificar si purchases es una lista vacía
                  const purchaseDate = new Date(purchase.time);
                  return (
                    <tr key={purchase.uid}>
                      <td>{purchase.title}</td>
                      <td>
                        {purchaseDate.toLocaleString("es-ES", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td>{purchase.place}</td>
                      <td>$ {purchase.price}</td>
                      <td>{purchase.ability}</td>
                      <td>{purchase.available ? "Disponible" : "agotado"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Template>
  );
}

export default Index;
