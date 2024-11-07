const API_KEY = import.meta.env.VITE_API_KEY

export async function getCatfact () {
  try {
    const response = await fetch('https://catfact.ninja/fact')

    if (!response.ok) throw new Error('cat not found fact')

    const fact = await response.json()
    return fact
  } catch (e) {
    throw new Error(e)
  }
}

export async function getGif (firstThreeWords) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${firstThreeWords}&limit=1`)

    if (!response.ok) throw new Error('cat not found fact')

    const { data } = await response.json()
    return data
  } catch (e) {
    throw new Error(e)
  }
}
