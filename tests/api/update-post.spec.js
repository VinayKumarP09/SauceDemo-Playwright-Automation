
const { test, expect } = require('@playwright/test');

test('PUT - Update an existing post', async ({ request }) => {

    // const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',

     const response = await request.put('posts/1',
        {
            data: {
                id: 1,
                title: 'Updated QA Automation',
                body: 'Testing PUT API using Playwright',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('Updated QA Automation');
    expect(responseBody.body).toBe('Testing PUT API using Playwright');
    expect(responseBody.userId).toBe(1);

});
