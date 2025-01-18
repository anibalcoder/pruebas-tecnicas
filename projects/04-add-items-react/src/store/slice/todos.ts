import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoId, Todos, TodoTitle } from '../../types'

const initialState: Todos = (() => {
  const persistedState  = localStorage.getItem('__todos__')
  return persistedState  ? JSON.parse(persistedState ).todos : []
})()

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo (state, action: PayloadAction<TodoTitle>) {
      const newTodo: Todo = { id: crypto.randomUUID(), title: action.payload }
      state.push(newTodo)
    },
    deleteTodoById (state, action: PayloadAction<TodoId>) {
      const newTodo = state?.filter(todo => todo.id !== action.payload)
      return newTodo
    }
  }
})

export const { addNewTodo, deleteTodoById } = todoSlice.actions
export default todoSlice.reducer
