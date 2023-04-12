import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    filterDate: null
  },
  reducers: {
    setEvents: (state, action) => {
      state.items = action.payload;
    },
    setFilterDate: (state, action) => {
      state.filterDate = action.payload;
    }
  }
});

export const { setEvents, setFilterDate } = eventSlice.actions;
export default eventSlice.reducer;

