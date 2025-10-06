export default function Asignatura({ asignatura }) {
  // const { asignaturaId } = useParams(); // asumimos que la ruta es /q1/:asignaturaId

  // const asignatura = asignaturas.find(a => a.to === asignaturaId);
  if (!asignatura) return <p className="text-white text-center mt-10">Asignatura no encontrada</p>;

  return (
    <main className="px-4">
      <section className="mx-auto max-w-3xl py-10">
      <div className="flex flex-wrap gap-2 mb-10">
        <h1 className="font-bold text-3xl text-white">
          {asignatura.title}
        </h1>
        <div className="flex gap-2 px-4 py-3 rounded-full bg-blue-950" title="Profesor/a">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span className="text-[12px] text-white">{asignatura.teacher}</span>
        </div>

        <div className="flex gap-2 px-4 py-3 rounded-full bg-blue-950" title="Última actualización">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <span className="text-[12px] text-white">{asignatura.updated}</span>
        </div>
      </div>
        {/* Aquí puedes agregar más detalles de la asignatura */}
      {/* <p className="text-white">{asignatura.description}</p> */}
      
      <div className="grid grid-cols-5 grid-rows-5 gap-4 text-white">
          <div className="col-span-2 row-span-4 bg-gray-800 p-5 rounded-md">
            <ul>
              <h2 className="font-bold text-2xl mb-2">Consejos</h2>
              <li className="mb-2">Consejo 1</li>
              <li className="mb-2">Consejo 2</li>
              <li className="mb-2">Consejo 3</li>
              <li className="mb-2">Consejo 4</li>
            </ul>
          </div>
          <div className="col-span-2 row-span-2 col-start-3 bg-gray-800 p-5 rounded-md">2</div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-3 bg-gray-800 p-5 rounded-md">3</div>
          <div className="row-span-2 col-start-5 row-start-1 bg-gray-800 p-5 rounded-md">4</div>
          <div className="row-span-2 col-start-5 row-start-3 bg-gray-800 p-5 rounded-md">5</div>
      </div>
    
      </section>
    </main>
  );
}