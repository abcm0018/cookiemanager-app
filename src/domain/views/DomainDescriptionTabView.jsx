import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CAddBannerDialog, CardDetail } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useDomainStore } from "../../hooks";
import { useEffect, useState } from "react";
import { generateCards } from "../utils";
import Swal from "sweetalert2";

export const DomainDescriptionTabView = ({
  domain = {},
  user = {},
  setCurrentTabIndex,
}) => {
  const {
    activeDomain,
    banner,
    startLoadingBanner,
    startDeletingDomain,
    isLoadingCookieBanner,
    startDeletingBanner,
    errorMessage,
  } = useDomainStore();

  const { id } = useParams();

  const [cookieBanner, setCookieBanner] = useState(banner || {});
  const [openAddBannerDialog, setOpenAddBannerDialog] = useState(false);

  const navigate = useNavigate();

  const handleOpenAddBanner = () => {
    console.log("Abriendo el diálogo para añadir banner");
    setOpenAddBannerDialog(true);
  };

  const handleCloseAddBannerDialog = () => {
    console.log("Cerrando el diálogo de añadir banner");
    setOpenAddBannerDialog(false);
  };

  const handleDeleteDomain = (domainId) => {
    Swal.fire({
      title: "Estás a punto de eliminar un dominio, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingDomain(domainId);
        Swal.fire({
          title: "Dominio eliminado",
          text: "El dominio ha sido eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  const handleDeleteBanner = (bannerId) => {
    Swal.fire({
      title: "Estás a punto de eliminar un banner, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingBanner(bannerId);
        Swal.fire({
          title: "Banner eliminado",
          text: "El banner ha sido eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  const handleButtonClick = (buttonTitle) => {
    switch (buttonTitle) {
      case "Actualizar plan":
        localStorage.setItem("updateSubscriptionPreviousPage", "domains");
        navigate("/manage-subscriptions");
        break;
      case "Editar banner":
        setCurrentTabIndex(2);
        break;
      case "Crear banner":
        handleOpenAddBanner();
        break;
      case "Borrar banner":
        handleDeleteBanner(banner.id);
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
        handleDeleteDomain(domain.id);
        break;
      default:
        setCurrentTabIndex(0);
    }
  };

  useEffect(() => {
    startLoadingBanner(id); // Carga el banner al cambiar de dominio
  }, [id, startLoadingBanner]);

  useEffect(() => {
    if (!isLoadingCookieBanner && banner) {
      setCookieBanner(banner);
    }
  }, [banner, isLoadingCookieBanner]);

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error al eliminar el dominio", errorMessage, "error");
    }
  }, [errorMessage]);

  const cards = generateCards(
    activeDomain.totalCookies,
    activeDomain.lastCookieScan,
    banner || {},
    user
  );

  return (
    <Grid2 container spacing={3} sx={{ pb: 10, pt: 4, pl: 12 }}>
      {cards.map((card) => (
        <CardDetail
          key={card.id}
          title={card.title}
          description={card.description}
          buttonTitle={card.buttonTitle}
          bgcolor={card.bgcolor}
          secondaryButtonTitle={card.buttonTitleSecondary}
          onButtonClick={() => handleButtonClick(card.buttonTitle)}
          onSecondaryButtonClick={() => handleDeleteBanner(banner?.id)}
        />
      ))}
      <CAddBannerDialog
        id={id}
        openAddBannerDialog={openAddBannerDialog}
        handleCloseAddBannerDialog={handleCloseAddBannerDialog}
      />
    </Grid2>
  );
};

DomainDescriptionTabView.propTypes = {
  domain: PropTypes.object,
  user: PropTypes.object,
  setCurrentTabIndex: PropTypes.func.isRequired,
};
