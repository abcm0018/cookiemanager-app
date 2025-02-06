import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
  name: "cookies",
  initialState: {
    isLoadingCookies: true, // Nos indica si están cargadas las cookies
    cookies: [],
    errorCookieMessage: undefined,
  },
  reducers: {
    // Cargar las cookies desde la base de datos
    onLoadCookies: (state, { payload = [] }) => {
      state.isLoadingCookies = false;
      state.errorCookieMessage = undefined; // Limpiar errores previos
      state.cookies = payload;
      console.log("CookieSlice::onLoadCookies: cookies cargadas", payload);
    },

    // Añadir una nueva cookie
    onAddNewCookie: (state, { payload }) => {
      state.isLoadingCookies = false;
      state.errorCookieMessage = undefined; // Limpiar errores previos
      const exists = state.cookies.some((cookie) => cookie.id === payload.id);
      if (!exists) {
        state.cookies.push(payload);
        console.log("CookieSlice::onAddNewCookie: cookie añadida", payload);
      }
    },

    // Actualizar una cookie existente
    onUpdateCookie: (state, { payload }) => {
      state.isLoadingCookies = false;
      state.errorCookieMessage = undefined; // Limpiar errores previos

      const index = state.cookies.findIndex(
        (cookie) => cookie.id === payload.id
      );
      if (index !== -1) {
        state.cookies[index] = { ...state.cookies[index], ...payload };
        console.log("CookieSlice::onUpdateCookie: cookie actualizada", payload);
      }
    },

    // Borrar una cookie por su ID
    onDeleteCookie: (state, { payload: cookieId }) => {
      state.isLoadingCookies = false;
      state.errorCookieMessage = undefined; // Limpiar errores previos

      state.cookies = state.cookies.filter((cookie) => cookie.id !== cookieId);
      console.log("CookieSlice::onDeleteCookie: cookie eliminada", cookieId);
    },

    // Limpiar todas las cookies después del logout
    onClearCookies: (state) => {
      state.cookies = [];
      state.isLoadingCookies = true;
      state.errorCookieMessage = undefined; // Limpiar errores previos
      console.log("CookieSlice::onClearCookies: todas las cookies limpiadas");
    },
  },
});

export const {
  onLoadCookies,
  onAddNewCookie,
  onUpdateCookie,
  onDeleteCookie,
  onClearCookies,
} = cookieSlice.actions;
