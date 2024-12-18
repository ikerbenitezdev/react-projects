// import { Link } from "react-router";

export default function About () {
    return (
      <main className="pt-16">
        <div className="max-w-6xl mx-auto my-4 min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-l font-ligth text-gray-600 uppercase">Contacto</h1>
          <h2 className="text-2xl font-bold font">¿Tienes Preguntas? Hablemos de Viajes</h2>
          <p>Necesitas ayuda o simplemente buscas inspiración para tu próxima aventura? Estamos aquí para ti. Escríbenos y déjanos ayudarte a que tu viaje sea tan sencillo y relajado como debería ser. ¡Estamos a un mensaje de distancia!"</p>
        </div>
        <form className="p-5 bg-slate-50 rounded-md">
          <h1></h1>
          <div className="flex flex-col">
            <label>Correo</label>
            <input type="email" />
            <textarea className="mt-4" placeholder="Mensaje"></textarea>
            <button type="submit" className="w-full button-primary mt-4">Enviar</button>
          </div>
        </form>
        </div>
        </div>
      </main>
    )
  }