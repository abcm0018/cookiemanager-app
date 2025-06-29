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

export const DomainTabs = ({ user, domain, setActiveTab, isInactive }) => {
  const activeDomainId = localStorage.getItem("activeDomainId");
  const storedTabIndex = localStorage.getItem(
    `activeTabIndex-${activeDomainId}`
  );

  // Estado del índice de pestaña actual
  const [currentTabIndex, setCurrentTabIndex] = useState(() => {
    const parsedIndex = storedTabIndex ? parseInt(storedTabIndex, 10) : 0;
    return isNaN(parsedIndex) ? 0 : parsedIndex;
  });

  // Función para navegar directamente a la pestaña "Cookies"
  const goToCookieListTab = () => {
    const index = tabs.findIndex((tab) => tab.key === "cookies");
    if (index !== -1) {
      setCurrentTabIndex(index);
    }
  };

  // Definición dinámica de las pestañas (labels y componentes)
  const tabs = [
    {
      label: "Descripción general",
      key: "overview",
      component: (
        <DomainDescriptionTabView
          domain={domain}
          user={user}
          setCurrentTabIndex={setCurrentTabIndex}
        />
      ),
    },
    {
      label: "Implementación",
      key: "implementation",
      component: <ImplementationView />,
    },
    !isInactive && {
      label: "Editar banner",
      key: "settings",
      component: <SettingView setCurrentTabIndex={setCurrentTabIndex} />,
    },
    {
      label: "Escaneo",
      key: "scanner",
      component: <ScannerCookieView onDetailClick={goToCookieListTab} />,
    },
    {
      label: "Cookies",
      key: "cookies",
      component: <CookieListView />,
    },
    {
      label: "Informes",
      key: "reports",
      component: <StatisticsCookiesView />,
    },
  ].filter(Boolean); // Elimina el tab nulo si isInactive === true

  // Efecto para guardar y comunicar la pestaña activa
  useEffect(() => {
    if (currentTabIndex >= tabs.length) {
      setCurrentTabIndex(0); // Previene errores si la pestaña ya no existe
    } else {
      localStorage.setItem(`activeTabIndex-${activeDomainId}`, currentTabIndex);
      setActiveTab(currentTabIndex);
    }
  }, [currentTabIndex, setActiveTab, activeDomainId, tabs.length]);

  // Manejo de cambio de pestaña
  const handleChange = (event, newIndex) => {
    setCurrentTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={currentTabIndex} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box mt={2}>{tabs[currentTabIndex]?.component}</Box>
    </Box>
  );
};

DomainTabs.propTypes = {
  user: PropTypes.object,
  domain: PropTypes.object,
  setActiveTab: PropTypes.func.isRequired,
  isInactive: PropTypes.bool,
};
