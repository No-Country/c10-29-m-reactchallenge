import { useSelector, useDispatch } from "react-redux";
import { removeToCart, emptyCart } from "../redux/features/cart/cartSlice";
import purchaseService from "../services/purchases";
import "./cart.css";


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    // console.log("remove item");
    dispatch(removeToCart(id));
  };

  const handlePurchase = async () => {
    // console.log("comprar");
    // // Add a new document with a generated id.
    // const docRef = await addDoc(collection(db, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan",
    // });
    // console.log("Document written with ID: ", docRef.id);
    const purchase = await purchaseService.addPurchase(items);
    console.log(purchase);
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
      <button onClick={() => dispatch(emptyCart())}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
