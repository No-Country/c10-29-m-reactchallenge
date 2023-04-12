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
  // const removeItemMessage = () => toast.error("Producto eliminado del carrito");
  const productFoundMessage = () =>
    toast.error("Alguno de los productos ya fue comprado");

  const removeItem = (id) => {
    // console.log("remove item");
    // removeItemMessage();
    dispatch(removeToCart(id));
  };

  useEffect(() => {
    purchasesServices.getAllPurchasesByUserId(user.uid).then((purchases) => {
      setPurchases(purchases);
      console.log("purchases", purchases);
    });
  }, []);

  const verifyPurchase = () => {
    // console.log("verificar compra");
    // console.log(purchases);
    let foundPurchase = false;
    items.forEach((item) => {
      purchases.some((purchase) => {
        console.log;
        if (item.uid === purchase.uid) {
          foundPurchase = true;
          return true;
        }
      });
      return foundPurchase;
    });
    console.log("found purchase", foundPurchase);
    return foundPurchase;
  };
  const handlePurchase = async () => {
    // console.log("comprar");
    // // Add a new document with a generated id.
    // const docRef = await addDoc(collection(db, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan",
    // });
    // console.log("Document written with ID: ", docRef.id);
    if (items.length === 0) {
      emptyCartMessage();
      return;
    } else if (verifyPurchase()) {
      productFoundMessage();
      return;
    } else {
      setDisplayCard(true);
      console.log("confirmed", confirmed);
      if (confirmed) {
        console.log("comprar");
        const purchase = await purchaseService.addPurchase(items);
        items.forEach(async (item) => {
          // try catch
          try {
            console.log("item from cart", item);
            const eventFound = await eventsServices.getEventById(item.uid);
            await eventsServices.updateEventByAbility(
              eventFound,
              eventFound.uid
            );
          } catch (error) {
            console.error(error);
          }
        });
        console.log(purchases);
        dispatch(emptyCart());
        return;
      }
    }
  };

  const handleEmptyCart = () => {
    // console.log("vaciar carrito");
    if (items.length === 0) {
      emptyCartMessage();
      return;
    }
    dispatch(emptyCart());
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Productos agregados</h2>
      <div style = {{margin: "1rem"}}>

      
      <table className="table" >
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
                  <td className="image-cart"><img src={item.image}/></td>
                  <td>{item.title}</td>
                  <td>{item.place}</td>
                  <td style={{textAlign: "center"}}>1</td>
                  <td>{item.time}</td>
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
        <button onClick={handleEmptyCart} className="cart-empty-btn">
          Vaciar carrito
        </button>
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
