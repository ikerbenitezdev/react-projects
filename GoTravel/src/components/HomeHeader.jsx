import NavBar from "./NavBar"
import Search from "./Search"

export default function HomeHeader(){
    return(
    <header className="relative w-full h-screen bg-cover bg-center bg-header-background">
    <NavBar />


{/* Hero Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a GoTravel App</h1>
    <p className="text-lg md:text-xl max-w-2xl">Descubre cada destino con el máximo detalle posible</p>
    <Search />
  </div>
</header>
    )
}