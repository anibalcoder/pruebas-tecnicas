import { createContext, useState } from 'react'
import { getStoredReadings } from '../storage/readings'

const ReadingsContext = createContext()

function ReadingsProvider ({ children }) {
  const [readings, setReadings] = useState(getStoredReadings ?? [])

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
