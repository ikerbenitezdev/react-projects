import { Link } from "react-router-dom";
import GradientCard from "../GradientCard";

export default function Cuatri({ cuatri, asignaturas }) {
  return (
    <main>
      <section className="mx-auto py-10">
        <h1 className="text-center font-bold text-3xl py-10 text-white">
          {cuatri}
        </h1>
      </section>
      <article className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto min-h-[300px]">
        {asignaturas.map(a => (
          <Link className="relative min-w-[400px] flex items-center justify-center text-center z-10 select-none" key={a.to} to={a.to}>
            <GradientCard title={a.title} />
          </Link>
        ))}
      </article>
    </main>
  );
}
