import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    initialEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    editEvent: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id
      );
      state.events[index] = action.payload;
    },
    deleteEvent: (state, action) => {
      state.events.filter((event) => event.id !== action.payload.id);
    },
  },
});

export const { 
  initialEvents, 
  addEvent, 
  editEvent, 
  deleteEvent 
} = eventsSlice.actions;

export default eventsSlice.reducer;
