import dayjs from "dayjs";

export const generateCards = (domain = {}, banner = {}, user = {}) => {
  const { totalCookies = 0, lastCookieScan = null } = domain;
  const { subscription } = user;
  const lastScanDate = lastCookieScan
    ? dayjs(lastCookieScan).format("DD/MM/YYYY")
    : null;

  return [
    {
      id: 1,
      title: subscription.toLocaleUpperCase(),
      description: "Descripción del plan básico",
      buttonTitle: "Actualizar plan",
      bgcolor: "#F0F4FF",
    },
    {
      id: 2,
      title: `Total de cookies cargadas: ${totalCookies}`,
      description:
        totalCookies > 0
          ? "Hay cookies que se instalan antes del consentimiento del usuario o aún no se han categorizado."
          : "Aún no se han cargado cookies.",
      buttonTitle: totalCookies > 0 ? "Gestionar cookies" : null,
      bgcolor: "#FFF5E6",
    },
    {
      id: 3,
      title: lastScanDate
        ? `Último escaneo de cookies: ${lastScanDate}`
        : "Todavía no se han cargado cookies",
      description: lastScanDate
        ? `Se han encontrado ${totalCookies} cookies en 5 páginas.`
        : "Para cargar cookies, pulsa sobre el botón Escanear 👇🏼",
      buttonTitle: "Escanear",
      bgcolor: "#E6FAF1",
    },
    {
      id: 4,
      title: "Utilización",
      description: "Sesiones totales en el periodo mensual.",
      buttonTitle: "Ver informes",
      bgcolor: "#FFF9E6",
    },
    {
      id: 5,
      title: banner.title ? "Configuración del banner" : "Crear banner",
      description: banner.title
        ? banner.cookieDeclaration ||
          "Tu banner está configurado correctamente."
        : "Todavía no tienes un banner creado, haz clic en el botón para configurarlo.",
      buttonTitle: banner.title ? "Editar banner" : "Crear banner",
      bgcolor: banner.title ? "#E6F4FF" : "#F9E6FF",
    },
    {
      id: 6,
      title:
        totalCookies > 0 ? "Borrar dominio" : "Borrar dominio (sin cookies)",
      description:
        totalCookies > 0
          ? "Esto borrará tu dominio, incluyendo cualquier personalización y registro de consentimiento. Tenga en cuenta que esta acción NO se podrá revertir."
          : "Esto borrará tu dominio incluso si no tiene cookies cargadas. Tenga en cuenta que esta acción NO se podrá revertir.",
      buttonTitle: "Borrar dominio",
    },
  ];
};
