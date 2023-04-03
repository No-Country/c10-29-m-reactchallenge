import produce from 'immer';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from '../../../services/events';

export const fetchGetAllEvents = createAsyncThunk(
  'events/getAllEvents',
  async () => {
    const response = await eventsService.getAllEvents();
    return response;
  }
);

export const fetchGetEventById = createAsyncThunk(
  'events/getEventById',
  async (id) => {
    const response = await eventsService.getEventById(id);
    return response;
  }
);


const initialState = {
  events: [],
  currentEventById: {},
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: { 
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
      state.events = state.events.filter((event) => event.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchGetEventById.fulfilled]: (state, action) => {
      state.currentEventById = action.payload;
    },
    [fetchGetAllEvents.fulfilled]: (state, action) => {
      state.events = action.payload;
    }
  }
})

export const { 
  initialEvents, 
  getEventById,
  addEvent, 
  editEvent, 
  deleteEvent 
} = eventsSlice.actions;

export default eventsSlice.reducer;
