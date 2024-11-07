import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useBooks ({ library }) {
  const { page, gender } = useContext(FiltersContext)

  const leakedBooks = library.filter(({ book }) => {
    return (
      book.pages >= page &&
      (
        gender === 'Todas' ||
        book.genre === gender
      )
    )
  })

  return { leakedBooks }
}
