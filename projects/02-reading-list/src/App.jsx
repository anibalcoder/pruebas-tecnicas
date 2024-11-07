import { library } from './mocks/books.json'
import { ReadingsProvider } from './context/readings'
import { useBooks } from './hooks/useBooks'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Books } from './components/Books'
import { Readings } from './components/Readings'

function App () {
  const { leakedBooks } = useBooks({ library })

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
