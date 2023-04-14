import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAllPurchasesByUserId } from "../redux/features/purchases/purchasesSlice";
import { removeToCart, emptyCart } from "../redux/features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import purchaseService from "../services/purchases";
import Pay from "../pays/Pay";
import eventsServices from "../services/events";
import purchasesServices from "../services/purchases";
import "./Cart.css";

const Cart = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.auth.user);
  const [purchases, setPurchases] = useState([]);
  const dispatch = useDispatch();

  const emptyCartMessage = () => toast.error("No hay productos en el carrito");
  const productFoundMessage = () =>
    toast.error("Alguno de los productos ya fue comprado");

  const removeItem = (id) => {
    dispatch(removeToCart(id));
  };

  useEffect(() => {
    purchasesServices.getAllPurchasesByUserId(user.uid).then((purchases) => {
      setPurchases(purchases);
    });
  }, []);

  const verifyPurchase = () => {
    // Verifico si existe la entrada dentro de mis compras (purchases)
    let foundPurchase = false;
    items.forEach((item) => {
      purchases.some((purchase) => {
        if (item.uid === purchase.uid) {
          foundPurchase = true;
          return true;
        }
      });
      return foundPurchase;
    });

    return foundPurchase;
  };
  
  const handlePurchase = async () => {
    if (items.length === 0) {
      emptyCartMessage();
      return;
    } else if (verifyPurchase()) {
      productFoundMessage();
      return;
    } else {
      setDisplayCard(true);

      if (confirmed) {

        await purchaseService.addPurchase(items);

        // Actualizo la cantidad de entradas disponibles
        items.forEach(async (item) => {
          try {
            const eventFound = await eventsServices.getEventById(item.uid);
            await eventsServices.updateEventByAbility(
              eventFound,
              eventFound.uid
            );
          } catch (error) {
            console.error(error);
          }
        });

        dispatch(emptyCart());
        return;
      }
    }
  };

  const handleEmptyCart = () => {
    //
    if (items.length === 0) {
      emptyCartMessage();
      return;
    }
    dispatch(emptyCart());
    setDisplayCard(false);
    
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Productos agregados</h2>
      <div style={{ margin: "1rem" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th scope="col">Evento</th>
              <th scope="col">Lugar</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Fecha</th>
              <th scope="col">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                return (
                  <tr key={item.uid}>
                    <td className="image-cart">
                      <img src={item.image} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.place}</td>
                    <td style={{ textAlign: "center" }}>1</td>
                    <td>
                      {new Date(item.time).toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td>$ {item.price}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.uid)}
                        className="cart-item-remove-btn"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <p className="cart-total">Total: $ {total}</p>
      <div className="botones-carrito">
        <button
          onClick={() => {
            handlePurchase();
          }}
          className="cart-purchase-btn"
        >
          Comprar
        </button>

        {items.length > 0 && (
        <button onClick={handleEmptyCart} className="cart-empty-btn">
          Vaciar carrito
        </button>
        )}
      </div>
      {displayCard && (
        <Pay
          confirmed={confirmed}
          setConfirmed={setConfirmed}
          setDisplayCard={setDisplayCard}
          handlePurchase={handlePurchase}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
