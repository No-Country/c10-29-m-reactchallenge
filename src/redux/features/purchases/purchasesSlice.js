import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import purchasesService from "../../../services/purchases";
import purchases from "../../../services/purchases";

export const fetchGetAllPurchasesByUserId = createAsyncThunk(
  "purchases/getAllPurchasesByUserId",
  async (id) => {
    const response = await purchasesService.getAllPurchasesByUserId(id);
    return response;
  }
);
export const fetchGetAllPurchases = createAsyncThunk(
  "purchases/getAllPurchases",
  async () => {
    const response = await purchasesService.getAllPurchases();

    return response;
  }
);

const initialState = {
  purchases: [],
  // purchasesAll: [],
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetAllPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload;
      console.log(
        "action.payload",
        action.payload,
        "state.PURCHASES",
        state.purchases
      );
    },
    [fetchGetAllPurchasesByUserId.fulfilled]: (state, action) => {
      state.purchases = action.payload;
    },
  },
});

// export const {

// } = purchasesSlice.actions;

export default purchasesSlice.reducer;
