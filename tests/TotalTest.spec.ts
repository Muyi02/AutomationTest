// import { test, expect } from '@playwright/test';

// test('Display correct total price', async ({ page }) => {
//   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

//   await page.click('text=Add to cart');

//   await page.click('.sc-1h98xa9-3');

//   const totalPriceElement = await page.$('.sc-124al1g-2 span');
//   const totalPriceText = await totalPriceElement?.textContent();
//   const totalPrice = totalPriceText ? parseFloat(totalPriceText.replace('$', '')) : 0;
//   expect(isNaN(totalPrice)).toBe(false); // Check that totalPrice is not NaN
//   expect(totalPrice).toBeGreaterThan(0);
// });