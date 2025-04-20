import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  DomainDescriptionTabView,
  CookieListView,
  ImplementationView,
  SettingView,
  ScannerCookieView,
  StatisticsCookiesView,
} from "../views";

export const DomainTabs = ({ user, domain, setActiveTab }) => {
  // Recuperamos el índice del tab desde localStorage, si existe
  const activeDomainId = localStorage.getItem("activeDomainId");
  const storedTabIndex = localStorage.getItem(
    `activeTabIndex-${activeDomainId}`
  );
  const [currentTabIndex, setCurrentTabIndex] = useState(
    storedTabIndex ? parseInt(storedTabIndex, 10) : 0
  );

  // const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Guardamos el índice del tab activo en el localStorage cuando cambia
  useEffect(() => {
    // Para persistir el Tab actual
    localStorage.setItem(`activeTabIndex-${activeDomainId}`, currentTabIndex);

    // Para controlar la visibilidad del botón Añadir Cookie
    setActiveTab(currentTabIndex);
  }, [currentTabIndex, setActiveTab, activeDomainId]);

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
        <Tab label="Editar banner" />
        <Tab label="Escaneo" />
        <Tab label="Cookies" />
        <Tab label="Informes" />
      </Tabs>
      {currentTabIndex === 0 && (
        <DomainDescriptionTabView
          domain={domain}
          user={user}
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

DomainTabs.propTypes = {
  user: PropTypes.object,
  domain: PropTypes.object,
  setActiveTab: PropTypes.func,
};
