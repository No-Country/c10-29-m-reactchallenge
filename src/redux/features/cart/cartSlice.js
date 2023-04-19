import { createSlice, current } from "@reduxjs/toolkit";

const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setItem = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getItem("cart") || [],
    total: getItem("total") || 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemExists = state.items.some((item) => item.uid === id);
    
      if (!itemExists) {
        const newItem = { ...action.payload };

        state.items.push(newItem);
        state.total += newItem.price;
        setItem("cart", state.items);
        setItem("total", state.total);
      }
    }
    ,
    removeToCart: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.uid === id);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
        setItem("cart", state.items);
        setItem("total", state.total);
      }

    },
    emptyCart: (state) => {
      state.items = [];
      state.total = 0;
      setItem("cart", state.items);
      setItem("total", state.total);
    }
  },
});

export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
