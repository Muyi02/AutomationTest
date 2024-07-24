// import { test, expect } from '@playwright/test';

// test('Add items to cart', async ({ page }) => {
//   await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

//   await page.click('text=Add to cart');

//   // Wait for the cart count element to be present in the DOM
//   const cartCountElement = await page.waitForSelector('.sc-11uohgb-4', { state: 'attached' });

//   // Check if the cart count element is found
//   expect(cartCountElement).not.toBeNull();

//   if (cartCountElement) {
//     const cartCountText = await cartCountElement.textContent();
//     expect(cartCountText).not.toBeNull();

//     if (cartCountText) {
//       // Print cartCountText for debugging
//       console.log(`cartCountText: '${cartCountText.trim()}'`);

//       // Use a regular expression to extract the numeric part
//       const numericText = cartCountText.replace(/[^0-9]/g, '');
//       const cartCount = parseInt(numericText, 10);

//       // Print parsed cartCount for debugging
//       console.log(`cartCount: ${cartCount}`);

//       expect(isNaN(cartCount)).toBe(false); // Check that cartCount is not NaN
//       expect(cartCount).toBeGreaterThan(0);
//     } else {
//       throw new Error('cartCountText is null');
//     }
//   } else {
//     throw new Error('cartCountElement is null');
//   }
// });