import { useState } from 'react'
import { Todo, Todos, TodoId, TodoTitle } from '../types'

export function useTodo () {
  const [todos, setTodos] = useState<Todos>([])

  const addTodo = (title: TodoTitle) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title
    }

    setTodos((prevState) => {
      return [...prevState, newTodo]
    })
  }

  const deleteTodo = (id: TodoId) => {
    const newTodo = todos?.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  return {
    todos,
    addTodo,
    deleteTodo
  }
}
