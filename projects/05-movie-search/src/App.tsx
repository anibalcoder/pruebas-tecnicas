import './App.css'
import { Movies } from './components/Movies';
import { Search } from './components/Search';
import { useDebounce } from './hooks/useDebounce';
import { useMovie } from './hooks/useMovie';
import { useSearchRules } from './hooks/useSearchRules';

function App() {
  const {
    movies,
    search,
    isOrderMovies,
    handleSetMovieSearch,
    handleSendMovie,
    handleSetIsOrderMovie,
  } = useMovie()

  const {
    isSearchError,
    searchErrorMessage
  } = useSearchRules({ search })

  /**
   * Técnica que retrasa la ejecución de una función por un periodo predeterminado de tiempo.
   * Si la misma función es invocada de nuevo, la ejecución previa es cancelada y el tiempo de espera se reinicia.
   */
  useDebounce({
    search,
    isSearchError,
    sendMovie: handleSendMovie
  })

  return (
    <main className='flex flex-col gap-10'>
      <h1 className='text-white text-3xl sm:text-5xl font-bold'>
        Buscador de películas
      </h1>

      <Search
        isSearchError={ isSearchError }
        searchErrorMessage={ searchErrorMessage }
        setSearch={ handleSetMovieSearch }
        sendMovie={ handleSendMovie }
        setIsOrderMovie={ handleSetIsOrderMovie }
      />

      <Movies movies={ movies } isOrderMovies={ isOrderMovies } />
    </main>
  )
}

export default App
