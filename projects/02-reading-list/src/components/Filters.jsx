import { useId, useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { page, setPage, setGender } = useContext(FiltersContext)
  const bookPagesId = useId()
  const bookGenreId = useId()

  function handleNumberPage (e) {
    const newPage = Number(e.target.value)
    setPage(newPage)
  }

  function handleBookGenre (e) {
    const newGender = e.target.value
    setGender(newGender)
  }

  return (
    <section className='flex flex-col sm:flex-row justify-center items-center gap-x-32 gap-y-8 mb-10'>
      <div>
        <label
          htmlFor={bookPagesId}
          className='block text-white/80 font-bold mb-3'
        >
          Páginas a partir de:
        </label>

        <div className='flex items-center gap-x-3'>
          <input
            id={bookPagesId}
            onChange={handleNumberPage}
            type='range'
            min={0}
            max={1200}
          />
          <span>{page}</span>
        </div>
      </div>

      <div>
        <label
          htmlFor={bookGenreId}
          className='block text-white/80 font-bold mb-3'
        >
          Filtrar por género
        </label>

        <select
          id={bookGenreId}
          onChange={handleBookGenre}
          className='w-32 bg-black text-white border border-white rounded-md'
        >
          <option value='Todas'>Todas</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Ciencia ficción'>Ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
        </select>
      </div>
    </section>
  )
}
