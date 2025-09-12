import { useState } from 'react'
import './App.css'
import CryptoList from './components/CryptoList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CryptoList />
      </div>
    </>
  )
}

export default App
