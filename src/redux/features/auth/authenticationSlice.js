/* 
En Redux Toolkit, el término "slice" se refiere a una porción de la tienda global que se enfoca en un aspecto específico de la aplicación. Un slice contiene la lógica de reducers y actions necesarios para manejar ese aspecto particular de la aplicación.

Por ejemplo, si tu aplicación tiene una función de autenticación, podrías crear un slice para manejar el estado de la autenticación. Este slice contendría los reducers y actions necesarios para manejar el inicio de sesión, el cierre de sesión, el registro de usuarios, etc.

El uso de slices en Redux Toolkit es una forma de organizar el código de tu aplicación de manera más modular y fácil de mantener. Cada slice se puede escribir y probar de manera independiente, lo que permite un desarrollo más rápido y un código más limpio. Además, Redux Toolkit proporciona herramientas para generar automáticamente los reducers y actions básicos para cada slice, lo que reduce la cantidad de código que debes escribir manualmente.
*/

import { createSlice } from '@reduxjs/toolkit'; // devuelve un objeto que contiene el estado de la aplicación

export const authSlice = createSlice({
    name: 'authentication', // nombre del slice
    initialState: { // estado inicial del slice. Cuando la aplicacion inicio, el estado inicial es este. En este caso el estado inicial es un objeto con las propiedades user y status
        user: null,
        status: 'idle',
        error: null
    },
    reducers: { // reducers que modifican el estado del slice
        loginStart: (state) => {
            state.status = 'loading';
        }
    }
})

export const { 
    loginStart 
} = authSlice.actions; // exportamos las acciones del slice

export default authSlice.reducer; // exportamos el reducer del slice. 