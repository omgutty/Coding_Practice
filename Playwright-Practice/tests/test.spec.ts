import { test, expect } from '@playwright/test';

test('Verify Inventory Page', async ({ page }) => {
  await page.goto('/inventory.html');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});