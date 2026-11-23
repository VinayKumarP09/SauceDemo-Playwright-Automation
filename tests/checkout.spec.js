
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const users = require('../test-data/users.json');

test('Verify successful checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

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

  // Verify cart
  await expect(cartPage.productName)
    .toHaveText('Sauce Labs Backpack');

  // Click checkout
  await cartPage.checkoutButton.click();

  // Enter customer details
  await checkoutPage.enterCheckoutDetails(
    'Vinay',
    'Kumar',
    '500001'
  );

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify overview page
  await expect(page.locator('.title'))
    .toHaveText('Checkout: Overview');

  // Finish checkout
  await checkoutPage.finishCheckout();

  // Verify order completion
  await expect(checkoutPage.completeHeader)
    .toHaveText('Thank you for your order!');
});

test('Verify checkout with empty first name', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  // Add product
  await productsPage.addProductToCart('Sauce Labs Backpack');

  // Open cart and checkout
  await productsPage.openCart();
  await cartPage.checkoutButton.click();

  // Enter incomplete details
  await checkoutPage.enterCheckoutDetails(
    '',
    'Kumar',
    '500001'
  );

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify error message
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: First Name is required');
});

test('Verify checkout with empty last name', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.checkoutButton.click();

  //await checkoutPage.enterCheckoutDetails('', '', '500001');

  await checkoutPage.enterCheckoutDetails(
  'Vinay',
  '',
  '500001'
);

  await checkoutPage.continueCheckout();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: Last Name is required');
});

test('Verify checkout with empty postal code', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.checkoutButton.click();

  await checkoutPage.enterCheckoutDetails('Vinay', 'Kumar', '');

  await checkoutPage.continueCheckout();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: Postal Code is required');
});