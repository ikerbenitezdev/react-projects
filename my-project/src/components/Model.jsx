import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef} from 'react';
import { useFrame } from '@react-three/fiber'

function Model(props) {
  const { scene } = useGLTF('/assets/laptop.glb');
  const groupRef = useRef();

  // Rote el modelo en cada fotograma
  // useFrame(() => {
  //   if (scene) {
  //     // scene.rotation.y += 0.001; // Ajusta la velocidad de rotación
  //     // scene.rotation.z -= 0.001;
  //     scene.rotation.y -= 0.001; 
  //     // scene.rotation.x += 0.0012; // Ajusta la velocidad de rotación
  //   }
    
  // });
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const group = groupRef.current;
    
    // Movimiento suave de arriba a abajo usando Math.sin
    if (group) {
      group.position.y = Math.sin(time) * 0.5; // Cambia 0.1 para ajustar la amplitud del movimiento
    }
  });
  // scene.rotation.y = Math.PI;
  // useEffect(() => {
  //   // Aplicar color a todos los materiales del modelo
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       child.material = new THREE.MeshStandardMaterial({
  //         color: props.color || 'red', // Color del material
  //         metalness: 0.1,
  //         roughness: 0.1
  //       });
  //     }
  //   });
  // }, [scene, props.color]);

  return (
    <group
    ref={groupRef}
    scale={props.scale || [1, 1, 1]} 
    position={[5, -1, 4]} // Inicialmente centrado
    rotation={[0, (45* Math.PI) / 180, 0]} // Rotar 182 grados en el eje Y
  >
    <primitive object={scene} />
  </group>
  );
}

export default Model;
