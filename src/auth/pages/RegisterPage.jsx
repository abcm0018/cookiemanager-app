import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout";
import { useAuthStore, useForm, useSubscriptionStore } from "../../hooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { registerFormField } from "../utils";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { startRegister, errorMessage } = useAuthStore();
  const { subscriptions, startLoadingSubscriptions } = useSubscriptionStore();

  const [errors, setErrors] = useState({});
  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  const {
    registerName,
    registerSurname,
    registerEmail,
    registerPassword,
    registerCompany,
    registerPlan,
    registerTerms,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormField);

  const validateFields = () => {
    const newErrors = {};

    const specialCharRegex = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/; // empieza por número
    const allDigits = /^\d+$/; // solo números

    if (!registerName.trim()) {
      newErrors.registerName = "* Campo obligatorio";
    } else if (startsWithNumber.test(registerName)) {
      newErrors.registerName = "* El campo no puede empezar por un número";
    } else if (specialCharRegex.test(registerName)) {
      newErrors.registerName =
        "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(registerName)) {
      newErrors.registerName =
        "* El campo no puede estar compuesto solo por números";
    } else if (registerName.trim().length < 3) {
      newErrors.registerName = "El nombre debe tener al menos 3 caracteres";
    }

    if (!registerSurname.trim()) {
      newErrors.registerSurname = "* Campo obligatorio";
    } else if (startsWithNumber.test(registerSurname)) {
      newErrors.registerSurname = "* El campo no puede empezar por un número";
    } else if (specialCharRegex.test(registerSurname)) {
      newErrors.registerSurname =
        "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(registerSurname)) {
      newErrors.registerSurname =
        "* El campo no puede estar compuesto solo por números";
    } else if (registerSurname.trim().length < 3) {
      newErrors.registerSurname =
        "Los apellidos deben tener al menos 3 caracteres";
    }

    if (!registerEmail.trim()) newErrors.registerEmail = "* Campo obligatorio";
    if (!registerCompany.trim()) {
      newErrors.registerCompany = "* Campo obligatorio";
    } else if (registerCompany.trim().length < 3) {
      newErrors.registerCompany =
        "La compañía debe tener al menos 3 caracteres";
    } else if (specialCharRegex.test(registerCompany.trim())) {
      newErrors.registerCompany =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(registerCompany.trim())) {
      newErrors.registerCompany = "* El campo no puede empezar por un número";
    } else if (allDigits.test(registerCompany.trim())) {
      newErrors.registerCompany =
        "* El campo no puede estar compuesto solo por números";
    }
    if (!registerPlan.trim()) newErrors.registerPlan = "* Campo obligatorio";
    if (!registerPassword.trim())
      newErrors.registerPassword = "* Campo obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Para enviar los datos del formulario
  const registerSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startRegister({
      name: cleanString(registerName),
      surname: cleanString(registerSurname),
      email: cleanString(registerEmail),
      password: cleanString(registerPassword),
      company: cleanString(registerCompany),
      subscriptionPlan: registerPlan,
      termsAccept: registerTerms,
    })
      .then((response) => {
        if (response?.status === 200 && response?.data === "OK") {
          Swal.fire({
            title: "Registro exitoso",
            text: "Tu cuenta ha sido creada correctamente. Ahora inicia sesión.",
            icon: "success",
            confirmButtonText: "Ir a login",
            timer: 5000,
          }).then(() => {
            navigate("/auth/login");
          });
          return true;
        }
      })
      .catch((error) => {
        // Manejo de errores
        console.error("Error en el registro:", error);
        Swal.fire({
          title: "Error en el registro",
          text: "Hubo un problema al registrar la cuenta.",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    startLoadingSubscriptions();
  }, []);

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <AuthLayout title="Registro" size={480}>
      <form onSubmit={registerSubmit}>
        <Grid2 container>
          <Grid2 container size={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre*"
              name="registerName"
              value={registerName}
              size="medium"
              required
              sx={{ mr: 3.25 }}
              onChange={onRegisterInputChange}
              error={!!errors.registerName}
              helperText={errors.registerName}
            />
            <TextField
              label="Apellidos"
              type="text"
              placeholder="Apellidos*"
              name="registerSurname"
              value={registerSurname}
              size="medium"
              required
              onChange={onRegisterInputChange}
              error={!!errors.registerSurname}
              helperText={errors.registerSurname}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12} sx={{ mr: 1, mt: 1 }}>
          <TextField
            label="Correo electrónico"
            type="email"
            placeholder="Correo electrónico*"
            name="registerEmail"
            value={registerEmail}
            fullWidth
            size="medium"
            required
            onChange={onRegisterInputChange}
            error={!!errors.registerEmail}
            helperText={errors.registerEmail}
          />
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña*"
            name="registerPassword"
            value={registerPassword}
            fullWidth
            size="medium"
            required
            sx={{ mt: 1 }}
            onChange={onRegisterInputChange}
            error={!!errors.registerPassword}
            helperText={errors.registerPassword}
          />
          <TextField
            label="Compañía"
            type="text"
            placeholder="Compañía*"
            name="registerCompany"
            value={registerCompany}
            fullWidth
            size="medium"
            required
            sx={{ mt: 1 }}
            onChange={onRegisterInputChange}
            error={!!errors.registerCompany}
            helperText={errors.registerCompany}
          />
          <FormControl fullWidth sx={{ mt: 1 }} size="medium">
            <InputLabel id="select-label">Plan</InputLabel>
            <Select
              label="Plan de suscripción"
              name="registerPlan"
              value={registerPlan}
              onChange={onRegisterInputChange}
              error={!!errors.registerPlan}
              helperText={errors.registerPlan}
            >
              {subscriptions.map((subscription) => (
                <MenuItem
                  key={subscription.planType}
                  value={subscription.planType}
                >
                  {subscription.planType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormGroup sx={{ mt: 1 }}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  name="registerTerms"
                  checked={registerTerms}
                  onChange={(e) =>
                    onRegisterInputChange({
                      target: { name: e.target.name, value: e.target.checked },
                    })
                  }
                />
              }
              label="Acepto las condiciones de Servicio y la Política de Privacidad"
              sx={{ color: "secondary.main" }}
            />
          </FormGroup>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mb: 2, mt: 4, mr: 1, ml: 1 }}>
          <Grid2 size={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ height: 52, bgcolor: "secondary.main" }}
            >
              CREAR CUENTA
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" sx={{ mb: 3 }}>
          <Link
            to="/auth/login"
            component={RouterLink}
            underline="none"
            sx={{ color: "secondary.main" }}
          >
            ¿Ya tienes una cuenta? Iniciar sesión
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
