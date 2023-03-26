import { createSlice } from '@reduxjs/toolkit'; 

export const ticketsSlice = createSlice({
    name: 'tickets', // nombre del slice
    initialState: {
        tickets: []
    },
    reducers: { 
        initialTickets (state, action) {
            state.tickets = action.payload;
        }
    }
})

export const { 
    // loginStart
    initialTickets,
} = ticketsSlice.actions; // exportamos las acciones del slice

export default ticketsSlice.reducer;