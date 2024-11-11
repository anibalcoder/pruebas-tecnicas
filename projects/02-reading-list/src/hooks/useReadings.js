import { useReducer } from 'react'
import { readingsReducer } from '../reducers/readings'
import { getStoredReadings } from '../storage/readings'

export function useReadings () {
  const [state, dispatch] = useReducer(readingsReducer, getStoredReadings)

  const addToReadings = (book) => dispatch({
    type: 'ADD_TO_READINGS',
    payload: book
  })

  const removeFromReadings = (book) => dispatch({
    type: 'REMOVE_FROM_READINGS',
    payload: book
  })

  return {
    state,
    addToReadings,
    removeFromReadings
  }
}
