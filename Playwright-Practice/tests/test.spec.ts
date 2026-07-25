/**
 * 1. You have 100 test cases, and every one of them
requires login. How would you avoid repeating the login code?
What the interviewer is testing
Reusability
Framework design
Authentication strategies
Best Approach
Use Storage State (recommended), Fixtures, or Global Setup so the login happens only once.
global.setup.ts

 */

import { test, expect } from '@playwright/test';

test('Verify Inventory Page', async ({ page }) => {
  await page.goto('/inventory.html');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});

/**
 * 2. Extract product prices, sort them manually, perform
sorting on the UI, and verify both results.
 */

test('sort the running bus count coloun and compare', async ({page})=>{
  await page.goto('');

  await page.locator('#UserName').fill('');
  await page.locator('#Password').fill('@');
  await page.getByRole('button', { name: 'Login' }).click();


})