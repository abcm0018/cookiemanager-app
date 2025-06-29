import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domains",
  initialState: {
    isLoadingDomains: true, // Nos indica si estan cargados los dominios o no
    isLoadingCookieBanner: true, // Nos indica si ya se ha cargado la informacion del banner
    isLoadingCookieStatistics: true, // Nos indica si ya se han cargado las estadísticas
    isLoadingScriptBanner: true,
    isLoadingActiveDomain: true, // Nos indica si el dominio activo esta cargado
    domains: [],
    statistics: [], // Listado de estadísiticas del dominio activo
    activeDomain: {}, // Información del dominio activo
    banner: {}, // Información del banner del dominio activo
    script: {}, // Información del script del banner del dominio activo
    errorDomainMessage: undefined,
    selectedDomain: null,
  },
  reducers: {
    // Acción que recupera todos los dominios
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

    // Acción que recuperar el dominio activo
    onGetDomainById: (state, { payload }) => {
      state.isLoadingActiveDomain = false;
      state.activeDomain = payload;
      state.banner = payload.banner;
      console.log("DomainSlice::onGetDomainById:", payload);
      state.script = payload.script;
      state.errorDomainMessage = payload;
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
      state.activeDomain = {};
    },

    // Acción para actualizar la información del dominio
    onUpdateDomain: (state, { payload }) => {
      // Código para actualizar un dominio
      state.isLoadingDomains = false;

      const index = state.domains.findIndex(
        (domain) => domain.id === payload.id
      );

      if (index !== -1) {
        state.domains[index] = payload;
      }

      // También actualizar el dominio activo si coincide
      if (state.activeDomain?.id === payload.id) {
        state.activeDomain = payload;
      }
    },

    // Acción para recuperar la información del banner del dominio activo
    onLoadDomainBanner: (state, { payload }) => {
      state.isLoadingCookieBanner = false;
      state.banner = payload;
    },

    onAddNewBanner: (state, { payload }) => {
      // Codigo para crear un nuevo banner si no está creado
      state.isLoadingCookieBanner = false;

      // Ya que el banner se ha actualizado
      state.banner = payload;

      // Si se produce un error en la edición del dominio
      state.errorDomainMessage = payload;
    },

    // Actualizar un banner existente
    onUpdateBanner: (state, { payload }) => {
      state.isLoadingCookieBanner = false;
      state.errorDomainMessage = payload; // Limpiar errores previos

      if (payload.id === state.banner.id) {
        state.banner = { ...state.banner, ...payload };
        console.log("Banner actualizado:", payload);
      }
    },

    onDeleteBanner: (state, { payload: bannerId }) => {
      state.isLoadingCookieBanner = false;

      if (state.banner?.id === bannerId) {
        state.banner = null; // Se elimina el banner
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

    onLoadScriptBanner: (state, { payload }) => {
      state.isLoadingScriptBanner = false;
      state.script = payload;
    },

    onClearStatistics: (state) => {
      state.statistics = [];
      state.isLoadingCookieStatistics = true;
    },

    onClearDomains: (state) => {
      state.domains = [];
      state.banner = {};
      state.script = {};
      state.statistics = [];
      state.activeDomain = {};
      state.isLoadingDomains = true;
      state.isLoadingCookieBanner = true;
      state.isLoadingScriptBanner = true;
      state.isLoadingActiveDomain = true;
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
  onDeleteBanner,
  onLoadCookieStatistics,
  onGetDomainById,
  onLoadScriptBanner,
  onClearDomains,
} = domainSlice.actions;
