const { test, expect } = require('@playwright/test');

test.describe('GraphQL Zeus Documentation', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check the main heading
    await expect(page.locator('h1')).toContainText('Command Your GraphQL with Divine Precision');

    // Check the Why GraphQL Zeus section
    await expect(page.locator('text=Why GraphQL Zeus?')).toBeVisible();

    // Check that cards are rendered
    await expect(page.locator('text=Thunderous Type Safety')).toBeVisible();
    await expect(page.locator('text=Lightning Fast')).toBeVisible();
  });

  test('navigation to installation page works', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click the "Get Started" button
    await page.click('text=Get Started');

    // Verify we navigated to the installation page
    await expect(page).toHaveURL(/.*installation/);
  });

  test('can navigate to examples', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Click the "View Examples" link
    await page.click('text=View Examples');

    // Verify we navigated to examples page
    await expect(page).toHaveURL(/.*examples/);
  });
});
