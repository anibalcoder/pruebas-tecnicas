import type { Movie, MovieSearch } from "../types/movie"

const apiKey = import.meta.env.VITE_API_KEY

export async function getMovies (search: string): Promise<Movie[]> {
  const resp = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=movie`)

  if (!resp.ok) {
    console.log(`Error ${resp.statusText} - No se puedo obtener los datos`)
  }

  const movies: MovieSearch = await resp.json()
  return movies.Search
}