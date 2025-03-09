import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import {
  onAddNewDomain,
  onDeleteDomain,
  onLoadDomains,
  onUpdateDomain,
  onGetDomainById,
  onLoadDomainBanner,
  onAddNewBanner,
  onUpdateBanner,
  onLoadCookieStatistics,
  onLoadScriptBanner,
} from "../store/domain/domainSlice";
import Swal from "sweetalert2";

export const useDomainStore = () => {
  const dispatch = useDispatch();

  const {
    isLoadingDomains,
    isLoadingCookieBanner,
    isLoadingScriptBanner,
    statistics,
    domains,
    banner,
    script,
    errorMessage,
  } = useSelector((state) => state.domains);

  const startLoadingDomains = async () => {
    try {
      const { data } = await cookieManagerApi.get("/domains");
      console.log({ domains: data });
      dispatch(onLoadDomains(data));
    } catch (error) {
      console.log("Error en la carga de dominios");
      console.log(error);
      Swal.fire(
        "Error al listar los dominios",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startSavingDomain = async ({
    name,
    description,
    status,
    owner,
    contactEmail,
    countryOrigin,
  }) => {
    try {
      const { data } = await cookieManagerApi.post("/domains", {
        name,
        description,
        status,
        owner,
        contactEmail,
        countryOrigin,
      });
      console.log(data);

      // Despachamos el dominio recién creado
      dispatch(onAddNewDomain(data));

      // Devolvemos el dominio creado para usarlo en el componente si fuera necesario
      return data;
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al crear el dominio", errorMessage, "error");

      // Retornamos null en caso de error.
      return null;
    }
  };

  const startUpdatingDomain = async ({
    id,
    name,
    description,
    status,
    owner,
    contactEmail,
    countryOrigin,
  }) => {
    try {
      const { data } = await cookieManagerApi.put(`/domains/${id}`, {
        id,
        name,
        description,
        status,
        owner,
        contactEmail,
        countryOrigin,
      });
      console.log(data);
      dispatch(onUpdateDomain(data));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al actualizar", error.response.data.msg, "error");
    }
  };

  const startDeletingDomain = async (domainId) => {
    try {
      await cookieManagerApi.delete(`/domains/${domainId}`);

      // Despacha la acción para eliminar el dominio del estado local
      dispatch(onDeleteDomain(domainId));
    } catch (error) {
      console.error("Error al eliminar el dominio:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al eliminar", errorMsg, "error");
    }
  };

  const starGettingDomainById = async (id) => {
    try {
      const { data } = await cookieManagerApi.get(`/domains/${id}`);
      console.log(data);
      dispatch(onGetDomainById(data));
    } catch (error) {
      console.log("Error al obtener los datos del dominio");
      console.log(error);
      Swal.fire(
        "Error al obtener los datos del dominio",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startLoadingBanner = async (domainId) => {
    console.log("Valor de domainId:", domainId);
    try {
      const { data } = await cookieManagerApi.get(
        `/domains/${domainId}/banner`
      );
      console.log("Datos recibidos:", data);
      dispatch(onLoadDomainBanner(data));
      return data;
    } catch (error) {
      console.log("Error al cargar los datos del banner: ", error);
      console.log(error);
      Swal.fire(
        "Error al obtener los datos del banner",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startSavingBanner = async ({
    id,
    title,
    cookieDeclaration,
    legislation,
    legislationDescription,
    consentType,
    cookiePolicy,
    privacyPolicy,
    lang,
    companyLogo,
  }) => {
    try {
      const { data } = await cookieManagerApi.post(`/domains/${id}/banner`, {
        title,
        cookieDeclaration,
        legislation,
        legislationDescription,
        consentType,
        cookiePolicy,
        privacyPolicy,
        lang,
        companyLogo,
      });
      console.log(data);

      // Despachamos el dominio recién creado
      dispatch(onAddNewBanner(data));

      // Devolvemos el dominio creado para usarlo en el componente si fuera necesario
      return data;
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al crear el banner", errorMessage, "error");

      // Retornamos null en caso de error.
      return null;
    }
  };

  const startUpdatingBanner = async ({
    id,
    title,
    cookieDeclaration,
    legislation,
    legislationDescription,
    consentType,
    cookiePolicy,
    privacyPolicy,
    lang,
    companyLogo,
  }) => {
    try {
      const { data } = await cookieManagerApi.put(`/banner/${id}`, {
        title,
        cookieDeclaration,
        legislation,
        legislationDescription,
        consentType,
        cookiePolicy,
        privacyPolicy,
        lang,
        companyLogo,
      });

      console.log("Banner actualizado:", data);

      // Despachamos la acción para actualizar el banner en el estado global
      dispatch(onUpdateBanner(data));

      // Devolvemos el banner actualizado para uso posterior, si es necesario
      return data;
    } catch (error) {
      console.error("Error al actualizar el banner:", error);
      const errorMessage = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al actualizar el banner", errorMessage, "error");

      // Retornamos null en caso de error.
      return null;
    }
  };

  const startLoadingStatistics = async ({
    domainId,
    estado,
    categoria,
    fechaDesde,
    fechaHasta,
    plataforma,
    pais,
  }) => {
    try {
      const { data } = await cookieManagerApi.get(
        `/domains/${domainId}/estadisticas`,
        {
          params: {
            estado: estado,
            categoria: categoria,
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            plataforma: plataforma,
            pais: pais,
          },
        }
      );

      console.log({ estadisticas: data });
      dispatch(onLoadCookieStatistics(data));
    } catch (error) {
      console.log("Error en la carga de estadísticas del dominio", domainId);
      console.log(error);
      Swal.fire(
        "Error en la carga de estadísticas del dominio",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startExportingCookies = async (domainId) => {
    try {
      const response = await cookieManagerApi.get(
        `/domains/${domainId}/cookies/export-xlsx`,
        {
          // Mantener blob para archivos binarios
          responseType: "blob",
        }
      );

      console.log("Tipo de respuesta:", response.headers["content-type"]);

      // Crear un Blob para el archivo XLSX
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Crear URL para descarga
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cookies_report_${domainId}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);

      Swal.fire(
        "Éxito",
        "Las cookies han sido exportadas correctamente en formato Excel.",
        "success"
      );
    } catch (error) {
      console.error("Error al exportar cookies:", error);
      Swal.fire(
        "Error",
        error.response?.data?.msg || "No se pudo exportar las cookies.",
        "error"
      );
    }
  };

  const startDownloadFile = async (idBanner) => {
    console.log("Valor de bannerId: ", idBanner);
    try {
      const response = await cookieManagerApi.get(
        `/banner/scripts/export-file`,
        {
          params: { idBanner },
          responseType: "blob", // Importante para manejar archivos
        }
      );

      // Extraer el nombre del archivo desde Content-Disposition
      const contentDisposition = response.headers["content-disposition"];
      console.log(contentDisposition);
      let fileName = "script_banner.js"; // Nombre por defecto

      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+?)"/);
        if (match && match[1]) {
          fileName = match[1];
        }
      }

      // Crear un enlace para descargar el archivo con el nombre correcto
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); // Usar el nombre extraído
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al cargar los datos del script: ", error);
      Swal.fire(
        "Error al obtener los datos del script",
        error.response?.data?.msg || "Error desconocido",
        "error"
      );
    }
  };

  const startLoadingScript = async (domainId) => {
    console.log("Valor de domainId:", domainId);
    try {
      const { data } = await cookieManagerApi.get(
        `/domains/${domainId}/script-banner`
      );
      console.log("Datos recibidos:", data);
      dispatch(onLoadScriptBanner(data));
      return data;
    } catch (error) {
      console.log("Error al cargar los datos del script: ", error);
      console.log(error);
      Swal.fire(
        "Error al obtener los datos del script",
        error.response.data.msg,
        "error"
      );
    }
  };

  return {
    // Propiedades
    isLoadingDomains,
    isLoadingCookieBanner,
    isLoadingScriptBanner,
    domains,
    banner,
    script,
    statistics,
    errorMessage,
    // Métodos
    startLoadingDomains,
    startSavingDomain,
    startUpdatingDomain,
    startDeletingDomain,
    startLoadingBanner,
    startSavingBanner,
    startUpdatingBanner,
    startLoadingStatistics,
    starGettingDomainById,
    startExportingCookies,
    startDownloadFile,
    startLoadingScript,
  };
};
