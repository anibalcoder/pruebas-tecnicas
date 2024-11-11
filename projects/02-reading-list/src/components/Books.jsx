import { Book } from './Book'

export function Books ({ leakedBooks }) {
  return (
    <section>
      <ul className='grid grid-cols-auto-fit-250 justify-center items-center gap-4'>
        {
          leakedBooks.map(({ book }) => {
            return (
              <Book
                key={book.ISBN}
                book={book}
              />
            )
          })
        }
      </ul>
    </section>
  )
}
