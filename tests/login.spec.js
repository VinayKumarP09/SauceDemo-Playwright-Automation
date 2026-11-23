

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const users = require('../test-data/users.json');

test('Verify successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

});

test('Verify login with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
        .toContainText('Username and password do not match');

});

test('Verify login with locked-out user', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
        .toContainText('Sorry, this user has been locked out');

});


/*
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Verify successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

    await expect(page.getByText('Products', { exact: true })).toBeVisible();

});

test('Verify login with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('wrong_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
        .toContainText('Username and password do not match');

});

test('Verify login with locked-out user', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
        .toContainText('Sorry, this user has been locked out');

});

*/

/*
const { test, expect } = require('@playwright/test');

test('Verify successful login with valid credentials', async ({ page }) => {

    // Navigate to SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify successful login
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

    // Verify Products heading
    await expect(page.getByText('Products', { exact: true })).toBeVisible();

});


test('Verify login with invalid credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('wrong_user');

    await page.locator('[data-test="password"]').fill('wrong_password');

    await page.locator('[data-test="login-button"]').click();

    // Verify error message
    await expect(page.locator('[data-test="error"]')).toBeVisible();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

});


test('Verify login with locked-out user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('locked_out_user');

    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Sorry, this user has been locked out');

});


*/