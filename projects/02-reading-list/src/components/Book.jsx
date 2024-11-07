import { AddReadingIcon } from './Icons'

export function Book ({ book, addToReading }) {
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
        onClick={() => addToReading()}
        className='bg-blue-800 absolute top-2 right-3 p-2 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'
      >
        <AddReadingIcon />
      </button>
    </li>
  )
}
