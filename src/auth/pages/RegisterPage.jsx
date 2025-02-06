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
import { useEffect } from "react";
import Swal from "sweetalert2";
import { registerFormField } from "../utils";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { startRegister, errorMessage } = useAuthStore();
  const { subscriptions } = useSubscriptionStore();

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

  // Para enviar los datos del formulario
  const registerSubmit = (event) => {
    event.preventDefault();

    startRegister({
      name: registerName,
      surname: registerSurname,
      email: registerEmail,
      password: registerPassword,
      company: registerCompany,
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
          />
          <FormControl fullWidth sx={{ mt: 1 }} size="medium">
            <InputLabel id="select-label">Plan</InputLabel>
            <Select
              label="Plan de suscripción"
              name="registerPlan"
              value={registerPlan}
              onChange={onRegisterInputChange}
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
                  } // Captura el valor booleano del checkbox
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
