import { createSlice } from "@reduxjs/toolkit";

export const Slice  = createSlice({
    name: "valores",
    initialState: {
        ciudad: '',
        nombre: '',
        dni: '',
        correo: '',
    },
    reducers: {
        guardarNombre:(state, action) => {
            state.ciudad = action.payload.ciudad;
            state.nombre = action.payload.nombre;
            state.dni = action.payload.dni;
            state.correo = action.payload.correo;
        }
    }
})

export const {guardarNombre} = Slice.actions;