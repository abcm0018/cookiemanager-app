import { Navigate, Route, Routes } from "react-router-dom";
import { Domain } from "../pages/Domain";
import { DomainDetails } from "../pages/DomainDetails";
import { AddDomain } from "../pages/AddDomain";
import { ModifyDomain } from "../pages/ModifyDomain";

export const DomainRoutes = () => {
  return (
    <Routes>
      {/** Ruta para la página de Domain */}
      <Route path="/" element={<Domain />} />
      {/** Ruta para la página de Domain-Details */}
      <Route path="details" element={<DomainDetails />} />
      {/** Ruta para añadir dominio */}
      <Route path="add-domain" element={<AddDomain />} />
      {/** Ruta para modificar dominio */}
      <Route path="modify-domain" element={<ModifyDomain />} />

      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
