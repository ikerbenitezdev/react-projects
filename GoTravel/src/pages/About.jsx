import { Link } from "react-router";

export default function About () {
    return (
      <main className="pt-16">
        <div className="max-w-6xl mx-auto my-4 min-h-screen p-4">
          {/* <h1 className="text-4xl font-bold text-center">Sobre nosotros</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-l font-light text-gray-600">SOBRE NOSTROS</h1>
              <h2 className="text-2xl font-bold font">Simplificando tus Viajes, Creando Recuerdos</h2>
              <p className="text-lg">
              En <Link to="/"><span className="font-semibold text-orange-600"> Go Travel</span></Link>, nuestro propósito es claro: ayudarte a viajar sin preocupaciones. Sabemos que organizar un viaje puede ser agotador, por eso hemos creado un espacio donde planificar tus aventuras es tan fácil como soñar con ellas.
              </p>
              <p className="text-lg">
              Aquí encuentras las mejores recomendaciones de viajeros como tú, para que dediques menos tiempo a planificar y más a disfrutar del viaje.
              Nuestro objetivo es que cada experiencia sea única, relajada y, sobre todo, inolvidable.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <img src="/about.jpg" alt="About us" className="rounded-lg" />
              {/* <h2 className="text-2xl font-semibold">Visión</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec dui at augue tincidunt elementum. Nullam nec dui at augue
                tincidunt elementum. Nullam nec dui at augue tincidunt elementum.
              </p> */}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-center my-20">Viaja Fácil, Vive Más</h2>
            <section className="grid grid-cols-1 md:grid-cols-3">
              <article className="flex flex-col items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
              <p className="text-center">Todo lo que necesitas, en un solo lugar.</p>
              </article>
              <article className="flex flex-col items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <p className="text-center">Consejos reales para aventuras reales.</p>
              </article>
              <article className="flex flex-col items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p className="text-center">Viaja con confianza, sin estrés ni complicaciones.</p>
              </article>

            </section>
          </div>

        </div>
        </main>
    )
  }