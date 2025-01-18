import { configureStore, Middleware } from '@reduxjs/toolkit'
import todoReducer from './slice/todos'

const persistanceLocalStorageMiddleware: Middleware = store => next => action => {
  next(action)
  localStorage.setItem('__todos__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    persistanceLocalStorageMiddleware
  ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch