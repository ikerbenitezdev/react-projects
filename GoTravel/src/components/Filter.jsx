export default function Filter({ children }) {
    return (
        <>
            <div className="text-center">
                <button
                    className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-bottom-example"
                    data-drawer-show="drawer-bottom-example"
                    data-drawer-placement="bottom"
                    aria-controls="drawer-bottom-example"
                >
                   { children } 
                </button>
            </div>
            {/* Drawer component */}
            <div
                id="drawer-bottom-example"
                className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform transform translate-y-full bg-white dark:bg-gray-800"
                tabIndex={-1}
                aria-labelledby="drawer-bottom-label"
                aria-hidden="true"
            >
                <h5
                    id="drawer-bottom-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    {/* <svg
                        className="w-4 h-4 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg> */}
                    Filtrar
                </h5>
                <button
                    type="button"
                    data-drawer-hide="drawer-bottom-example"
                    aria-controls="drawer-bottom-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="my-6">
                <form>
                    <div className="relative mb-6">
                        <label htmlFor="labels-range-input">
                            Precio
                        </label>
                        <input
                            id="labels-range-input"
                            type="range"
                            defaultValue={1000}
                            min={100}
                            max={1500}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                            0
                        </span>
                        
                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                            Max
                        </span>
                    
                    </div>

                    <label
                        htmlFor="number-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Dias:
                    </label>
                    <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={90210}
                        required=""
                    />
                    </form>
                </div>


                {/* <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Supercharge your hiring by taking advantage of our{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
                    >
                        limited-time sale
                    </a>{" "}
                    for Flowbite Docs + Job Board. Unlimited access to over 190K
                    top-ranked candidates and the #1 design job board.
                </p> */}
                {/* <a
                    href="#"
                    className="px-4 py-2 me-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Learn more
                </a> */}
                <button type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Buscar{" "}
                    
                </button>
            </div>
        </>
    );
}
