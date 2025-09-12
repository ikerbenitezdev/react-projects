import { Routes, Route, Link} from "react-router-dom";
import GradientCard from "../GradientCard";
import Asignatura from "./Asignatura";
// import CuatriRoutes from "./CuatriRoutes";
import Cuatri from "./Cuatri";

const asignaturasQ1 = [
  { to: "pro1", title: "Pro 1" , description: "En este curso, aprenderás los fundamentos de la programación, incluyendo estructuras de datos, algoritmos y paradigmas de programación. Desarrollarás habilidades prácticas para resolver problemas computacionales y crear aplicaciones básicas.", teacher: "Iker", updated: "2024-06-15"},
  { to: "fisica", title: "Física", description: "En este curso, estudiarás los principios básicos de la física, incluyendo mecánica, termodinámica y electromagnetismo.", teacher: "Laura", updated: "2024-06-15" },
  { to: "fm", title: "FM", description: "Este curso se centra en la teoría y práctica de la fabricación de productos, incluyendo diseño, producción y gestión de calidad.", teacher: "Carlos", updated: "2024-06-15" },
  { to: "ic", title: "IC", description: "En este curso, aprenderás sobre los principios de la ingeniería de computadoras, incluyendo arquitectura de computadoras y diseño de sistemas.", teacher: "Ana", updated: "2024-06-15" },
];
const asignaturasQ2 = [
  { to: "bd", title: "Bases de Datos" , description: "En este curso, aprenderás los fundamentos de las bases de datos, incluyendo diseño, modelado y consulta de datos. Desarrollarás habilidades prácticas para gestionar y manipular grandes conjuntos de datos.", teacher: "Luis", updated: "2024-06-15" },
  { to: "algo", title: "Algoritmos", description: "En este curso, estudiarás los principios básicos de los algoritmos, incluyendo análisis de complejidad, técnicas de diseño y estrategias de optimización.", teacher: "Marta", updated: "2024-06-15" },
  // { to: "fm", title: "FM" },
  // { to: "ic", title: "IC" },
];
function HomeUpc() {
  return (
    <main className="px-4">
            {/* The sections that will be scrolled to via hash navigation */}
      <section className="mx-auto py-10">
            <h1 className="text-center font-bold text-3xl py-10 text-white"><span className="text-blue-400">Consejos</span> FIB UPC</h1>  
            <div>
        <article className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto min-h-[300px]">
          {/* <div className="absolute w-full h-full gradient-card animate-card rounded-sm blur-sm z-10"> */}
          <Link to="q1" className="relative min-w-[300px] flex items-center justify-center text-center z-10 select-none">
            <GradientCard title="Cuatri 1" />
          </Link>

          {/* </div> */}
          <Link to="q2" className="relative min-w-[300px] flex items-center justify-center text-center z-10 select-none">
            <GradientCard title="Cuatri 2" />
          </Link>
        </article>
      </div>
      </section>
      
      <section className="mx-auto py-10">
        <h2 className="text-center font-bold text-3xl py-10 text-white">¿Por qué <span className="text-blue-400">estos consejos</span>?</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10">Estos consejos están diseñados para ayudarte a navegar por los desafíos académicos y personales que puedes enfrentar durante tus estudios en la FIB. Basados en experiencias reales de estudiantes, estos consejos te proporcionarán estrategias prácticas para gestionar tu tiempo, aprovechar al máximo tus recursos, y mantener un equilibrio saludable entre el estudio y la vida personal. Siguiendo estos consejos, podrás maximizar tu rendimiento académico y disfrutar de una experiencia universitaria más enriquecedora y satisfactoria.</p>
      </section>
      <div className="flex flex-wrap justify-center items-center mb-10">
        <img src="/src/assets/upc-negatiu.png" alt="UPC" className="mx-auto h-10 mb-5"/>
        <img src="/src/assets/fib.png" alt="FIB" className="mx-auto h-10 mb-5"/>
      </div>
    </main>
  );
}

// function Asignatura({ titulo }) {
//   return <CuatriRoutes cuatri={titulo} />;
// }

export default function UPC() {
  return (
    <Routes>
      {/* Página principal dentro de /upc */}
      <Route path="/" element={<HomeUpc />} />

      {/* Subrutas */}
      <Route path="q1" element={<Cuatri cuatri="1er Cuatrimestre" asignaturas={asignaturasQ1} />} />
      <Route path="q2" element={<Cuatri cuatri="2º Cuatrimestre" asignaturas={asignaturasQ2} />} />

      <Route path="q1/pro1" element={<Asignatura asignatura={asignaturasQ1.find(a => a.to === "pro1")} />} />
      <Route path="q1/fisica" element={<Asignatura asignatura={asignaturasQ1.find(a => a.to === "fisica")} />} />
      <Route path="q1/fm" element={<Asignatura asignatura={asignaturasQ1.find(a => a.to === "fm")} />} />
      <Route path="q1/ic" element={<Asignatura asignatura={asignaturasQ1.find(a => a.to === "ic")} />} />

      {/* <Route path="q2" element={<Cuatri cuatri="2º Cuatrimestre" />} /> */}
      <Route path="q2/bd" element={<Asignatura asignatura={asignaturasQ2.find(a => a.to === "bd")} />} />
      <Route path="q2/algo" element={<Asignatura asignatura={asignaturasQ2.find(a => a.to === "algo")} />} />
      {/* <Route path="q3" element={<Asignatura asignatura="Cuatri 3" />} />
      <Route path="q4" element={<Asignatura asignatura="Cuatri 4" />} /> */}
    </Routes>
  );
}
