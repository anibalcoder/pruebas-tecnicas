import { useContext } from 'react'
import { ReadingsContext } from '../context/readings'

export function Header ({ library }) {
  const { readings } = useContext(ReadingsContext)

  return (
    <header
      className='flex flex-col justify-center items-center gap-y-3 pt-5 mb-10'
    >
      <h1 className='font-mono text-2xl font-bold'>
        {library.length - readings.length} libros disponibles
      </h1>

      {
        readings.length > 0 &&
          <p className='font-mono text-lg font-medium'>
            {readings.length} en la lista de lectura
          </p>
      }
    </header>
  )
}
