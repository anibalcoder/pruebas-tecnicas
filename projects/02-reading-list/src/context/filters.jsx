import { createContext, useState } from 'react'

const FiltersContext = createContext()

function FiltersProvider ({ children }) {
  const [page, setPage] = useState(0)
  const [gender, setGender] = useState('Todas')

  return (
    <FiltersContext.Provider value={{
      page,
      setPage,
      gender,
      setGender
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export { FiltersContext, FiltersProvider }
