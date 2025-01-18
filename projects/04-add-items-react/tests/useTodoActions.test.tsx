import React from 'react'
import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTodoActions } from '../src/hooks/useTodoActions' 

import { Provider } from 'react-redux'
import { store } from '../src/store'

describe('useTodo hook', () => {
  test('should add and remove items', () => {
    const { result } = renderHook(() => useTodoActions(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    })

    expect(store.getState().todos.length).toBe(0)

    act(() => {
      result.current.addTodo('Tarea número 1')
      result.current.addTodo('Tarea número 2')
    })

    expect(store.getState().todos.length).toBe(2)

    act(() => {
      result.current.deleteTodo(store.getState().todos[0].id)
    })

    expect(store.getState().todos.length).toBe(1)
    expect(store.getState().todos[0].title).toBe('Tarea número 2')
  })
})
