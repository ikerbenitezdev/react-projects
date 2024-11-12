import './App.css'

// const CAT_ENDPOINT_RsANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red`
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App() {
  // const [fact, setFact] = useState()
  const { fact, refreshFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  
  const handleClick = async () => {
    refreshFact()
  }
    
  return (
    <main>
      {fact && <p>{fact}</p>}
      {catImage && <img style={{width: 200, borderRadius: 10}} src={catImage} alt="prueba" />}
      <br></br><button onClick={handleClick}>Otra curiosidad</button>
    </main>
  )
}

