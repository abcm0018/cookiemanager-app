import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoadingUser: true, // Indica si los datos se han cargado correctamente
    isLoadingSubscriptions: true, // Nos indica si ya se han cargado las subscripciones
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    // Acción para actualizar los datos de un usuario
    onUpdateUser: (state, { payload }) => {
      // código para actualizar un dominio
      state.isLoadingUser = false;
      state.user = payload;
    },

    // Acción para cancelar la suscripción de un usuario
    onCancelSubscription: (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
    },

    // Actualizar el plan de subscripción de un usuario
    onUpdateSubscriptionPlan: (state, { payload }) => {
      state.isLoadingUser = false;
      console.log("Actualizar plan: ", payload);
      state.user = payload;
    },
  },
});

export const { onUpdateUser, onCancelSubscription, onUpdateSubscriptionPlan } =
  userSlice.actions;
