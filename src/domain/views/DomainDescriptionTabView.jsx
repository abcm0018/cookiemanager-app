import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CardDetail } from "../components/CardDetails";
import { useNavigate } from "react-router-dom";

export const DomainDescriptionTabView = ({
  cards = [],
  setCurrentTabIndex,
  handleOpenDeleteDomainDialog,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonTitle) => {
    switch (buttonTitle) {
      case "Actualizar plan":
        navigate("/subscription");
        break;
      case "Escanear":
        setCurrentTabIndex(3);
        break;
      case "Gestionar cookies":
        setCurrentTabIndex(4);
        break;
      case "Ver informes":
        setCurrentTabIndex(5);
        break;
      case "Borrar dominio":
        handleOpenDeleteDomainDialog();
        break;
      default:
        setCurrentTabIndex(0);
    }
  };

  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 12 }}>
      {cards.map((card) => (
        <CardDetail
          key={card.id}
          title={card.title}
          description={card.description}
          buttonTitle={card.buttonTitle}
          bgcolor={card.bgcolor}
          onButtonClick={() => handleButtonClick(card.buttonTitle)}
        />
      ))}
    </Grid2>
  );
};

DomainDescriptionTabView.propTypes = {
  cards: PropTypes.array,
  setCurrentTabIndex: PropTypes.func.isRequired,
  handleOpenDeleteDomainDialog: PropTypes.func.isRequired,
};
