import { Movie } from "./Movie"
import type { Movie as MovieType } from "../types/movie"

interface Props {
  movies: MovieType[]
  isOrderMovies: boolean
}

export function Movies ({ movies, isOrderMovies }: Props) {
  if (!movies?.length) {
    return (
      <span className="font-bold text-cyan-400">
        No se encontraron películas para esta búsqueda
      </span>
    )
  }

  const moviesToRender = isOrderMovies
    ? structuredClone(movies).sort((a, b) => a.Title.localeCompare(b.Title))
    : movies

  return (
    <section>
      <ul
        className='grid gap-x-6 gap-y-16 justify-center'
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(auto, 300px))" }}
      >
        { moviesToRender?.map(movie => (
          <li key={ movie.imdbID }>
            <Movie movie={ movie } />
          </li>
        )) }
      </ul>
    </section>
  )
}