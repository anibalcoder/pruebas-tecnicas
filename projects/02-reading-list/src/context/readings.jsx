import { createContext } from 'react'
import { useReadings } from '../hooks/useReadings'

const ReadingsContext = createContext()

function ReadingsProvider ({ children }) {
  const { state, addToReadings, removeFromReadings } = useReadings()

  return (
    <ReadingsContext.Provider value={{
      readings: state,
      addToReadings,
      removeFromReadings
    }}
    >
      {children}
    </ReadingsContext.Provider>
  )
}

export { ReadingsContext, ReadingsProvider }
