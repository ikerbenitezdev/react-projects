import Header from "./components/Header";
import products from './assets/productsJson.json';

// Tipado
export interface Item {
  nombre: string;
  importancia: number;
}

export interface DonationItems {
  higiene: Item[];
  comida: Item[];
  herramientas: Item[];
  ropa: Item[];
  medicina: Item[];
}

export default function App() {
  const donationItems = products as DonationItems;

  return (
    <main>
      <Header />
      <section className="container max-w-2xl mx-auto py-10 px-4">
        {Object.keys(donationItems).map((category) => (
          <div key={category}>
            <h2 className="my-8 text-center text-gray-500 text-lg md:text-xl lg:text-2xl">
              {category.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {donationItems[category as keyof DonationItems].map((item: Item, index) => (
                <div
                  key={index}
                  // href="#"
                  className="block w-full h-auto p-8 text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-1 text-base font-bold text-gray-900 dark:text-white truncate">
                    {item.nombre}
                  </h5>
                  {/* <p className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
                    Importancia: {item.importancia}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
