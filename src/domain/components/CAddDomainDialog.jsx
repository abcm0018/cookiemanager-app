import PropTypes from "prop-types";
import { useEffect } from "react";
import { DialogLayout } from "../layout/DialogLayout";
import { useDomainStore, useForm } from "../../hooks";
import Swal from "sweetalert2";
import { DialogForm } from "./CDialogForm";

const createDomainForm = {
  newDomainId: "",
  newDomainName: "",
  newDomainDescription: "",
  newDomainStatus: "active",
  newDomainOwner: "",
  newDomainContactEmail: "",
  newDomainCountryOrigin: "",
};

export const CAddDomainDialog = ({
  openAddDomainDialog,
  handleCloseAddDomainDialog,
}) => {
  const { startSavingDomain, errorMessage } = useDomainStore();

  const {
    newDomainId,
    newDomainName,
    newDomainDescription,
    newDomainStatus,
    newDomainOwner,
    newDomainContactEmail,
    newDomainCountryOrigin,
    onInputChange: onAddDomainChange,
  } = useForm(createDomainForm);

  const domainSubmit = (event) => {
    event.preventDefault();
    startSavingDomain({
      id: newDomainId,
      name: newDomainName,
      description: newDomainDescription,
      status: newDomainStatus,
      owner: newDomainOwner,
      contactEmail: newDomainContactEmail,
      countryOrigin: newDomainCountryOrigin,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <DialogLayout
      open={openAddDomainDialog}
      onClose={handleCloseAddDomainDialog}
      title="Añadir dominio"
      description1="Escriba su nombre de dominio o sitio web a continuación para crear una nueva instancia de CookieManager."
      description2="CookieManager rastreará el sitio web para identificar las cookies en uso y crear un banner personalizado de consentimiento de cookies. La primera exploración solo escaneará una sola página para acelerar el proceso de despliegue. Una exploración completa del sitio se llevará a cabo 24 horas más tarde o puede solicitar manualmente un nuevo análisis."
      maxWidth="lg"
      titleButton1="Añadir dominio"
      titleButton2="Cancelar"
      funcion={domainSubmit}
    >
      <DialogForm
        newDomainId={newDomainId}
        newDomainName={newDomainName}
        newDomainDescription={newDomainDescription}
        newDomainStatus={newDomainStatus}
        newDomainOwner={newDomainOwner}
        newDomainContactEmail={newDomainContactEmail}
        newDomainCountryOrigin={newDomainCountryOrigin}
        onAddDomainChange={onAddDomainChange}
      />
    </DialogLayout>
  );
};

CAddDomainDialog.propTypes = {
  openAddDomainDialog: PropTypes.bool.isRequired,
  handleCloseAddDomainDialog: PropTypes.func.isRequired,
};
