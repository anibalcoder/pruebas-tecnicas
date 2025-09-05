import type { Movie } from "../types/movie";

interface Props {
  movie: Movie
}

export function Movie ({ movie }: Props) {
  return (
    <article>
      <header>
        <h3
          className='font-bold text-lg text-nowrap text-ellipsis overflow-hidden'>{ movie.Title }</h3>
        <span>{ movie.Year }</span>
      </header>

      <div className='rounded-xl overflow-hidden aspect-[2/3]'>
        <img
          className='size-full'
          src={ movie.Poster }
          alt={ movie.Title }
        />
      </div>
    </article>
  )
}