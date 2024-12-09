import React, { useState } from "react";

export default function Search ({ onBuscar }) {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const options = ["Madrid", "Barcelona", "Sevilla", "Valencia", "Bilbao"];

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    if (ciudadSeleccionada) {
      onBuscar(ciudadSeleccionada);
    } else {
      alert("Por favor, selecciona una ciudad");
    }
  };
  // const requestOptions 
  // const loadTrips = ( form )=>{
  //   fetch("/trips", ()=>{

  //   })
  // }
  return (
    <section className='bg-white text-gray-800 rounded-lg max-w-xl mt-4'>
      <form className="flex" onSubmit={handleSubmit} action="/trips">
        {/* <input type="text" className="rounded-s-lg py-2 px-4" placeholder="Destino..." /> */}
        <input
         className="rounded-s-lg py-2 px-4"
        type="text"
        id="datalist-input"
        list="options-list"
        value={ciudadSeleccionada}
        onChange={(e) => setCiudadSeleccionada(e.target.value)}
        placeholder="Destino..."
      />
      <datalist id="options-list">
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
        <button type="submit" className="bg-slate-400 py-2 px-4 rounded-e-lg">Buscar</button>
      </form>
    </section>
  )
}