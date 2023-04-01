import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../redux/features/cart/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log("remove item");
    dispatch(removeToCart(id));
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {items &&
          items.map((item) => {
            return (
              <div key= {item.id}>
                <li key={item.id}>
                  {item.title} - {item.price}
                </li>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div >
            );
          })}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
