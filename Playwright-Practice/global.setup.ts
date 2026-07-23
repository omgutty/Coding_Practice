/**
 * 1. You have 100 test cases, and every one of them
requires login. How would you avoid repeating the
login code?
What the interviewer is testing
Reusability
Framework design
Authentication strategies
Best Approach
Use Storage State (recommended), Fixtures, or Global Setup so the login happens only once.
global.setup.ts

 */
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Ensure login completed
  await page.waitForURL('**/inventory.html');

  // Save authenticated state BEFORE closing anything
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });

  // Close browser
  await browser.close();
}

export default globalSetup;
