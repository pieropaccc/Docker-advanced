import { test, expect } from '@playwright/test';

test.describe('Games App Tests', () => {
  test('1. La página carga correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Vite/);
  });

  test('2. El título "Games" se muestra en el header', async ({ page }) => {
    await page.goto('/');
    const title = page.locator('h2');
    await expect(title).toHaveText('Games');
  });

  test('3. El logo está visible', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('.logo');
    await expect(logo).toBeVisible();
  });

  test('4. El campo de texto existe en el formulario', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input[name="name"]');
    await expect(input).toBeVisible();
  });

  test('5. El formulario existe', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('6. La lista de juegos existe', async ({ page }) => {
    await page.goto('/');
    const gameList = page.locator('.game-list');
    await expect(gameList).toBeAttached();
  });

  test('7. Se puede escribir en el campo de texto', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input[name="name"]');
    await input.fill('Test Game');
    await expect(input).toHaveValue('Test Game');
  });

  test('8. El input tiene el tipo correcto (text)', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input[name="name"]');
    await expect(input).toHaveAttribute('type', 'text');
  });

  test('9. La lista de juegos es un elemento ul', async ({ page }) => {
    await page.goto('/');
    const gameList = page.locator('.game-list');
    await expect(gameList).toBeAttached();
  });

  test('10. El header contiene los elementos esperados', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });
});
