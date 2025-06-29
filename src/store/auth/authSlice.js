import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //"authenticated", "not authenticated"
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onUpdate: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      console.log("AuthSlice::OnUpdate", payload);
      state.errorMessage = undefined;
    },
    onAddUserDomain: (state, { payload }) => {
      state.status = "authenticated";
      if (state.user?.domains) {
        state.user.domains.push(payload);
      } else {
        state.user.domains = [payload];
      }
      state.errorMessage = undefined;
    },
    onUpdateUserDomain: (state, { payload }) => {
      state.status = "authenticated";
      if (state.user?.domains) {
        state.user.domains = state.user.domains.map((domain) =>
          domain.id === payload.id ? payload : domain
        );
      }
      state.errorMessage = undefined;
    },
    onRemoveUserDomain: (state, { payload }) => {
      state.status = "authenticated";
      if (state.user?.domains) {
        state.user.domains = state.user.domains.filter(
          (domain) => domain.id !== payload
        );
      }
      state.errorMessage = undefined;
    },

    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onChecking,
  onLogin,
  onUpdate,
  onAddUserDomain,
  onUpdateUserDomain,
  onRemoveUserDomain,
  onLogout,
  clearErrorMessage,
} = authSlice.actions;
