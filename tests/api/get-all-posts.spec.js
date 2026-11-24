
const { test, expect } = require('@playwright/test');

test('GET - Verify all posts', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody).toHaveLength(100);
    expect(responseBody[0].id).toBe(1);

    responseBody.forEach((post) => {
        expect(post.title).not.toBe('');
    });

});
