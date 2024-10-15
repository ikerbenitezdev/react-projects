import { useGLTF } from '@react-three/drei';
import { useRef} from 'react';
import { useFrame } from '@react-three/fiber'

function Model(props) {
  const { scene } = useGLTF('/laptop.glb');
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const group = groupRef.current;
    
    // Movimiento suave de arriba a abajo usando Math.sin
    if (group) {
      group.position.y = Math.sin(time * 2) * 0.8; // Cambia 0.1 para ajustar la amplitud del movimiento
    }
  });

  return (
    <group
    ref={groupRef}
    scale={props.scale || [1.2, 1.2, 1.2]} 
    position={[4, -1, 4]} // Inicialmente centrado
    rotation={[0, (45* Math.PI) / 180, 0]} // Rotar 182 grados en el eje Y
  >
    <primitive object={scene} />
  </group>
  );
}

export default Model;
