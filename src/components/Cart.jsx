import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchGetAllPurchasesByUserId} from "../redux/features/purchases/purchasesSlice";
import { removeToCart, emptyCart } from "../redux/features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import purchaseService from "../services/purchases";
import "./cart.css";


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.auth.user);
  const purchases = useSelector((state) => state.purchases.purchases);
  const dispatch = useDispatch();

  const emptyCartMessage = () => toast.error("No hay productos en el carrito");
  const removeItemMessage = () => toast.error("Producto eliminado del carrito");

  const removeItem = (id) => {
    // console.log("remove item"); 
    removeItemMessage();
    dispatch(removeToCart(id));
  };

  useEffect(() => {
    dispatch(fetchGetAllPurchasesByUserId());
    console.log(purchases);
  }, []);

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
      return 
    }
    const purchase = await purchaseService.addPurchase(items);
    console.log(purchases);
    dispatch(emptyCart());
  };

  const handleEmptyCart = () => {
    // console.log("vaciar carrito");
    if (items.length === 0) {
      emptyCartMessage();
      return 
    }
    dispatch(emptyCart());
  };

  return (
    <div className="container">
      <h2>Carrito de compras</h2>
      <ul>
        {items &&
          items.map((item) => {
            return (
              <div key={item.uid}>
                <li key={item.uid}>
                  {item.title} - {item.price}
                </li>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div>
            );
          })}
      </ul>
      <p>Total: {total}</p>
      <button onClick={handlePurchase}>Comprar</button>
      <button onClick={handleEmptyCart}>Vaciar carrito</button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
