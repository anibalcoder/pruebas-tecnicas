import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTodo } from '../hooks/useTodo'

describe('useTodo hook', () => {
  test('should add and remove items', () => {
    const { result } = renderHook(() => useTodo())
    expect(result.current.todos.length).toBe(0)

    act(() => {
      result.current.addTodo('Tarea número 1')
      result.current.addTodo('Tarea número 2')
    })

    expect(result.current.todos.length).toBe(2)

    act(() => {
      result.current.deleteTodo(result.current.todos[0].id)
    })

    expect(result.current.todos.length).toBe(1)
  })
})
