interface Props {
  isSearchError: boolean,
  searchErrorMessage: string
  setSearch: (currentSearch: string) => void
  sendMovie: (isSearchError: boolean) => void
  setIsOrderMovie: () => void
}

export function Search ({
  isSearchError,
  searchErrorMessage,
  setSearch,
  sendMovie,
  setIsOrderMovie
}: Props) {
  const handleSubmit = (
    event: React.MouseEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    sendMovie(isSearchError)
  }

  return (
    <form
      className='flex flex-col gap-5'
      onSubmit={ handleSubmit }
    >
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <input
          className='px-4 py-3 text-white rounded-lg bg-gray-900'
          type="search"
          placeholder='Ej: Avengers, Matrix, Star wars...'
          onChange={ (e) => setSearch(e.target.value) }
        />

        <button onClick={ setIsOrderMovie }>Ordenar</button>

        <button type='submit' className="!bg-yellow-200 text-black">Buscar</button>
      </div>

      { isSearchError && (<span className="text-red-500 font-bold">{ searchErrorMessage }</span>) }
    </form>
  )
}