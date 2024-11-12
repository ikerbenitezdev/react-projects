import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
    const [catImage, setCatImage] = useState('')
    useEffect(() => {
      if(!fact) return
      const firstWord = fact.split(' ').slice(0, 3).join(' ')
      const url = (`https://cataas.com/cat/says/${firstWord}`)
      setCatImage(url)
      , [fact]})
      
      return { catImage }
  }