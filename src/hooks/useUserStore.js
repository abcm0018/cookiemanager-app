import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import Swal from "sweetalert2";
import {
  onCancelSubscription,
  onLoadSubscriptions,
  onUpdateSubscriptionPlan,
  onUpdateUser,
} from "../store";

export const useUserStore = () => {
  const dispatch = useDispatch();

  const { isLoadingSubscriptions, isLoadingUser, errorMessage } = useSelector(
    (state) => state.user
  );
  const { user } = useSelector((state) => state.auth);

  const startUpdatingUser = async ({ name, surname, email, company }) => {
    try {
      const { data } = await cookieManagerApi.put(`/users`, {
        name,
        surname,
        email,
        company,
      });
      console.log(data);
      dispatch(onUpdateUser(data));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al actualizar", error.response.data.msg, "error");
    }
  };

  const startCancelPlanUser = async ({ userId }) => {
    try {
      const { data } = await cookieManagerApi.post(
        `/users/subscriptions/cancel`,
        {
          userId,
        }
      );
      console.log(data);
      dispatch(onCancelSubscription(data));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al cancelar", error.response.data.msg, "error");
    }
  };

  const startUpdatingPlanUser = async ({ planType }) => {
    try {
      const { data } = await cookieManagerApi.post(
        `/users/subscriptions/${planType}`,
        { email: user.email }
      );
      console.log(data);
      dispatch(onUpdateSubscriptionPlan({ newPlan: planType }));
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error al actualizar el plan",
        error.response.data.msg,
        "error"
      );
    }
  };

  const startLoadingSubscriptions = async () => {
    try {
      const { data } = await cookieManagerApi.get("/subscriptions");
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
    isLoadingSubscriptions,
    isLoadingUser,
    user,
    errorMessage,
    // Métodos
    startUpdatingUser,
    startCancelPlanUser,
    startUpdatingPlanUser,
    startLoadingSubscriptions,
  };
};
