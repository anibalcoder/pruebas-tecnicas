import { useState, useEffect } from 'react'
import { getCatfact, getGif } from '../service/apiRequests'

export function useCatFactWithGif () {
  const [fact, setFact] = useState('')
  const [urlGif, setUrlGif] = useState({})

  const getCatFactWithGif = async () => {
    const { fact } = await getCatfact()
    const newFact = fact
    setFact(newFact)

    const firstThreeWords = newFact
      .split(' ', 3)
      .join(' ')

    const [data] = await getGif(firstThreeWords)
    setUrlGif({
      url: data.images.original.url,
      alt_text: data.title
    })
  }

  useEffect(() => {
    getCatFactWithGif()
  }, [])

  return { fact, urlGif, getCatFactWithGif }
}
