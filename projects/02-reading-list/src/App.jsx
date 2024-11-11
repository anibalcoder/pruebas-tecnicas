import { library } from './mocks/books.json'
import { ReadingsProvider } from './context/readings'
import { useBooks } from './hooks/useBooks'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Books } from './components/Books'
import { Readings } from './components/Readings'
import { useSEO } from './hooks/useSEO'

function App () {
  const { leakedBooks } = useBooks({ library })

  useSEO({
    title: 'Lecturas',
    description: 'Organiza y gestiona tus lecturas de manera fácil y eficiente. Mantén un registro de tus libros favoritos'
  })

  return (
    <ReadingsProvider>
      <Header library={library} />
      <Filters />
      <Books leakedBooks={leakedBooks} />
      <Readings />
    </ReadingsProvider>
  )
}

export default App
