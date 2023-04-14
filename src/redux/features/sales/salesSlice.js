import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import salesService from '../../../services/sales';

export const fetchGetAllSalesByUserId = createAsyncThunk(
  'sales/getAllSalesByUserId',
  async (id) => {
    const response = await salesService.getAllSalesByUserId(id);
    return response;
  }
);

const initialState = {
  sales: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: { 
  },
  extraReducers: {
    [fetchGetAllSalesByUserId.fulfilled]: (state, action) => {
      state.sales = action.payload;
    }
  }
})

// export const { 

// } = salesSlice.actions;

export default salesSlice.reducer;
