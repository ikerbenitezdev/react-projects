import React, { useState } from "react";

export default function Search () {
  const [value, setValue] = useState("");
  const options = ["Madrid", "Barcelona", "Sevilla", "Valencia", "Bilbao"];
  // const requestOptions 
  const loadTrips = ( form )=>{
    fetch("/trips", ()=>{

    })
  }
  return (
    <section className='bg-white text-gray-800 rounded-lg max-w-xl mt-4'>
      <form className="flex" onSubmit={loadTrips(this)} action="/trips">
        {/* <input type="text" className="rounded-s-lg py-2 px-4" placeholder="Destino..." /> */}
        <input
         className="rounded-s-lg py-2 px-4"
        type="text"
        id="datalist-input"
        list="options-list"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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