import { test, expect } from '@playwright/test';
import { readDataFromExcelFile } from '../main/Main/CommonUtils/ExcelHelper.js';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


const ExcelDataProvider = readDataFromExcelFile('Century_Data.xlsx');

test.beforeAll(async() => {
    // Any setup if needed before tests run
    console.log(ExcelDataProvider);
    
});

test('Hooks in playwright', async () => {
   console.log("This will execute after All test");
 
 });
