// import { test, expect } from '@playwright/test';

// test('Remove items from cart', async ({ page }) => {
//   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

//   // Add item to cart
//   await page.click('text=Add to cart');

//   // Click the cart to view items
//   await page.click('.sc-1h98xa9-3');

//   // Wait for and click the 'x' button to remove item
//   await page.waitForSelector('button[title="remove product from cart"]', { state: 'visible', timeout: 60000 });
//   const removeButton = await page.$('button[title="remove product from cart"]');
//   if (removeButton) {
//     await removeButton.scrollIntoViewIfNeeded(); // Ensure the button is in view
//     await removeButton.click();
//   } else {
//     throw new Error('Remove button not found');
//   }

//   // Wait for the empty cart message and verify it
//   const emptyCartMessage = await page.waitForSelector('text=Add some products in the cart', { timeout: 60000 });
//   expect(emptyCartMessage).not.toBeNull();

//   // Optional: Take a screenshot for debugging
//   await page.screenshot({ path: 'debug-screenshot.png' });
// });