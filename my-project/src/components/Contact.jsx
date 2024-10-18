
export default function Contact() {
    return (
        <section id="contact" data-section="contacto" className="scroll-m-20 max-w-3xl mx-auto">
        <h3 className="text-center text-gray-300 text-lg mb-8">Escribeme para cualquier duda 📥</h3>
        <form className="w-full" action="/contact" method="POST">
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

        </section>
    );
  }
  