
export default function Contact() {
    return (
        <section id="contact" data-section="contacto" className="scroll-m-20 max-w-3xl mx-auto">
        <h3 className="text-center text-gray-300 text-lg mb-8">Escríbeme para cualquier duda 📥</h3>
        <form className="w-full my-6" action="/contact" method="POST">
        <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase text-gray-500 text-xs mb-2" htmlFor="grid-first-name">
                Nombre
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="nombre" placeholder="Tu nombre" required />
        </div>

        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase text-gray-500 text-xs mb-2" htmlFor="grid-last-name">
                Apellido
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" name="apellido" placeholder="Tu apellido" required />
        </div>
        </div>

        <div className="mb-6">
            <div className="w-full px-3">
                <label className="block uppercase text-gray-500 text-xs mb-2" htmlFor="grid-email">
                    Correo Electrónico
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
        </div>

        <div className="mb-6">
            <div className="w-full px-3">
                <label className="block uppercase text-gray-500 text-xs mb-2" htmlFor="grid-message">
                    Mensaje
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
            </div>
        </div>

        <div className="px-3">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Enviar
            </button>
            </div>
    </form> 
        <div className="flex justify-center space-x-4 my-6">
            <a href="https://github.com/iker123321" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.125-.305-.54-1.54.115-3.205 0 0 1.01-.325 3.3 1.24.96-.265 1.98-.4 3-.405 1.02.005 2.04.14 3 .405 2.28-1.565 3.29-1.24 3.29-1.24.655 1.665.24 2.9.12 3.205.77.84 1.24 1.91 1.24 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.21.695.825.575C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/iker-benitez-soria-8b1015276" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.5-2.23 3.05v5.61h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
            </a>
    </div>
    <hr/>
        </section>
    );
  }
  