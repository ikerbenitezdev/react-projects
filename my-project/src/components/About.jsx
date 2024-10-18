
export default function Post() {
  return (
    <section id="about" className="scroll-m-20 max-w-3xl mx-auto">
    <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-gray-200 dark:text-black/20 undefined">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
        Sobre mí
    </h2>
    {/* <section className="flex flex-wrap justify-center items-center mx-auto py-20 gap-x-2 gap-y-5 md:py-36"> */}
    <article className="flex flex-col items-center justify-center gap-8 text-gray-400 dark:text-gray-300 md:flex-row">
    <div className="[&>p]:mb-4 [&>p>strong]:text-blue-500 flex-1">
        <p>Mi nombre es Iker Benítez, y soy un apasionado del desarrollo web. Desde muy joven, siempre me ha fascinado la posibilidad de crear <strong>soluciones innovadoras</strong> que puedan impactar a nivel global.</p>
        <p>A lo largo de mi formación y experiencia, he aprendido que tengo la capacidad de materializar ideas y convertirlas en productos digitales funcionales y eficientes. Estoy preparado para desarrollar diversos tipos de plataformas, enfocándome siempre en la <strong>optimización y en ofrecer resultados de alta calidad</strong>.</p>
        <p>Mi objetivo es seguir creciendo profesionalmente, aprender continuamente y <strong>conectar con otros profesionales</strong> del sector para colaborar y seguir mejorando.</p>
    </div>
        <img className="size-36 rounded-md  object-cover" src="/prueba.jpeg" alt="Iker Benitez"></img>
    </article>
    <h2 className="flex items-center my-8 text-xl font-semibold gap-x-3 text-gray-200 dark:text-black/20 undefined">Otras actividades</h2>

    <article className="[&>p]:mb-4 [&>p>strong]:text-blue-500">
    {/* <img className="size- rounded-md " src="/podium.jpeg" alt="Iker Benitez"></img> */}
    <h3 className="mb-1 text-lg font-semibold text-gray-200 dark:text-white">Balear Skills</h3>
        <h6 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">Competición de Desarollo Web en Baleares</h6>
        
        <p className="text-base font-normal text-gray-400 dark:text-gray-400">Tuve la gran suerte de poder participar en una competición de desarrollo web representando a mi instituto, quedando en <strong>tercer lugar</strong>   🏅.</p>
        <p className="text-base font-normal text-gray-400 dark:text-gray-400">Se trataba, de un concurso en el que disponiamos de unas 8 horas para desarollar un proyecto a pequeña escala que contara con la parte previa de diseño y la parte de programación y maquetación. </p>
       
    </article>
    <article className="flex flex-col items-center my-8 justify-center gap-8 md:flex-row">
    <div className="flex-1">
        <img className=" rounded-md  object-cover" src="/charla.jpeg" alt="Iker Benitez"></img>
    </div>
    <div className="flex-1">
       <img className="rounded-md  object-cover" src="/podium.jpeg" alt="Iker Benitez"></img>
    </div>
    </article>
    {/* </section> */}
    </section>
  );
}
