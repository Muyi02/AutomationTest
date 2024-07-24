import { test, expect } from '@playwright/test';

test('Update item quantity in cart', async ({ page }) => {
  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

  // Click "Add to cart"
  await page.click('text=Add to cart');

  // Click the cart icon to view items
  await page.click('.sc-1h98xa9-3');

  // Click the increment button
  await page.waitForSelector('button.sc-11uohgb-6.cgtUCJ', { state: 'visible' });
  await page.click('button.sc-11uohgb-6.cgtUCJ');

  // Check the quantity input value
  const quantityInput = await page.waitForSelector('input[type="number"]', { state: 'visible' });
  const quantityValue = await quantityInput.inputValue();
  expect(parseInt(quantityValue, 10)).toBe(2);
});
