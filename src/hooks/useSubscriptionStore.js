import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import Swal from "sweetalert2";
import { onLoadSubscriptions } from "../store/subscriptions/subscriptionSlice";

export const useSubscriptionStore = () => {
  const dispatch = useDispatch();

  const { subscriptions, isLoadingSubscriptions, errorMessage } = useSelector(
    (state) => state.subscriptions
  );

  const startLoadingSubscriptions = async () => {
    try {
      const { data } = await cookieManagerApi.get("/auth/subscriptions");
      console.log({ subscriptions: data });
      dispatch(onLoadSubscriptions(data));
    } catch (error) {
      console.log("Error en la carga de subscripciones");
      console.log(error);
      Swal.fire(
        "Error al listar las subscripciones",
        error.response.data.msg,
        "error"
      );
    }
  };

  return {
    // Propiedades
    subscriptions,
    isLoadingSubscriptions,
    errorMessage,
    // Métodos
    startLoadingSubscriptions,
  };
};
