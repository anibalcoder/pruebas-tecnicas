import { useRef, useState } from "react"
import type { Movie } from "../types/movie"
import { getMovies } from "../services/movie"

export function useMovie() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [search, setSearch] = useState("")
  const [isOrderMovies, setIsOrderMovies] = useState(false)
  const previousSearch = useRef("") // guarda el valor en cada re-renders.

  const handleSetIsOrderMovie = () => {
    setIsOrderMovies(!isOrderMovies)
  }

  const handleSetMovieSearch = (currentSearch: string) => {
    setSearch(currentSearch)
  }

  const handleSendMovie = async (isSearchError: boolean) => {
    // Detener si la búsqueda incumple una regla de validación
    if (isSearchError) return

    // Evitar repetir la búsqueda si es exactamente la misma que la anterior
    if (previousSearch.current === search.toLowerCase()) return

    previousSearch.current = search.toLocaleLowerCase()
    const result = await getMovies(search)
    setMovies(result)
  }

  return {
    movies,
    search,
    isOrderMovies,
    handleSetMovieSearch,
    handleSendMovie,
    handleSetIsOrderMovie
  }
}