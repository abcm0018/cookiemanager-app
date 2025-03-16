import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState: {
    isLoadingSubscriptions: true, // Nos indica si ya se han cargado las subscripciones
    subscriptions: [],
    errorMessage: undefined,
  },
  reducers: {
    // Carga la lista de suscripciones
    onLoadSubscriptions: (state, { payload = [] }) => {
      state.isLoadingSubscriptions = false;
      state.subscriptions = payload;
    },
    onClearSubscriptions: (state) => {
      state.subscriptions = [];
      state.isLoadingSubscriptions = true;
      state.errorMessage = undefined; // Limpiar errores previos
    },
  },
});

export const { onLoadSubscriptions, onClearSubscriptions } =
  subscriptionSlice.actions;
