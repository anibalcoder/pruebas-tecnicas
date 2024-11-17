import { describe, test, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FiltersProvider } from '../context/filters'
import { Filters } from '../components/Filters'
import { library } from '../mocks/books.json'

describe('Filters', () => {
  beforeAll(() => {
    render(
      <FiltersProvider>
        <Filters />
      </FiltersProvider>
    )
  })

  test('Check book genres', async () => {
    const genres = ['Todas', 'Fantasía', 'Ciencia ficción', 'Zombies', 'Terror']

    const select = screen.getByLabelText('Filtrar por género')
    const options = screen.getAllByRole('option')

    expect(options).toHaveLength(genres.length)

    // Verificar que los valores de las opciones sean los correctos
    const optionValues = options.map(option => option.value)
    expect(optionValues).toEqual(genres)

    // Simular la selección de 'Fantasía'
    await userEvent.selectOptions(select, 'Fantasía')
    expect(select.value).toBe('Fantasía')
  })

  test('Check maximum page range', () => {
    const pages = library.map(({ book }) => book.pages)
    const maxPages = Math.max(...pages)

    const inputRange = screen.getByRole('slider')
    const maxNumber = Number(inputRange.getAttribute('max'))

    expect(maxNumber).toBe(maxPages)
  })
})
