import { useContext } from 'react'
import { ReadingsContext } from '../context/readings'
import { AddReadingIcon, RemoveFromReadingIcon } from './Icons'

export function Book ({ book }) {
  const { readings, addToReadings, removeFromReadings } = useContext(ReadingsContext)

  const isInReadings = readings?.some(item => item.ISBN === book.ISBN)

  return (
    <li
      className='overflow-hidden relative'
    >
      <img
        className='w-full aspect-[9/12] rounded-lg '
        src={book.cover}
        alt={book.title}
      />

      <button
        onClick={() => {
          isInReadings
            ? removeFromReadings(book)
            : addToReadings(book)
        }}
        className='bg-blue-800 absolute top-2 right-3 p-2 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'
      >
        {
          isInReadings
            ? <RemoveFromReadingIcon />
            : <AddReadingIcon />
        }
      </button>
    </li>
  )
}
