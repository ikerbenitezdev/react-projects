import { Routes, Route } from "react-router-dom";
import CuatriLayout from "./CuatriLayout";


export default function CuatriRoutes({ cuatri }) {
  return (
    <Routes>
      <Route path="/" element={<CuatriLayout cuatri={cuatri} />}>
        <Route path="pro1" element={<Eleccion titulo="Pro 1" />} />
        <Route path="fisica" element={<Eleccion titulo="Física" />} />
        <Route path="fm" element={<Eleccion titulo="FM" />} />
        <Route path="ic" element={<Eleccion titulo="IC" />} />
      </Route>
    </Routes>
  );
}
