import produce from 'immer';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import purchasesService from '../../../services/purchases';

export const fetchGetAllPurchasesByUserId = createAsyncThunk(
  'purchases/getAllPurchasesByUserId',
  async (id) => {
    const response = await purchasesService.getAllPurchasesByUserId(id);
    console.log(response);
    return response;
  }
);

const initialState = {
  purchases: [],
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: { 
  },
  extraReducers: {
    [fetchGetAllPurchasesByUserId.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.purchases = action.payload;
    }
  }
})

// export const { 

// } = purchasesSlice.actions;

export default purchasesSlice.reducer;
