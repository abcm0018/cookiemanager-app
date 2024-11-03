import { useState } from "react";
import { ControlView } from "./ControlView";
import descargaImage from "../../assets/img/suscripcion.jpg";
import userIconImage from "../../assets/img/usuarios.jpg";

export const ControlTabs = () => {
  const cardsControl = [
    {
      id: 1,
      title: "Planes de suscripción",
      description: "",
      buttonTitle: "Ver todo",
      bgcolor: "#F0F4FF",
      imageSrc: descargaImage,
    },
    {
      id: 2,
      title: "Total de usuarios",
      description: "7",
      buttonTitle: "Gestionar usuarios",
      bgcolor: "#FFF5E6",
      imageSrc: userIconImage,
    },
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (event, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return <ControlView cardsControl={cardsControl} />;
};
