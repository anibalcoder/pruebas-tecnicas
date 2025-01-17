import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  test('should add and delete tasks', async () => {
    const user = userEvent.setup()

    render(<App />)

    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    const button = screen.getByRole('button')
    expect(button).toBeDefined()

    await user.type(input, 'Tarea 1')
    await user.click(button)

    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    expect(list.childNodes.length).toBe(1)

    const item = screen.getByText('Tarea 1')
    expect(item).toBeDefined()
    await user.click(item)

    const notResult = screen.getByText('No se han agregado tareas')
    expect(notResult).toBeDefined()
  })
})
