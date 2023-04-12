import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllSalesByUserId } from "../../../redux/features/sales/salesSlice";
import Template from "../../../layouts/Template/Index";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
// import QRDownload from "../../../components/QR";
import "./Index.css";
import salesService from "../../../services/sales";
import QrR from "../../../components/QrReader";

function Index() {
  const user = useSelector((store) => store.auth?.user);
  const sales = useSelector((store) => store.sales.sales || []); // Inicializar como una lista vacía
  // const salesObject = JSON.parse(JSON.stringify(sales));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllSalesByUserId(user.uid));
  }, []); // Agregar sales y dispatch como dependencias

  // console.log("user", user);
  // console.log("sales object", salesObject);
  console.log("sales", sales);

  async function handleOnClick(sale) {
    try {
      console.log("borrar sale.uid", sale.uid);
      // console.log("borrar sales.uid", sales.uid);
      await salesService.deleteSale(sale.uid);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Template>
      {/* <QRDownload data="https://www.ejemplo.com" /> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Mis compras</h1>
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
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sales &&
                  sales.map((sale) => (
                    <tr key={sale.uid}>
                      <td>{sale.title}</td>
                      <td>{new Date(sale.time).toLocaleString('es-ES', {
                          dateStyle: 'short',
                          timeStyle: 'short',
                        })}hs</td>
                      <td>{sale.place}</td>
                      <td>{sale.price}</td>
                      <td>
                        <Link to={`/sell/${sale.uid}`}>
                          <BsPencilSquare />
                        </Link>
                      </td>
                      <td>
                        <Link>
                          <BsFillTrash3Fill
                            onClick={
                              // () => {
                              //   console.log("borrar", sale.uid);
                              // }
                              () => {
                                handleOnClick(sale);
                              }
                            }
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <QrR />
          </div>
        </div>
      </div>
    </Template>
  );
}

export default Index;
