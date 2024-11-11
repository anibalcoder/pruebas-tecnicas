import { setStoredReadings } from '../storage/readings'

const READINGS_ACTION_TYPE = {
  ADD_TO_READINGS: 'ADD_TO_READINGS',
  REMOVE_FROM_READINGS: 'REMOVE_FROM_READINGS'
}

export function readingsReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case READINGS_ACTION_TYPE.ADD_TO_READINGS: {
      const newReadings = [
        ...state,
        actionPayload
      ]

      setStoredReadings(newReadings)
      return newReadings
    }

    case READINGS_ACTION_TYPE.REMOVE_FROM_READINGS: {
      const newReadings = state.filter(item => item.ISBN !== actionPayload.ISBN)
      setStoredReadings(newReadings)
      return newReadings
    }
  }

  return state
}
