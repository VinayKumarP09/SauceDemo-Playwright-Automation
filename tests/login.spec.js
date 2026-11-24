

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
