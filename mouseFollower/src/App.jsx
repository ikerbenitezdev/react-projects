import { useState, useEffect } from 'react'
import './App.css'
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('useEffect')
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }}
    ,
[enabled]  
  )
  return (
    <>
  <div style={{
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid #fff',
    borderRadius: '50%',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -25,
    top: -25,
    width: 50,
    height: 50,
    transform: `translate(${position.x}px, ${position.y}px)`,
  }}
  />
  <h1>Mouse Follower</h1>
  <button onClick={()=> setEnabled(!enabled)}>
    {enabled ? "Activar" : "Desactivar"} seguir puntero
  </button>
  </>
  )
}
function App() {
  // const [mounted, setMounted] = useState(true)
  
  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
