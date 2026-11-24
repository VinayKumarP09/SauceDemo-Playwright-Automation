# SauceDemo Playwright Automation

![Playwright Tests](https://github.com/VinayKumarP09/SauceDemo-Playwright-Automation/actions/workflows/playwright.yml/badge.svg)

## Project Overview

This project is a QA automation framework developed using Playwright with JavaScript.

It automates end-to-end UI scenarios on the SauceDemo e-commerce application and performs REST API testing using Playwright API testing and Postman.

The UI framework follows the Page Object Model (POM) design pattern to improve code reusability, maintainability, and readability.

## Technologies Used

- JavaScript
- Playwright Test
- Node.js
- Page Object Model (POM)
- JSON Test Data
- Postman
- REST API Testing
- Git and GitHub
- GitHub Actions (CI/CD)

## Project Structure

```text
SauceDemo-Playwright-Automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── test-data/
│   └── users.json
│
├── tests/
│   ├── api/
│   │   ├── get-post.spec.js
│   │   ├── get-all-posts.spec.js
│   │   ├── create-post.spec.js
│   │   ├── update-post.spec.js
│   │   ├── patch-post.spec.js
│   │   └── delete-post.spec.js
│   │
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── postman/
│   └── SauceDemo-Portfolio-API-Testing.json
│
├── screenshots/
│   └── playwright-report.png
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## UI Automated Test Scenarios

### Login

- Verify successful login with valid credentials.
- Verify login failure with invalid credentials.
- Verify locked-out user login.

### Products

- Verify products page after login.
- Verify product count.
- Add a product to the shopping cart.
- Verify cart badge count.

### Shopping Cart

- Verify cart contents.
- Verify product name and price.
- Remove a product from the cart.

### Checkout

- Complete a successful checkout.
- Verify validation for missing first name.
- Verify validation for missing last name.
- Verify validation for missing postal code.

## API Testing – Playwright

API automation is implemented using Playwright API testing with JSONPlaceholder REST APIs.

### API Test Coverage

- GET – Retrieve a single post.
- GET – Retrieve all posts.
- POST – Create a new post.
- PUT – Update an existing post.
- PATCH – Partially update a post.
- DELETE – Delete an existing post.
- Validate HTTP status codes.
- Validate response body and properties.

## API Testing – Postman

API testing is also performed using Postman with JSONPlaceholder REST APIs.

### Postman Test Coverage

- GET, POST, PUT, PATCH, and DELETE requests.
- Request header validation.
- Query parameter validation.
- Status code and response body validation.
- JSON schema validation.
- Dynamic test data validation.
- Response time validation.

The exported Postman collection is available at:

`postman/SauceDemo-Portfolio-API-Testing.json`

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/VinayKumarP09/SauceDemo-Playwright-Automation.git
```

Navigate to the project:

```bash
cd SauceDemo-Playwright-Automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Test Execution

Run all tests:

```bash
npx playwright test
```

Run tests on Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --project=chromium --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js --project=chromium
```

Run API tests:

```bash
npx playwright test tests/api --project=chromium
```

View the HTML report:

```bash
npx playwright show-report
```

## Test Execution Results

The current Chromium test suite contains:

- UI Automation: 9 tests
- API Automation: 6 tests
- Total: 15 tests

Latest local execution: **15 passed, 0 failed**.

## CI/CD – GitHub Actions

GitHub Actions is configured to execute the Playwright test suite automatically.

The workflow runs the automated tests and reports the execution result.

[View GitHub Actions](https://github.com/VinayKumarP09/SauceDemo-Playwright-Automation/actions)

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

API practice application: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Test Execution Report

Playwright generates an HTML report after test execution. Run `npx playwright show-report` to view it locally.

## Author

**Vinay Kumar Pedda**

GitHub: [VinayKumarP09](https://github.com/VinayKumarP09)
