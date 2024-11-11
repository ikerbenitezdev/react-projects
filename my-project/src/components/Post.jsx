import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense } from 'react';
const Model = lazy(() => import('./Model'));

export default function Post() {
  return (
    <section className="flex flex-wrap justify-center items-center mx-auto py-20 gap-x-2 gap-y-5 md:py-36">
      <div className="flex gap-4 mb-4"> 
        <div className='flex gap-4 items-center'>
        <img className="rounded-full shadow-lg size-16 object-cover" src="/foto-personal.jpeg" alt="Iker Benitez"></img>
        <button
          type="submit"
          className="h-8 shadow-xl text-sm border-2 pb-8 text-emerald-800 bg-gray-50 border-emerald-400 backdrop-blur-md before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-400 hover:border-white hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
        >
          <a className="flex justify-center gap-2 items-center" target="_blank" href="https://www.linkedin.com/in/ikerbenitez">Disponible para trabajar
          <svg
            className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-800 group-hover:fill-gray-800"
            ></path>
          </svg>
          </a>
        </button>
        </div>

      </div>
        <h2 className="flex items-baseline text-3xl font-bold sm:text-4xl">
          ¡Hola! Soy <span className="animated-background">Iker Benitez</span>
        </h2>
        <h3 className='text-xl text-gray-400'>Técnico superior en Desarrollo de Aplicaciones Web</h3>
        <p className="text-gray-100">
          Con más de un año de experiencia en el desarrollo de aplicaciones web, me especializo en crear soluciones eficientes y escalables utilizando diferentes tecnologías
        </p>
        <div className="flex gap-4">

          <button data-tooltip-target="tooltip-hover-react" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item left-[45px] -top-[4px] rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500" title='React'>
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src='react.svg' alt="React"></img>
            </span>
          </button>
          <div id="tooltip-hover-react" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            React
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-hover-javascript" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item right-[45px] -top-[4px] rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src="js.svg" alt="JavaScript"></img>
            </span>
          </button>
          <div id="tooltip-hover-javascript" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Javascript
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-hover-php" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -left-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src='php-logo.svg' alt="PHP" className='w-7 h-7'></img>
            </span>
          </button>
          <div id="tooltip-hover-php" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Php
          <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-hover-tailwind" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -left-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src='tailwind.svg' alt="Tailwind"></img>
            </span>
          </button>
          <div id="tooltip-hover-tailwind" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tailwind
          <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-hover-wordpress" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -right-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src='wordpress.svg' alt="Wordpress"></img>
            </span>
          </button>
          <div id="tooltip-hover-wordpress" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Wordpress + Elementor
          <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-hover-mysql" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -right-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
              <img src='mysql.svg' alt="MySQL"></img>
            </span>
          </button>
          <div id="tooltip-hover-mysql" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            MySQL
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </article>

      <article className="flex-shrink-0">
        <Canvas
          className="canvas"
          camera={{ position: [8, 2, 9], fov: 65 }}
          style={{ width: "200px", height: "150px" }}
        >
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* <Suspense fallback={<div>Cargando modelo...</div>}> */}
            <Model />
            <OrbitControls/>
          {/* </Suspense> */}
        </Canvas>
      </article>
  );
}
