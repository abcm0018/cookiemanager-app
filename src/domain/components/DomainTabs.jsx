import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  DomainDescriptionTabView,
  CookieListView,
  ImplementationView,
  SettingView,
  ScannerCookieView,
  StatisticsCookiesView,
} from "../views";

const cards = [
  {
    id: 1,
    title: "Plan básico",
    description: "Descripción del plan básico",
    buttonTitle: "Actualizar plan",
    bgcolor: "#F0F4FF",
  },
  {
    id: 2,
    title: "107 Cookies",
    description:
      "66 cookies se instalan antes del consentimiento del usuario o aún no se han categorizado",
    buttonTitle: "Gestionar cookies",
    bgcolor: "#FFF5E6",
  },
  {
    id: 3,
    title: "Último escaneo de cookies:",
    description: "107 cookies encontradas en 50 páginas",
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
    title: "Borrar dominio",
    description:
      "Esto borrará tu dominio incluyendo cualquier personalidzaión y registro de consentimiento. Tenga en cuenta que esta acción NO se podrá revertir",
    buttonTitle: "Borrar dominio",
    bgcolor: "#FFE6E6",
  },
];

export const DomainTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (event, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  const goToCookieListTab = () => {
    setCurrentTabIndex(4);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={currentTabIndex} onChange={handleChange} centered>
        <Tab label="Descripción general" />
        <Tab label="Implementación" />
        <Tab label="Ajustes" />
        <Tab label="Escaneo" />
        <Tab label="Cookies" />
        <Tab label="Informes" />
      </Tabs>
      {currentTabIndex === 0 && (
        <DomainDescriptionTabView
          cards={cards}
          setCurrentTabIndex={setCurrentTabIndex}
        />
      )}
      {currentTabIndex === 1 && <ImplementationView />}
      {currentTabIndex === 2 && <SettingView />}
      {currentTabIndex === 3 && (
        <ScannerCookieView onDetailClick={goToCookieListTab} />
      )}
      {currentTabIndex === 4 && <CookieListView />}
      {currentTabIndex === 5 && <StatisticsCookiesView />}
    </Box>
  );
};
