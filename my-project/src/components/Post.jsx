import { Canvas, useFrame } from '@react-three/fiber'
import Model from './Model'
import { OrbitControls } from '@react-three/drei';

export default function Post() {
    return (
        <section className="flex  flex-wrap justify-center  mx-auto py-16 gap-2 md:py-36">
  <article className="text-gray-200 flex flex-col gap-3">
    <h2 className="flex items-baseline text-3xl font-bold sm:text-4xl">
      ¡Hola! soy <span className="animated-background">Iker Benitez</span>
    </h2>
    <p className="text-gray-100">
      Desarrollador Frontend / Backend con pasión por crear experiencias web asombrosas.
    </p>
  </article>

  <article className="flex-shrink-0">
    {/* Aquí controlamos el tamaño del Canvas */}
    <Canvas
      className="canvas" // Asegúrate de incluir la clase personalizada
      camera={{ position: [8, 2, 9], fov:65 }}
      style={{ width: "200px", height: "150px" }} // Añade un tamaño específico
    >
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Modelo centrado, escalado y rotado */}
      <Model />
    </Canvas>
  </article>
</section>

    );
}

    
    