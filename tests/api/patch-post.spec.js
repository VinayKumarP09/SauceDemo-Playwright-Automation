
const { test, expect } = require('@playwright/test');

test('PATCH - Update post title', async ({ request }) => {

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                title: 'Updated Title Using PATCH'
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('Updated Title Using PATCH');
    expect(responseBody.userId).toBe(1);
    expect(responseBody.body).not.toBe('');

});
