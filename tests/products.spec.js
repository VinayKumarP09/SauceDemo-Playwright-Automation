
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const users = require('../test-data/users.json');

test('Verify products page and add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  // Verify products page
  await expect(productsPage.pageTitle).toHaveText('Products');

  const productCount = await productsPage.getProductCount();
  expect(productCount).toBe(6);

  // Add product to cart
  await productsPage.addProductToCart('Sauce Labs Backpack');

  // Verify cart badge
  await expect(productsPage.cartBadge).toHaveText('1');
});
