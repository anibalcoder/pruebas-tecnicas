import { useContext } from 'react'
import { ReadingsContext } from '../context/readings'
import { Book } from './Book'

export function Books ({ leakedBooks }) {
  const { readings, setReadings } = useContext(ReadingsContext)

  function addToReading (book) {
    const indexIsReading = readings.findIndex(item => book.ISBN === item.ISBN)

    if (indexIsReading >= 0) {
      return window.alert(`${book.title} ya se agregó a la lista`)
    }

    const newReadings = [
      ...readings,
      book
    ]

    setReadings(newReadings)
  }

  return (
    <section>
      <ul className='grid grid-cols-auto-fit-250 justify-center items-center gap-4'>
        {
          leakedBooks.map(({ book }) => {
            return (
              <Book
                key={book.ISBN}
                book={book}
                addToReading={() => addToReading(book)}
              />
            )
          })
        }
      </ul>
    </section>
  )
}
