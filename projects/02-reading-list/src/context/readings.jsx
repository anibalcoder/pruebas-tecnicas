import { createContext, useState } from 'react'

const ReadingsContext = createContext()

function ReadingsProvider ({ children }) {
  const [readings, setReadings] = useState([])

  return (
    <ReadingsContext.Provider value={{
      readings,
      setReadings
    }}
    >
      {children}
    </ReadingsContext.Provider>
  )
}

export { ReadingsContext, ReadingsProvider }
