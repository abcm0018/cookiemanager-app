import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import {
  onAddNewCookie,
  onDeleteCookie,
  onLoadCookies,
  onUpdateCookie,
} from "../store";

import Swal from "sweetalert2";

export const useDomainStore = () => {
  const dispatch = useDispatch();

  const { isLoadingCookies, cookies, errorMessage } = useSelector(
    (state) => state.cookies
  );

  const startLoadingCookies = async (cookieId) => {
    try {
      const { data } = await cookieManagerApi.get(
        `/domains/${cookieId}/cookies`
      );
      console.log({ cookies: data });
      dispatch(onLoadCookies(data));
    } catch (error) {
      console.log("Error en la carga de dominios");
      console.log(error);
      Swal.fire(
        "Error al listar los dominios",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startSavingCookie = async ({
    name,
    type,
    category,
    description,
    provider,
    duration,
    httpOnly,
    sameSite,
    secure,
  }) => {
    try {
      const { data } = await cookieManagerApi.post("/domains", {
        name,
        type,
        category,
        description,
        provider,
        duration,
        httpOnly,
        sameSite,
        secure,
      });
      console.log(data);

      // Despachamos el dominio recion creado

      dispatch(onAddNewCookie(data));

      // Devolvemos el dominio creado para usuarlo en el componente si fuera necesario
      return data;
    } catch (error) {
      console.error(error);

      const errorMessage = error.response?.data?.msg || "Error desconocido";

      Swal.fire("Error al crear el dominio", errorMessage, "error");
      return null;
    }
  };

  const startUpdatingCookie = async ({
    domainId,
    name,
    type,
    category,
    description,
    provider,
    duration,
    httpOnly,
    sameSite,
    secure,
  }) => {
    try {
      const { data } = await cookieManagerApi.put(
        `/domains/${domainId}/cookie`,
        {
          name,
          type,
          category,
          description,
          provider,
          duration,
          httpOnly,
          sameSite,
          secure,
        }
      );
      console.log(data);
      dispatch(onUpdateCookie(data));
    } catch (error) {
      console.error(error);

      Swal.fire("Error al crear el dominio", error.response.data?.msg, "error");
    }
  };

  const startDeletingCookie = async ({ cookieId }) => {
    try {
      await cookieManagerApi.delete(`/domains/${cookieId}`);

      // Despacha la acción para eliminar el dominio en el estado local
      dispatch(onDeleteCookie(cookieId));
    } catch (error) {
      console.log("Error al eliminar el dominio", error);
      const errorMessage = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al eliminar", errorMessage, "error");
    }
  };

  return {
    //Propiedades
    isLoadingCookies,
    cookies,
    errorMessage,
    // Métodos
    startSavingCookie,
    startDeletingCookie,
    startUpdatingCookie,
    startLoadingCookies,
  };
};
