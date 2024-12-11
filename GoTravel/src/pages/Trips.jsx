import { useLocation } from "react-router"
import data from "../mocks/data.json"
import Filter from "../components/Filter";

export default function Trips() {
    const selectedTrips = data.trips;
    console.log(data);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const ciudadNombre = query.get('ciudad');

    const ciudadesFiltradas = selectedTrips.filter((c) => c.location === ciudadNombre);

    if (ciudadesFiltradas.length === 0) {
        return <main className="pt-16"><div className="max-w-6xl mx-auto my-8 min-h-screen p-4">No se encontraron resultados para {ciudadNombre}</div></main>;
    }

    return (
        <main className="pt-16">
        <div className="max-w-6xl mx-auto my-4 min-h-screen p-4">
            <div className="flex justify-between my-4">
                <h1 className="my-2">Resultados para: {ciudadNombre}</h1>
                <Filter>Filtrar</Filter>
            </div>
          <section className="flex flex-col gap-4">

          {ciudadesFiltradas.map((trip) => (
              <article key={trip.id} className="rounded-md gradient-bg flex h-60 overflow-hidden relative">
              {/* Contenido del texto */}
              <div className="flex flex-col gap-1 p-4 flex-grow">
                <span className="flex items-center gap-2">
                  <img className="w-8 rounded-full" src={`https://unavatar.io/github/${trip.username}`} alt={trip.username} />
                  {trip.username}
                </span>
                <h2>{trip.location}</h2>
                <p>{trip.description}</p>
                <div className="absolute bottom-0 my-4 flex gap-2 mt-4 flex-wrap">
                <span className="w-fit bg-black text-white text-xs font-medium inline-flex items-center px-2.5 py-1.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                {trip.expenses}€
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> */}
                </span>

                <span className="w-fit bg-black text-white text-xs font-medium inline-flex items-center px-2.5 py-1.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                </svg>
                
                {trip.duration}
                </span>
                </div>
              </div>
            
              {/* Imagen a la derecha */}
              <div className="flex-shrink-0 w-[30%] h-full">
                <img className="h-full w-full object-cover" src={(trip.media) ? trip.media : "/posts/img/default.webp"} alt={trip.location} />
              </div>
            </article>
            
          ))}
          </section>
        </div>
        </main>
      );
};
