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
    total: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
  
      if (
        state.items.length === 0 ||
        state.items.filter((item) => item.id === id).length === 0
      ) {
        state.items.push(action.payload);
        setItem("cart", state.items);
        state.total += parseFloat(action.payload.price);
      }
      
    },
    removeToCart: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
        setItem("cart", state.items);
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
