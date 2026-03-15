import { test, expect } from '@playwright/test';

test('Открытие и закрытие простого модального окна', async ({ page }) => {
  const modalPage = page.getByRole('link', { name: '🪟 3' })
  const simpleModalBlock = page.getByTestId('open-simple-modal')
  const simpleModal = page.getByTestId('simple-modal')
  const closeSimpleModal = page.getByTestId('close-simple-modal')

  await test.step('Открываем главную страницу', async () => {
    await page.goto('https://testingit.ru/index.html');
    await expect(modalPage).toBeVisible()
  });

  await test.step('Открываем страницу с модальными окнами', async () => {
    await modalPage.click();
  });

  await test.step('Открываем простое модальное окно', async () => {
    await simpleModalBlock.click();
    await expect(simpleModal).toBeVisible();
  });

  await test.step('Закрываем простое модальное окно', async () => {
    await closeSimpleModal.click();
    await expect(simpleModal).not.toBeVisible();
  });
});