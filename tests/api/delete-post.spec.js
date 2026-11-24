
const { test, expect } = require('@playwright/test');

test('DELETE - Delete an existing post', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});

});
