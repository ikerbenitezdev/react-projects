import { useEffect, useState } from 'react';
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`
export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then((res) => res.json())
        .then((data) =>{ 
          const { fact } = data
          setFact(fact)
        })
    }, [])

    useEffect(() => {
      if (!fact) return
      const firstWord = fact.split(' ')[0]
      fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`)
      .then((res) => res.json())
      .then(response => { 
        const { url } = response.url
        console.log(url);
        // setImageUrl(url)
      })
    }, [fact])


    return (
        <main>
          <h1>Prueba de Gatos</h1>
          {fact && <p>{fact}</p>}
          {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="imagen de un gato" />}
        </main>
           
    ) 
}