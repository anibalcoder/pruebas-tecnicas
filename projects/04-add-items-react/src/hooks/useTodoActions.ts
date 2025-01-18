import { addNewTodo, deleteTodoById } from '../store/slice/todos'
import { TodoId, TodoTitle } from '../types'
import { useAppDispatch } from './store'

export function useTodoActions () {
  const dispatch = useAppDispatch()

  const addTodo = (title: TodoTitle) => {
    dispatch(addNewTodo(title))
  }

  const deleteTodo = (id: TodoId) => {
    dispatch(deleteTodoById(id))
  }

  return {
    addTodo,
    deleteTodo
  }
}
