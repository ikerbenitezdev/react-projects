import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { lazy, Suspense } from 'react';
const Model = lazy(() => import('./Model'));

export default function Post() {
  return (
    <section className="flex flex-wrap justify-center items-center mx-auto py-20 gap-x-2 gap-y-5 md:py-36">
      <article className="text-gray-200 flex flex-col max-w-xl gap-3">
      <div className="flex gap-4 mb-4"> 
        <div className='flex gap-4 items-center'>
        <img className="rounded-full shadow-lg size-16 object-cover" src="/foto-personal.jpeg" alt="Iker Benitez"></img>
        <button
          type="submit"
          className="h-8 shadow-xl text-sm border-2 pb-8 text-emerald-800 bg-gray-50 border-emerald-400 backdrop-blur-md before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-400 hover:border-white hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
        >
          <a className="flex justify-center gap-2 items-center" target="_blank" href="https://www.linkedin.com/in/iker-benitez-soria-8b1015276/">Disponible para trabajar
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
        <svg viewBox="0 0 128 128">
          <g fill="#61DAFB"><circle r="11.4" cy="64" cx="64"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>
      </span>
    </button>
    <div id="tooltip-hover-react" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    React
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
      <button data-tooltip-target="tooltip-hover-javascript" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item right-[45px] -top-[4px] rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
      <img src="js-svgrepo-com.svg" alt="JavaScript" className="w-8 h-8"></img>
      </span>
    </button>
    <div id="tooltip-hover-javascript" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Javascript
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
    <button data-tooltip-target="tooltip-hover-php" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -left-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <img src='php-logo.svg' alt="PHP" className="w-8 h-8"></img>
      </span>
    </button>
    <div id="tooltip-hover-php" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Php
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
    <button data-tooltip-target="tooltip-hover-wordpress" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" className="profile_item -right-4 top-20 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
      <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
        <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
          <linearGradient gradientUnits="userSpaceOnUse" y2="40.968" y1="4.776" x2="35.821" x1="10.608" id="ezltMdBuodGDdUF~YSi~Aa_v9uZbuVoWleB_gr1"><stop stopColor="#0d61a9" offset="0"></stop><stop stopColor="#16528c" offset="1"></stop></linearGradient><path d="M24,4C12.97,4,4,12.976,4,24s8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4z" fill="url(#ezltMdBuodGDdUF~YSi~Aa_v9uZbuVoWleB_gr1)"></path><path opacity=".05" d="M24,43.001C13.521,43.001,4.995,34.477,4.995,24c0-10.476,8.525-18.999,19.004-18.999	c10.48,0,19.006,8.523,19.006,18.999C43.005,34.477,34.479,43.001,24,43.001z M20.778,38.651C21.83,38.883,22.912,39,24.001,39	c1.344,0,2.682-0.181,3.984-0.539l-3.676-10.072L20.778,38.651z M9.416,20.488C9.14,21.632,9.001,22.808,9.001,24	c0,4.864,2.259,9.284,6.111,12.093L9.416,20.488z M38.753,21.289c-0.211,0.895-0.507,1.818-0.893,2.783l-3.829,11.082	C37.169,32.322,39,28.265,39,24C39,23.088,38.917,22.182,38.753,21.289z M20.025,30.673l2.442-7.328l-2.265-6.308	c-0.613-0.051-1.086-0.112-1.086-0.112c-0.854-0.053-1.5-0.783-1.47-1.694c0.03-0.921,0.735-1.616,1.641-1.616l0.222,0.014	c1.825,0.125,3.188,0.188,4.051,0.188c1.606,0,4.162-0.195,4.188-0.197c0.001,0,0.002,0,0.003,0c1.006,0,1.715,0.637,1.77,1.549	c0.045,0.76-0.455,1.633-1.473,1.757c-0.078,0.009-0.294,0.034-0.596,0.062l4.483,13.401l0.693-2.308	c0.786-2.016,1.177-3.647,1.177-4.888c0-1.386-0.644-2.439-1.211-3.368c-0.117-0.191-0.228-0.373-0.327-0.546l-0.197-0.318	c-0.778-1.26-1.511-2.449-1.511-3.931c0-1.329,0.831-2.61,2.067-3.307C30.121,9.961,27.091,9,24.001,9	c-4.183,0-8.113,1.719-10.948,4.751c1.342-0.057,2.676-0.159,2.693-0.16l0.134-0.005c0.882,0,1.588,0.668,1.641,1.554	c0.045,0.76-0.457,1.634-1.478,1.757c-0.068,0.008-0.285,0.033-0.592,0.062L20.025,30.673z"></path><path opacity=".07" d="M24,42.501C13.796,42.501,5.495,34.202,5.495,24c0-10.2,8.301-18.499,18.504-18.499	C34.203,5.501,42.505,13.8,42.505,24C42.505,34.202,34.204,42.501,24,42.501z M20.126,39.009c1.258,0.326,2.559,0.491,3.875,0.491	c1.571,0,3.128-0.238,4.637-0.709l-4.343-11.898L20.126,39.009z M9.365,18.892C8.791,20.532,8.501,22.245,8.501,24	c0,5.553,2.88,10.554,7.599,13.339L9.365,18.892z M38.622,18.85c-0.106,1.604-0.502,3.227-1.225,5.036l-4.404,12.743	C37.039,33.739,39.5,29.021,39.5,24C39.5,22.245,39.2,20.5,38.622,18.85z M20.026,32.253l2.971-8.915l-2.433-6.775	c-0.747-0.052-1.384-0.134-1.384-0.134c-0.606-0.039-1.055-0.537-1.034-1.182c0.021-0.646,0.512-1.132,1.141-1.132	c0.119,0.005,2.741,0.202,4.272,0.202c1.636,0,4.2-0.196,4.226-0.198c0.003,0,0.005,0,0.008,0c0.714,0,1.191,0.455,1.229,1.081	c0.033,0.545-0.312,1.143-1.034,1.23c-0.028,0.003-0.539,0.064-1.211,0.114l5.185,15.498l1.146-3.816	c0.8-2.048,1.198-3.728,1.198-5.032c0-1.527-0.712-2.693-1.285-3.629c-0.114-0.187-0.223-0.364-0.32-0.534l-0.205-0.332	c-0.739-1.197-1.437-2.328-1.437-3.669c0-1.431,1.13-2.757,2.557-3.191C30.893,9.678,27.52,8.5,24.001,8.5	c-4.695,0-9.141,2.146-12.074,5.785c1.621-0.024,3.834-0.194,3.858-0.196l0.094-0.003c0.624,0,1.104,0.456,1.142,1.083	c0.033,0.546-0.313,1.144-1.039,1.231c-0.027,0.003-0.535,0.064-1.208,0.114L20.026,32.253z"></path><path d="M23.999,6.001c-9.93,0-18.004,8.075-18.004,17.999S14.072,42.001,24,42.001	c9.929,0,18.005-8.077,18.005-18.001S33.929,6.001,23.999,6.001z M8.001,24c0-2.324,0.497-4.521,1.384-6.512L17.019,38.4	C11.681,35.806,8.001,30.336,8.001,24z M24.001,40c-1.57,0-3.084-0.226-4.52-0.652l4.8-13.952l4.918,13.477	c0.033,0.077,0.078,0.149,0.118,0.22C27.65,39.676,25.862,40,24.001,40z M26.095,16.085c0.962-0.047,1.832-0.152,1.832-0.152	c0.861-0.104,0.757-1.373-0.104-1.316c0,0-2.589,0.2-4.264,0.2c-1.569,0-4.217-0.2-4.217-0.2c-0.86-0.059-0.96,1.26-0.098,1.316	c0,0,0.818,0.106,1.679,0.152l2.603,7.248l-3.5,10.501l-5.931-17.778c0.964-0.047,1.828-0.152,1.828-0.152	c0.866-0.104,0.761-1.373-0.099-1.316c0,0-2.595,0.2-4.264,0.2c-0.304,0-0.383,0.035-0.611-0.039C13.848,10.666,18.612,8,24.001,8	c4.167,0,7.96,1.584,10.804,4.198c-0.071-0.002-0.135-0.008-0.206-0.008c-1.57,0-3.041,1.375-3.041,2.84	c0,1.315,0.763,2.423,1.576,3.752c0.607,1.062,1.67,2.435,1.67,4.412c0,1.375-0.405,3.095-1.219,5.175l-1.599,5.326L26.095,16.085z M32.047,37.835L36.932,23.7c0.913-2.286,1.219-4.109,1.219-5.737c0-0.586-0.037-1.135-0.108-1.645C39.289,18.604,40,21.219,40,24	C40,29.902,36.805,35.063,32.047,37.835z" fill="#fff"></path>
        </svg>
      </span>
    </button>
    <div id="tooltip-hover-wordpress" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Wordpress + Elementor
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
    </section>
  );
}
