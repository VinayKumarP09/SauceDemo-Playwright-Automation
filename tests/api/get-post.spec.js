
const { test, expect } = require('@playwright/test');

test('GET - Verify single post', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Verify status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody = await response.json();

    // Verify response data
    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).not.toBe('');

    console.log(responseBody);
});
