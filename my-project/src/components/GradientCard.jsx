

 export default function GradientCard({ title}) {
  return (
    <>

      {/* Capa de borde gradiente animado */}
      <div className="absolute inset-0 gradient-card animate-card rounded-sm z-0 blur-sm"></div>
    
      {/* Contenido de la tarjeta */}
      <div className="relative rounded-md bg-gray-950 w-full h-full hover:bg-gray-900">
        <div className="flex items-center  justify-center gap-x-2 px-3 py-1 rounded-full overflow-hidden h-full">
          <span className="text-white text-center">{title}</span>
        </div>
      </div>
    </>
  );  
}
