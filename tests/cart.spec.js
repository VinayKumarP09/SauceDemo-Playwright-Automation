
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const users = require('../test-data/users.json');

test('Verify cart product details and remove product', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  // Add product
  await productsPage.addProductToCart('Sauce Labs Backpack');

  // Open cart
  await productsPage.openCart();

  // Verify cart page
  await expect(cartPage.cartTitle).toHaveText('Your Cart');

  // Verify product name
  await expect(cartPage.productName)
    .toHaveText('Sauce Labs Backpack');

  // Verify product price
  await expect(cartPage.productPrice).toHaveText('$29.99');

  // Verify cart item count
  const itemCount = await cartPage.getCartItemCount();
  expect(itemCount).toBe(1);

  // Remove product
  await cartPage.removeProduct();

  // Verify cart is empty
  expect(await cartPage.getCartItemCount()).toBe(0);
});
