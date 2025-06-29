import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDomainStore, useForm } from "../../hooks";
import Swal from "sweetalert2";
import { CDialogForm } from "./CDialogForm";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { addDomainForm } from "../utils/addDomainForm";

export const CAddDomainDialog = ({
  openAddDomainDialog,
  handleCloseAddDomainDialog,
}) => {
  const estado = "Activo";
  const { startSavingDomain, errorMessage, domains } = useDomainStore();

  const {
    domainName,
    domainDescription,
    domainOwner,
    domainContactEmail,
    domainCountryOrigin,
    onInputChange: onCreateDomainChange,
    onResetForm,
  } = useForm(addDomainForm);

  const [errors, setErrors] = useState({});

  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  const handleCloseAndReset = () => {
    onResetForm();
    setErrors({});
    handleCloseAddDomainDialog();
  };

  const validateFields = () => {
    const newErrors = {};
    const specialCharRegex = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/;
    const allDigits = /^\d+$/;

    if (!domainName.trim()) {
      newErrors.domainName = "* Campo obligatorio";
    } else {
      const domainRegex = /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      if (!domainRegex.test(domainName.trim())) {
        newErrors.domainName =
          "* El nombre de dominio no es válido. Ej: www.ejemplo.com o ejemplo.com";
      }
    }

    if (!domainDescription.trim()) {
      newErrors.domainDescription = "* Campo obligatorio";
    } else if (domainDescription.trim().length < 4) {
      newErrors.domainDescription =
        "* La descripción debe tener al menos 4 caracteres";
    } else if (specialCharRegex.test(domainDescription.trim())) {
      newErrors.domainDescription =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(domainDescription.trim())) {
      newErrors.domainDescription = "* El campo no puede empezar por un número";
    } else if (allDigits.test(domainDescription.trim())) {
      newErrors.domainDescription =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!domainOwner.trim()) {
      newErrors.domainOwner = "* Campo obligatorio";
    } else if (domainOwner.trim().length < 3) {
      newErrors.domainOwner =
        "* El nombre del propietario debe tener al menos 3 caracteres";
    } else if (specialCharRegex.test(domainOwner.trim())) {
      newErrors.domainOwner =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(domainOwner.trim())) {
      newErrors.domainOwner = "* El campo no puede empezar por un número";
    } else if (allDigits.test(domainOwner.trim())) {
      newErrors.domainOwner =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!domainContactEmail.trim()) {
      newErrors.domainContactEmail = "* Campo obligatorio";
    }

    if (!domainCountryOrigin.trim()) {
      newErrors.domainCountryOrigin = "* Campo obligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onCreateDomainSubmit = (event) => {
    event.preventDefault();

    if (!validateFields()) return false;

    const persistRoot = localStorage.getItem("persist:root");

    if (domains) {
      //Lo convertimos a string
      const parsedData = JSON.parse(persistRoot);

      // Extraemos el "auth" y "subscriptions"
      const auth = JSON.parse(parsedData.auth);
      const subscriptions = JSON.parse(parsedData.subscriptions);

      // Se obtiene el plan de subscripcion del usuario y el número de dominios que tiene
      const userPlanType = auth.user.subscription;
      // const userDomains = auth.user.domains || [];

      // Obtenemos el número total de dominios
      const numberDomains = domains.length;

      // Obtenemos el array de subscripciones del localStorage
      const subscriptionsList = subscriptions.subscriptions;

      // Buscamos el plan del usuario en la lista de suscripciones
      const userPlanDetails = subscriptionsList.find(
        (sub) => sub.planType === userPlanType
      );

      // Obtenemos el máximo número de dominios del plan que tiene el usuario
      if (userPlanDetails) {
        const maxAllowedDomains = userPlanDetails.maxDomains;

        // Comprobamos si el usuario ha superado el número de dominios del plan
        if (maxAllowedDomains > numberDomains) {
          startSavingDomain({
            name: cleanString(domainName),
            description: cleanString(domainDescription),
            status: estado,
            owner: cleanString(domainOwner),
            contactEmail: cleanString(domainContactEmail),
            countryOrigin: cleanString(domainCountryOrigin),
          });
          return true;
        } else {
          Swal.fire({
            icon: "error",
            title: "Límite de dominios alcanzado",
            text: `Tu plan (${userPlanType}) permite un máximo de ${maxAllowedDomains} dominio(s). 
                  Para agregar más dominios, actualiza tu suscripción.`,
            confirmButtonText: "Cerrar",
          });
        }
      }
    }
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openAddDomainDialog}
        onClose={handleCloseAndReset}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            // onCreateDomainSubmit(event);
            // handleCloseAndReset();
            const success = onCreateDomainSubmit(event);
            if (success) handleCloseAndReset();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir dominio</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Escriba su nombre de dominio o sitio web a continuación para crear
            una nueva instancia de CookieManager
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }} color="primary.main">
            CookieManager rastreará el sitio web para identificar las cookies en
            uso y crear un banner personalizado de consentimiento de cookies. La
            primera exploración sólo escanerá una solo página para acelerar el
            proceso de despliegue. Una exploración completa del sitio se llevará
            a cabo 24 horas más tarde o puede solicitar manualmente un nuevo
            análisis.
          </DialogContentText>
          <CDialogForm
            domainName={domainName}
            domainDescription={domainDescription}
            domainOwner={domainOwner}
            domainContactEmail={domainContactEmail}
            domainCountryOrigin={domainCountryOrigin}
            onEditDomainChange={onCreateDomainChange}
            errors={errors}
          />
          <Box sx={{ width: 775, mt: 3 }}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Marcos políticos y configuración del consentimiento
            </Typography>
            <Typography>
              Seleccione una plantilla a continuación para controlar la
              configuración regional y los marcos de políticas para su dominio.
              Siempre puede cambiar estos ajustes más adelante.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Por defecto (consentimiento explícito)"
              />
            </FormGroup>
            <Typography>
              El diálogo de consentimiento de CookieManager se mostrará para
              todos los usuarios, requiriendo el consentimiento explícito.
              Política simple y estricta para cumplir con la mayoría de las
              regulaciones, incluyendo GDPR.
            </Typography>
            <FormGroup sx={{ mt: 2 }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Activar el modo consentimiento"
              />
            </FormGroup>
            <Typography>
              El modo de consentimiento está perfectamente integrado en
              CookieManager, garantizando una implementación sin esfuerzo en
              línea con los requisitos técnicos del modo de consentimiento.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              borderColor: "secondary.main",
            }}
          >
            Añadir dominio
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseAndReset}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CAddDomainDialog.propTypes = {
  openAddDomainDialog: PropTypes.bool,
  handleCloseAddDomainDialog: PropTypes.func,
};
