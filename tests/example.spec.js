const { test, expect } = require('@playwright/test');

test('CSF Storefront Validation', async ({ page }) => {

  await page.goto('https://qa3.sephora.com/creators/thuphamnelson');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/creators/);

  await page.screenshot({
    path: 'csf-homepage.png',
    fullPage: true
  });

});
