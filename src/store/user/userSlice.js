import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoadingUser: true, // Indica si los datos se han cargado correctamente
    isLoadingSubscriptions: true, // Nos indica si ya se han cargado las subscripciones
    user: [],
    errorMessage: undefined,
  },
  reducers: {
    // Acción para actualizar los datos de un usuario
    onUpdateUser: (state, { payload }) => {
      // código para actualizar un dominio
      state.isLoadingUser = false;
      const index = state.users.findIndex((user) => user.id === payload.id);

      if (index !== -1) {
        state.users[index] = payload;
      }
    },
    // Acción para cancelar la suscripción de un usuario
    onCancelSubscription: (state, { payload }) => {
      state.isLoadingUser = false;
      const index = state.users.findIndex((user) => user.id === payload.userId);

      if (index !== -1) {
        state.users[index] = {
          ...state.users[index],
          subscription: "Starter", // Asume que `subscription` almacena el plan actual
        };
      }
    },
    // Actualizar el plan de subscripción de un usuario
    onUpdateSubscriptionPlan: (state, { payload }) => {
      state.isLoadingUser = false;
      const index = state.users.findIndex((user) => user.id === payload.userId);
      if (index !== -1) {
        state.users[index] = {
          ...state.users[index],
          subscription: payload.newPlan,
        };
      }
    },
  },
});

export const { onUpdateUser, onCancelSubscription, onUpdateSubscriptionPlan } =
  userSlice.actions;
