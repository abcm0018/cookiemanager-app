export const contarCookies = (estadisticas) => {
  return estadisticas.reduce(
    (contador, estadistica) => {
      if (estadistica.estado === "Aceptado") contador.aceptadas += 1;
      if (estadistica.estado === "Rechazado") contador.rechazadas += 1;
      return contador;
    },
    { aceptadas: 0, rechazadas: 0 }
  );
};
