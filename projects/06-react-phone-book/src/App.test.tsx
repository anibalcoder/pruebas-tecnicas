import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import App from './App'

describe('<App />', () => {
  let user: UserEvent

  const placeholders = {
    firstName: 'Coder',
    lasName: 'Byte',
    phone: '8885559999'
  }

  const newUser = {
    firstName: 'Aníbal',
    lasName: 'Quispe Enciso',
    phone: '12345678'
  }

  const placeholderArray = Object.values(placeholders)
  const newUserArray = Object.values(newUser)

  beforeEach(() => {
    user = userEvent.setup()
    render(<App />)
  })

  test('los campos del formulario deben estar prellenados', () => {
    for(const placeholder of placeholderArray) {
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    }
  })

  test('debe crear una nueva guía telefónica al dar click en Agregar usuario', async () => {
    for (let i = 0; i < placeholderArray.length; i++) {
      await user.type(
        screen.getByPlaceholderText(placeholderArray[i]),
        newUserArray[i]
      )

      expect(screen.getByPlaceholderText(placeholderArray[i])).toHaveValue(newUserArray[i])
    }

    const button = screen.getByText('Agregar usuario')
    await user.click(button)

    for (const user of newUserArray) {
      expect(await screen.findByText(user)).toBeVisible()
    }
  })
})