import { test, expect } from '@playwright/test'

const GIF_BASE_URL = /https:\/\/media\d+\.giphy\.com/

test.describe('Cat fact with gif', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })

  test('Check that the content and url of gif exist', async ({ page }) => {
    const pLocator = page.locator('p')
    const imgLocator = page.locator('img')

    await test.step('Check cat fact and gif display', async () => {
      await expect(pLocator).toBeVisible()
      await expect(imgLocator).toBeVisible()
    })

    await test.step('Check gif url', async () => {
      await expect(imgLocator).toHaveAttribute('src', GIF_BASE_URL)
    })
  })

  test('Check fact and gif change on click', async ({ page }) => {
    const pLocator = page.locator('p')
    const imgLocator = page.locator('img')

    const prevFact = await pLocator.textContent()
    const prevGif = await imgLocator.getAttribute('src')

    await page.getByRole('button').click()

    await test.step('Wait for the fact and gif to load', async () => {
      await page.waitForFunction(
        ([p, img]) => {
          return p.textContent.length > 0 && img.naturalWidth > 0
        },
        [await pLocator.elementHandle(), await imgLocator.elementHandle()]
      )
    })

    const nextFact = await pLocator.textContent()
    const nextGif = await imgLocator.getAttribute('src')

    expect(nextFact).not.toEqual(prevFact)
    expect(nextGif).not.toEqual(prevGif)
  })
})
