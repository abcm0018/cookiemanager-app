import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
  name: "cookies",
  initialState: {
    isLoadingCookies: true, //Nos indica si están cargadas las cookies
    cookies: [],
    errorCookieMessage: undefined,
  },
  reducers: {
    // Código para cargar los eventos de la base de datos

    onLoadCookies: (state, { payload = [] }) => {
      state.isLoadingCookies = false;
      state.cookies = payload;
      console.log("CookieSlice::OnLoadCookies: cookies cargadas", payload);
      // Si se produce un error en el listado de cookies
      state.errorCookieMessage = payload;

      // Si se añade una nueva cookie
      payload.forEach((cookie) => {
        const exists = state.cookies.some(
          (dbCookie) => dbCookie.id === cookie.id
        );
        if (!exists) {
          state.cookies.push(cookie);
        }
      });
    },
  },

  // Código para crear un nuevo dominio
  onAddNewCookie: (state, { payload }) => {
    state.isLoadingCookies = false;
    state.cookies.push(payload);
    // Si se produce un error en la edición del dominio
    state.errorCookieMessage = payload;
  },

  // Código para actualizar un nuevo dominio
  onUpdateCookie: (state, { payload }) => {
    state.isLoadingCookies = false;

    const index = state.cookies.findIndex((cookie) => cookie.id === payload.id);

    if (index !== -1) {
      state.cookies[index] = payload;
    }
  },

  // Código para borrar un dominio
  onDeleteDomain: (state, { payload: cookieId }) => {
    state.isLoadingDomain = false;

    // Devuelve un array de cookies filtrado en el que no aparece la cookie con el identificador pasado
    state.cookies = state.cookies.filter((cookie) => cookie.id !== cookieId);
  },

  // Acción para borrar todas las cookies después del logout
  onClearCookies: (state) => {
    state.cookies = [];
    state.isLoadingCookies = true;
    state.errorCookieMessage = undefined;
  },
});

export const {
  onLoadCookies,
  onAddNewCookie,
  onUpdateCookie,
  onDeleteCookie,
  onClearCookies,
} = cookieSlice.actions;
