import { Link, Outlet } from "react-router-dom";
import GradientCard from "../GradientCard";

export default function CuatriLayout({ cuatri }) {
  return (
    <main className="px-4">
      <section className="mx-auto py-10">
        <h1 className="text-center font-bold text-3xl py-10 text-white">
          {cuatri}
        </h1>
      </section>

      <article className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto min-h-[300px]">
        <Link to="pro1" className="relative min-w-[400px] flex items-center justify-center text-center z-10 select-none">
          <GradientCard title="PRO 1" />
        </Link>
        <Link to="fm" className="relative min-w-[400px] flex items-center justify-center text-center z-10 select-none">
          <GradientCard title="FM" />
        </Link>
        <Link to="fisica" className="relative min-w-[400px] flex items-center justify-center text-center z-10 select-none">
          <GradientCard title="Física" />
        </Link>
        <Link to="ic" className="relative min-w-[400px] flex items-center justify-center text-center z-10 select-none">
          <GradientCard title="IC" />
        </Link>
      </article>

      {/* Aquí se pintará el contenido de la asignatura */}
      {/* <Outlet /> */}
    </main>
  );
}
