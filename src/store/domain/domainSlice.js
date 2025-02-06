import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domains",
  initialState: {
    isLoadingDomains: true, // Nos indica si estan cargados los dominios o no
    isLoadingCookieBanner: true, // Nos indica si ya se ha cargado la informacion del banner
    isLoadingCookieStatistics: true, // Nos indica si ya se han cargado las estadísticas
    domains: [],
    statistics: [], // Listado de estadísiticas del dominio
    banner: {},
    errorDomainMessage: undefined,
    selectedDomain: null,
  },
  reducers: {
    onLoadDomains: (state, { payload = [] }) => {
      // Codigo para cargar los eventos de la base de datos
      state.isLoadingDomains = false;
      state.domains = payload;
      // Si se produce un error en el listado de dominios
      state.errorDomainMessage = payload;

      // Si se añade un nuevo dominio
      payload.forEach((domain) => {
        const exists = state.domains.some(
          (dbDomain) => dbDomain.id === domain.id
        );
        if (!exists) {
          state.domains.push(domain);
        }
      });
    },

    onAddNewDomain: (state, { payload }) => {
      // Codigo para crear un nuevo dominio
      state.isLoadingDomains = false;
      state.domains.push(payload);

      // Si se produce un error en la edición del dominio
      state.errorDomainMessage = payload;
    },

    onDeleteDomain: (state, { payload: domainId }) => {
      // código para eliminar un dominio
      state.isLoadingDomains = false;
      state.domains = state.domains.filter((domain) => domain.id !== domainId);
    },

    onUpdateDomain: (state, { payload }) => {
      // Código para actualizar un dominio
      state.isLoadingDomains = false;

      const index = state.domains.findIndex(
        (domain) => domain.id === payload.id
      );

      if (index !== -1) {
        state.domains[index] = payload;
      }
    },

    onLoadDomainBanner: (state, { payload }) => {
      state.isLoadingCookieBanner = false;
      state.banner = payload;
    },

    onAddNewBanner: (state, { payload }) => {
      // Codigo para crear un nuevo banner si no está creado
      state.isLoadingCookieBanner = false;
      state.banner = payload;

      // Si se produce un error en la edición del dominio
      state.errorDomainMessage = payload;
    },

    // Actualizar un banner existente
    onUpdateBanner: (state, { payload }) => {
      state.isLoadingCookieBanner = false;
      state.errorDomainMessage = undefined; // Limpiar errores previos

      if (payload.id === state.banner.id) {
        state.banner = { ...state.banner, ...payload };
        console.log("Banner actualizado:", payload);
      }
    },

    onLoadCookieStatistics: (state, { payload = [] }) => {
      state.isLoadingCookieStatistics = false;
      state.statistics = payload;

      // Si se añade una nuesva estadísitca
      payload.forEach((stat) => {
        const exists = state.statistics.some((dbStat) => dbStat.id === stat.id);
        if (!exists) {
          state.domains.push(stat);
        }
      });
    },

    onClearDomains: (state) => {
      state.domains = [];
      state.banner = {};
      state.isLoadingDomains = true;
      state.isLoadingCookieBanner = true;
      state.isLoadingCookieStatistics = true;
      state.errorDomainMessage = undefined;
    },
  },
});

export const {
  onLoadDomains,
  onAddNewDomain,
  onUpdateDomain,
  onDeleteDomain,
  onLoadDomainBanner,
  onAddNewBanner,
  onUpdateBanner,
  onLoadCookieStatistics,
  onGetDomainById,
  onClearDomains,
} = domainSlice.actions;
