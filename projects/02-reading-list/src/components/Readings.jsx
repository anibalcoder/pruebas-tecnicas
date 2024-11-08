import { useId, useContext } from 'react'
import { ReadingsContext } from '../context/readings'
import { ReadingsIcon, RemoveFromReadingIcon } from './Icons'
import { setStoredReadings } from '../storage/readings'
import './Readings.css'

export function Readings () {
  const { readings, setReadings } = useContext(ReadingsContext)
  const checkReadingId = useId()

  setStoredReadings(readings)

  function removeFromReading (book) {
    const newReadings = readings.filter(item => item.ISBN !== book.ISBN)
    setReadings(newReadings)
  }

  return (
    <section className='fixed right-0 top-0 z-50'>
      <label
        htmlFor={checkReadingId}
        className='block bg-cyan-600 mt-4 mr-4 p-2 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'
      >
        <ReadingsIcon />
      </label>

      <input
        id={checkReadingId}
        className='hidden'
        type='checkbox'
      />

      <aside
        className='flex-col items-center gap-y-5 bg-gray-900 w-full sm:w-1/2 lg:w-[500px] h-full fixed top-0 right-0 -z-10 p-8 overflow-auto'
      >
        <h2 className='text-2xl text-center font-bold'>
          Lista de lectura
        </h2>

        <ul className='w-full grid grid-cols-auto-fit-200 justify-center items-center gap-4'>
          {
            readings.map(book => {
              return (
                <li
                  key={book.ISBN}
                  className='overflow-hidden relative'
                >
                  <img
                    className='w-full aspect-[9/12] rounded-lg'
                    src={book.cover}
                    alt={book.title}
                  />

                  <button
                    onClick={() => removeFromReading(book)}
                    className='bg-blue-800 absolute top-2 right-3 p-2 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'
                  >
                    <RemoveFromReadingIcon />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </aside>
    </section>
  )
}
